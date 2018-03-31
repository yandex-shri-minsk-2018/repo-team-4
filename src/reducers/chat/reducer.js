const initialState = {
    currentChatId: null,
    chatList: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "JOIN_CHAT": {
            return {
                ...state,
                currentChatId: action.id
            }
        }
        default: {
            return state
        }
    }
}
