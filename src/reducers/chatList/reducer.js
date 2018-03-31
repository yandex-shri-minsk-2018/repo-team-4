const initialState = {
    rooms: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_ROOMS": {
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
