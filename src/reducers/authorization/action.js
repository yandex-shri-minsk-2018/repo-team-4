import api from "../../api";

export function authorization() {
    return (dispatch) => {
        api.checkAuth().then((user) => {
            console.log(user);
            if (user !== null) {
                dispatch({
                    type: "CHANGE_LAYOUT",
                    layout: "chatListLayout"
                });
            }
        });
    };
}

export function signUp(name, email, password) {
    return (dispatch) => {
        let user = {
            name: name,
            email: email,
            password: password
        };
        api.addUser(user).then(() => {
            dispatch({
                type: "CHANGE_LAYOUT",
                layout: "authorization"
            });
        });
    };
}

export function loginButtonHandler(name) {

    return (dispatch) => {
        api.getUsers().then(users => {
            users.items.forEach(user => {
                if (user.name === name) {
                    // api.getUserByName(user.name);
                    api.setCurrentUser(user._id).then((user) => {
                        dispatch({
                            type: "SET_CURRENT_USER",
                            user: user
                        });
                        dispatch({
                            type: "CHANGE_LAYOUT",
                            layout: "chatListLayout"
                        });

                    });
                }
            });
        });
    };
}
