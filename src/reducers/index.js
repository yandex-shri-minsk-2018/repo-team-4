import {combineReducers} from "redux";
import navigation from "./navigation/reducer";
import chat from "./chat/reducer";
import currentUser from "./currentUser/reducer";

export default combineReducers({
    navigation,
    chat,
    currentUser
});
