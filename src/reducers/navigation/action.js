export function changeLayout(layout) {
    return (dispatch, getState) => {
        dispatch({
            type: "CHANGE_LAYOUT",
            layout
        })
    }
}

export function goPrevLayout() {
    return (dispatch, getState) => {
        dispatch({
            type: "PREV_LAYOUT"
        })
    }
}
