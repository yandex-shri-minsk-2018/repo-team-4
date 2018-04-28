const initialState = {
    currentChatId: null,
    chatList: [],
    rooms: [],
    loading: true,
    users: [],
    messages: [],
    newMessage: null,
    pickedUsers: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case "JOIN_CHAT": {
        return {
            ...state,
            currentChatId: action.id
        };
    }
    case "GET_ROOMS_SUCCESS": {
        return {
            ...state,
            rooms: action.rooms,
            loading: false,
        };
    }
    case "GET_ROOMS": {
        return {
            ...state,
            loading: true,
        };
    }
    case "GET_ROOMS_FAIL": {
        console.log("Ошибка загрузки чатов");
        return {
            ...state,
            loading: false,
        };
    }

    default: {
        return state;
    }
    }
}
