const {ObjectId} = require("mongodb");

const {getSessionInfo, saveSessionInfo, deleteSessionInfo} = require("./session");
const {pageableCollection} = require("./helpers"); //insertOrUpdateEntity для создания пользователя
const faker = require("faker/locale/ru");

const TABLE = "users";

/**
 * @typedef {{
 *  [_id]: string,
 *  name: string,
 *  email: string,
 *  phone: string,
 *  [status]: boolean
 * }} User
 */

/**
 * @param {Db} db
 * @param {string} sid Session ID
 *
 * @returns {Promise<User>}
 */
async function findUserBySid(db, sid) {
    let session = await getSessionInfo(db, sid);

    console.log("session from user.js", session);

    console.log("СЕССИЯ userid: " + session.userId);
    return db.collection(TABLE).findOne({_id: session.userId});

    // if (!session.userId) {
    //     // Create fake user
    //     console.log("user will create now");
    //     let user = {
    //         name: faker.name.findName(),
    //         email: faker.internet.email(),
    //         phone: faker.phone.phoneNumber()
    //     };
    //
    //     user = await saveUser(db, user);
    //
    //     session.userId = user._id;
    //
    //     await saveSessionInfo(db, session);
    //
    //     return user;
    // } else {
    //     return db.collection(TABLE).findOne({_id: session.userId});
    // }
    // if(session.userId) {
    //     return db.collection(TABLE).findOne({_id: session.userId});
    // }
}

/**
 * @param {Db} db
 * @param {string} userId
 *
 * @returns {Promise<User>}
 */
async function getUser(db, userId) {
    if (!userId){
        return null;
    }
    // return db.collection(TABLE).findOne({_id: session.userId});
    return db.collection(TABLE).findOne({_id: ObjectId(userId.toString())});
}

async function setCurrentUser(db, { userId, sid }) {
    if (!userId) {
        throw new Error('User id required');
    }

    if (!sid) {
        throw new Error('Session id required');
    }

    await deleteSessionInfo(db, sid);
    let session = {
        userId: ObjectId(userId),
        sid: sid,
    };
    await saveSessionInfo(db, session);
    return await findUserBySid(db, sid);
}



async function getUserBySid(db, sid) {
    let session = await getSessionInfo(db, sid);
    return db.collection(TABLE).findOne({_id: session.userId});
}
/**
 * @param {Db} db
 * @param {User} user
 *
 * @returns {Promise<User>}
 */
// async function saveUser(db, user) {
//     return insertOrUpdateEntity(db.collection(TABLE), user);
// }

/**
 * @param {Db} db
 * @param {{}} [filter]
 *
 * @return {Promise<Pagination<User>>}
 */
async function getUsers(db, filter) {
    return pageableCollection(db.collection(TABLE), filter);
}
async function getUserByName(db, name, sid) {
    let user = await db.collection(TABLE).findOne({name: name});
    let saveses = await saveSessionInfo(db, {sid: sid, userId: user._id});
    let session = await getSessionInfo(db, saveses._id);
    console.log(user, saveses, session);
    return {sid: session.sid, ...user};
}

/**
 * @param {Db} db
 * @param {String} userId
 * @param {String} sid
 *
 * @returns {Promise<User>}
 */
async function setCurrentUser(db, { userId, sid }) {
    if (!userId) {
        throw new Error('User id required');
    }

    if (!sid) {
        throw new Error('Session id required');
    }

    await deleteSessionInfo(db, sid);
    let session = {
        userId: ObjectId(userId),
        sid: sid,
    };
    await saveSessionInfo(db, session);
    return await findUserBySid(db, sid);
}
module.exports = {
    findUserBySid,
    getUsers,
    getUser,
    getUserByName,
    getUserBySid,
    setCurrentUser
};
