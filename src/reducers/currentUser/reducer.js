const initialState = {
    currentUser: null,
    isPartnerOnline: false,
    profileUser: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case "GET_CURRENT_USER": {
        return {
            ...state,
            currentUser: action.currentUser,
        };
    }
    case "SET_PROFILE_USER": {
        return {
            ...state,
            profileUser: action.profileUser,
        };
    }
    case "SET_PARTNER_STATUS": {
        return {
            ...state,
            isPartnerOnline: action.isPartnerOnline,
        };
    }
    default: {
        return state;
    }
    }
}
