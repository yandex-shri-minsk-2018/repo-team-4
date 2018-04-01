import api from "../../api";

//TODO При создании часа с контактом создать на его стороне тоже
export function joinChat(userId) {
    return (dispatch, getState) => {
        api.getCurrentUser().then(user => {
            console.log(user);
        });
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
        api.getCurrentUserRooms()
            .then((rooms) => {
                dispatch({
                    type: 'SET_ROOMS',
                    rooms: rooms.items
                })

            })
    }
}
