const initialState = {
    user: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHECK_AUTH_NAME": {
            if (action.user !== null) {
                //register user with name and sid
                return {state};
            }
            break;
        }
        case "SET_CURRENT_USER": {
            return {
                ...state,
                user: action.user
            };
        }
        default: {
            return state;
        }
    }
}
