import api from "../../api";

//TODO При создании часа с контактом создать на его стороне тоже
export function joinChat(userId) {
    return (dispatch, getState) => {
        api.getUser(userId)
            .then((user) => {
                return api.createRoom({name: user.name, users: [user._id]});
            })
            .then((room) => {
                api.currentUserJoinRoom(room._id)
                    .then(() => {
                        api.onMessage((mess) => {
                            dispatch({
                                type: "NEW_MESSAGE",
                                newMessage: mess
                            });
                        });
                    });

                dispatch({
                    type: "JOIN_CHAT",
                    id: room._id
                });

                dispatch({
                    type: "CHANGE_LAYOUT",
                    layout: "messagesLayout"
                });
            });

    };
}

export function joinExistingChat(roomId) {
    return (dispatch, getState) => {
        api.getRoom(roomId)
            .then((room) => {
                api.currentUserJoinRoom(room._id)
                    .then((room) => {
                        api.onMessage((mess) => {
                            dispatch({
                                type: "ON_NEW_MESSAGE",
                                newMessage: [mess]
                            });
                        });
                    });

                dispatch({
                    type: "JOIN_CHAT",
                    id: room._id
                });

                dispatch({
                    type: "CHANGE_LAYOUT",
                    layout: "messagesLayout"
                });
            });

    };
}

export function getRooms() {
    return (dispatch, getState) => {
        dispatch({type: "GET_ROOMS"});
        api.getCurrentUserRooms()
            .then((rooms) => {

                Promise.all(rooms.items.map(setLastMessageToRoom)).then((result) => {
                    rooms.items.sort(compareRooms);
                    dispatch({
                        type: "GET_ROOMS_SUCCESS",
                        rooms: rooms.items
                    });
                }).catch((error) => {
                    dispatch({type: "GET_ROOMS_FAIL"});
                });

            });

    };
}

export function getRoomMessages(roomId) {
    return (dispatch, getState) => {
        dispatch({type: "GET_MESSAGES"});
        api.getRoomMessages(roomId)
            .then((messages) => {
                dispatch({
                    type: "GET_MESSAGES_SUCCESS",
                    messages: messages.items.reverse()
                });
            }).catch((error) => {
                dispatch({type: "GET_MESSAGES_FAIL"});
            });
    };
}

export function getContacts() {
    return (dispatch, getState) => {
        dispatch({type: "GET_CONTACTS"});
        api.getUsers().then((users) => {
            dispatch({
                type: "GET_CONTACTS_SUCCESS",
                users: users.items
            });

        }).catch((error) => {
            dispatch({type: "GET_CONTACTS_FAIL"});
        });
    };
}

export function sendMessage(roomId, message) {
    return (dispatch, getState) => {
        api.sendMessage(roomId, message).then((message) => {
            dispatch({
                type: "ON_NEW_MESSAGE",
                newMessage: [message]
            });
        });
    };
}

function setLastMessageToRoom(room) {
    return new Promise(function (resolve, reject) {
        api.getRoomMessages(room._id).then((messages) => {
            room.lastMessage = messages.items[0];
            resolve(room);
        });
    });
}

function compareRooms(firstRoom, secondRoom) {
    if (firstRoom.lastMessage && secondRoom.lastMessage) {
        if (firstRoom.lastMessage.created_at < secondRoom.lastMessage.created_at)
            return 1;
        if (firstRoom.lastMessage.created_at > secondRoom.lastMessage.created_at)
            return -1;
        return 0;
    }
    else if (firstRoom.lastMessage) {
        return -1;
    }
    else if (secondRoom.lastMessage) {
        return 1;
    }
    else if (!firstRoom.lastMessage && !secondRoom.lastMessage) {
        return 0;
    }

}
