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
