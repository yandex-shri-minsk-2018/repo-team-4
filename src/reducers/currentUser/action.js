import api from "../../api";

//TODO При создании часа с контактом создать на его стороне тоже
export function getCurrentUserInfo() {
    return (dispatch) => {
        api.getCurrentUser()
            .then((user) => {
                console.log(user);
                dispatch({
                    type: "GET_CURRENT_USER",
                    currentUser: user
                });
            });
    };
}
