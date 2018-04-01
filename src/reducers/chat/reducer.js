const initialState = {
    currentChatId: null,
    chatList: [],
    rooms: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "JOIN_CHAT": {
            return {
                ...state,
                currentChatId: action.id
            }
        }
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
