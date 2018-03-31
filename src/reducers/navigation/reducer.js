const initialState = {
    layout: "autorization"
};




export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_LAYOUT": {
            return {
                ...state,
                layout: action.layout
            }
        }
    }

    return state;

}
