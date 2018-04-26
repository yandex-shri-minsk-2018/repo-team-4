import api from "../../api";

export function authorization() {
    return(dispatch) => {
        api.checkAuth().then((user)=> {
            console.log(user);
            if(user !== null) {
                // dispatch({
                //     type: "CHANGE_LAYOUT",
                //     layout: "chatListLayout"
                // });
            }
            dispatch({
                type: "CHECK_AUTH_SID",
                user: user
            })
        });
    };
}

export function loginButtonHandler(name) {
    return (dispatch) => {
        api.getUserByName(name).then((user)=> {
            dispatch({
                type: "CHECK_AUTH_NAME",
                user: user
            })
        });
    };
}
