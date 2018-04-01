const initialState = {
    //layout: "autorization",
    layout: "chatListLayout",
    prevLayout: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_LAYOUT": {
            return {
                ...state,
                layout: action.layout,
                prevLayout: state.layout
            }
        }
        case "PREV_LAYOUT": {
            return {
                ...state,
                layout: state.prevLayout,
                prevLayout: null
            }
        }
        default: {
            return state
        }
    }
}
