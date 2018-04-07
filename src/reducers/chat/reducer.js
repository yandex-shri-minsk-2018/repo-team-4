const initialState = {
    currentChatId: null,
    chatList: [],
    rooms: [],
    loading: true,
    users: [],
    messages: [],
    newMessage: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "JOIN_CHAT": {
            return {
                ...state,
                currentChatId: action.id
            }
        }
        case "GET_ROOMS_SUCCESS": {
            return {
                ...state,
                rooms: action.rooms,
                loading: false,
            }
        }
        case "GET_ROOMS": {
            return {
                ...state,
                loading: true,
            }
        }
        case "GET_ROOMS_FAIL": {
            console.log('Ошибка загрузки чатов');
            return {
                ...state,
                loading: false,
            }
        }

        case "GET_CONTACTS_SUCCESS": {
            return {
                ...state,
                users: action.users,
                loading: false,
            }
        }
        case "GET_CONTACTS": {
            return {
                ...state,
                loading: true,
            }
        }
        case "GET_CONTACTS_FAIL": {
            console.log('Ошибка загрузки чатов');
            return {
                ...state,
                loading: false,
            }
        }


        case "GET_MESSAGES_SUCCESS": {
            return {
                ...state,
                messages: action.messages,
            }
        }
        case "GET_MESSAGES": {
            return {
                ...state,
            }
        }
        case "GET_MESSAGES_FAIL": {
            console.log('Ошибка загрузки чатов');
            return {
                ...state,
            }
        }

        case "ON_NEW_MESSAGE": {
            return {
                ...state,
                messages: state.messages.concat(action.newMessage)
            }
        }


        default: {
            return state
        }
    }
}
