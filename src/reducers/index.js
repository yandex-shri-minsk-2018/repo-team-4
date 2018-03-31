import { combineReducers } from 'redux'
import navigation from './navigation/reducer'
import chat from './chat/reducer'
import chatList from './chatList/reducer';

export default combineReducers({
    navigation,
    chat,
    chatList
})
