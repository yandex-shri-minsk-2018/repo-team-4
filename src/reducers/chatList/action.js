import api from '../../api'

export function getRooms() {
  return(dispatch, getState) => {
    api.getCurrentUserRooms().then((rooms) => {
      console.log(rooms);
      dispatch({
        type: 'SET_ROOMS',
        rooms: rooms.items
      })
    })
  }
}
