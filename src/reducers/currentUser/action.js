import api from "../../api";

export function getCurrentUserInfo() {
    return (dispatch) => {
        api.getCurrentUser()
            .then((user) => {
                dispatch({
                    type: "GET_CURRENT_USER",
                    currentUser: user
                });
            });
    };
}


export function setProfileUser(userId) {
    return (dispatch) => {
        api.getUser(userId)
            .then((user) => {
                dispatch({
                    type: "SET_PROFILE_USER",
                    profileUser: user
                });
            });
    };
}

export function checkUserStatusByName(userName) {
    return (dispatch) => {
        api.getUsers()
            .then((users) => {
                users.items.forEach(user => {
                    if(user.name===userName){
                        console.log("Пользователь "+ user.name +" "+user.online);
                        dispatch({
                            type: "SET_PARTNER_STATUS",
                            isPartnerOnline: user.online
                        });
                    }

                });
            });
    };
}

