import api from "../../api";

//TODO При создании часа с контактом создать на его стороне тоже
export function joinChat(userId) {
    return (dispatch, getState) => {
        api.getUser(userId)
            .then((user) => {
                return api.createRoom({name: user.name, users: [user._id]})
            })
            .then((room) => {

                dispatch({
                    type: "JOIN_CHAT",
                    id: room._id
                });

                dispatch({
                    type: "CHANGE_LAYOUT",
                    layout: 'messagesLayout'
                });
            })

    }
}

export function joinExistingChat(roomId) {
    return (dispatch, getState) => {
        api.getRoom(roomId)
            .then((room) => {

                dispatch({
                    type: "JOIN_CHAT",
                    id: room._id
                });

                dispatch({
                    type: "CHANGE_LAYOUT",
                    layout: 'messagesLayout'
                });
            })

    }
}

export function getRooms() {
    return (dispatch, getState) => {
        dispatch({type: 'GET_ROOMS'})
        api.getCurrentUserRooms()
            .then((rooms) => {
                dispatch({
                    type: 'GET_ROOMS_SUCCESS',
                    rooms: rooms.items
                })

            }).catch((error) => {
            dispatch({ type: 'GET_ROOMS_FAIL' })
        })
    }
}

export function getContacts() {
    return (dispatch, getState) => {
        dispatch({type: 'GET_CONTACTS'});
        api.getUsers().then((users) => {
            dispatch({
                type: 'GET_CONTACTS_SUCCESS',
                users: users.items
            })

        }).catch((error) => {
            dispatch({ type: 'GET_CONTACTS_FAIL' })
        })
    }
}
