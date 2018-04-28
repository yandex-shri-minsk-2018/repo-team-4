export function changeLayout(layout) {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_LAYOUT",
            layout
        });
    };
}

export function goPrevLayout() {
    return (dispatch) => {

        dispatch({
            type: "PREV_LAYOUT"
        });
    };
}
