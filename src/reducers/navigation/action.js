export function changeLayout(layout) {
    return(dispatch, getState) => {
        dispatch({
            type: "CHANGE_LAYOUT",
            layout
        })
    }
}
