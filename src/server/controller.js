const {findUserBySid, getUsers, getUserByName, getUserBySid,setCurrentUser, addUser} = require("./database/user");
const {joinRoom, leaveRoom, getRooms, getUserRooms, createRoom} = require("./database/room");
const {getMessages, sendMessage} = require("./database/messages");
const TYPES = require("./messages");

/**
 * @param {Db} db
 * @param {*} io
 */
module.exports = function (db, io) {
    const ONLINE = {};

    /**
     * @param {Pagination<User>} users
     * @return {Pagination<User>}
     */
    function fillUsersWithStatus(users) {
        users.items = users.items.map((user) => ({...user, online: Boolean(ONLINE[user._id])}));

        return users;
    }

    /**
     * Connection is created
     */
    io.on("connection", function (socket) {
        let {sid} = socket.request.cookies,
            isDisconnected = false;

        socket.join("broadcast");

        /**
         * Invoke callback and handle errors
         *
         * @param callback
         */
        function wrapCallback(callback) {
            return function (...args) {
                let printErr = (err) => {
                    console.error(err);

                    socket.emit(TYPES.ERROR, {
                        message: err.message,
                        stack: err.stack
                    });

                    throw err;
                };

                try {
                    return callback(...args).catch(printErr);
                } catch (err) {
                    printErr(err);
                }
            };
        }

        function requestResponse(type, callback) {
            socket.on(type, wrapCallback(async ({id, payload}) => {
                socket.emit(type + id, await callback(payload));
            }));
        }

        /**
         * Send notification to every user about status change
         *
         * @param {string} userId
         */
        function userChangeOnlineStatus(userId) {
            socket.broadcast.emit(TYPES.ONLINE, {
                status: ONLINE[userId],
                userId
            });
        }

        /**
         * Join to socket channel, to broadcast messages inside Room
         *
         * @param {string} roomId
         */
        function joinToRoomChannel(roomId) {
            socket.join("room:" + roomId);
        }

        /**
         * Leave socket channel
         *
         * @param {string} roomId
         */
        function leaveRoomChannel(roomId) {
            socket.leave("room:" + roomId);
        }

        /**
         * Broadcast messages inside Room about user joined
         *
         * @param {string} userId
         * @param {string} roomId
         */
        function userWasJoinedToRoom({userId, roomId}) {
            socket.to("room:" + roomId).emit(TYPES.USER_JOINED, {userId, roomId});
        }

        /**
         * Broadcast messages inside Room about user leave
         *
         * @param {string} userId
         * @param {string} roomId
         */
        function userLeaveRoom({userId, roomId}) {
            socket.to("room:" + roomId).emit(TYPES.USER_LEAVED, {userId, roomId});
        }

        /**
         * New message coming to room
         *
         * @param {Message} message
         */
        function newMessage(message) {
            socket.to("room:" + message.roomId).emit(TYPES.MESSAGE, message);
        }

        // Load user information for next usage
        let userPromise = findUserBySid(db, sid).catch((error) => {
            throw new Error(`Cannot load user: ${error}`);
        });


        // Receive current user information
        requestResponse(TYPES.CURRENT_USER, () => {
            console.log("current user");
            return userPromise;
        });

        // Return list of all users with
        requestResponse(TYPES.USERS, async (params) => {
            return fillUsersWithStatus(await getUsers(db, params || {}));
        });
        // Return user by name
        requestResponse(TYPES.USER_BY_NAME, async (params) => {
            let {sid} = socket.request.cookies;

            return await getUserByName(db, params, sid);
        });

        // Set a current user
        requestResponse(TYPES.SET_CURRENT_USER, async (payload) => {
            payload = {
                ...payload,
                sid: sid,
            };
            return await setCurrentUser(db, payload);
        });

        requestResponse(TYPES.CHECK_AUTH, async () => {
            let {sid} = socket.request.cookies;
            console.log("sid from controller.js", sid);
            return await getUserBySid(db, sid);
        });

        // Create room
        requestResponse(TYPES.CREATE_ROOM, async (params) => {
            console.log("create room");
            let currentUser = await userPromise;

            return createRoom(db, currentUser, params);
        });

        // Create room
        requestResponse(TYPES.ROOMS, (params) => {
            return getRooms(db, params || {});
        });

        // Create user
        requestResponse(TYPES.ADD_USER, (params) => {
            return addUser(db, params);
        });


        // Rooms of current user
        requestResponse(TYPES.CURRENT_USER_ROOMS, async (params) => {
            console.log("current user rooms");
            let currentUser = await userPromise;

            return getUserRooms(db, currentUser._id, params);
        });


        // Join current user to room
        requestResponse(TYPES.CURRENT_USER_JOIN_ROOM, async ({roomId}) => {
            console.log("current user join room");
            let currentUser = await userPromise;

            let payload = {
                roomId,
                userId: currentUser._id
            };

            joinToRoomChannel(roomId);
            userWasJoinedToRoom(payload);

            return joinRoom(db, payload);
        });

        // Join user to room
        requestResponse(TYPES.USER_JOIN_ROOM, (payload) => {
            joinToRoomChannel(payload.roomId);
            userWasJoinedToRoom(payload);

            return joinRoom(db, payload);
        });

        // Leave current user to room
        requestResponse(TYPES.CURRENT_USER_LEAVE_ROOM, async ({roomId}) => {
            let currentUser = await userPromise;
            console.log("current user leave room");
            let payload = {
                roomId,
                userId: currentUser._id
            };

            leaveRoomChannel(roomId);
            userLeaveRoom(payload);

            return leaveRoom(db, payload);
        });

        // Send message
        requestResponse(TYPES.SEND_MESSAGE, async (payload) => {
            let currentUser = await userPromise;
            console.log("send message");
            let message = await sendMessage(db, {
                ...payload,
                userId: currentUser._id
            });

            newMessage(message);

            return message;
        });

        // Send message
        requestResponse(TYPES.MESSAGES, (payload) => getMessages(db, payload));
        console.log("messages");
        userPromise.then(async (user) => {
            if (!isDisconnected) {
                ONLINE[user._id] = true;
            }

            userChangeOnlineStatus(user._id);

            // Get of user groups
            let rooms = await getUserRooms(db, user._id);

            rooms.items.forEach((room) => {
                joinToRoomChannel(db, room._id);
            });
        });

        socket.on("disconnect", async () => {
            isDisconnected = true;
            console.log("disconnect socket");
            let user = await userPromise;

            ONLINE[user._id] = false;

            userChangeOnlineStatus(user._id);
        });

    });


};
