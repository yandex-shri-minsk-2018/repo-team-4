import api from '../../api'

export function getRooms() {
  return(dispatch, getState) => {
    api.getCurrentUserRooms().then((rooms) => {
      console.log(rooms);
      dispatch({
        type: 'GET_ROOMS_SUCCESS',
        rooms: rooms.items
      })
    })
  }
}
