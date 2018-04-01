const initialState = {
    rooms: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ROOMS_SUCCESS": {
            return {
                ...state,
                rooms: action.rooms
            }
        }
        default: {
            return state
        }
    }
}
