const initialState = {
    user:[]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHECK_AUTH_NAME": {
            if(action.user !== null) {
                //register user with name and sid
                return {state}
            }
            break;
        }
        default: {
            return state;
        }
    }
}
