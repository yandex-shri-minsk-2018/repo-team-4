import {combineReducers} from "redux";
import navigation from "./navigation/reducer";
import chat from "./chat/reducer";
import currentUser from "./currentUser/reducer";
import authorization from "./authorization/reducer";

export default combineReducers({
    navigation,
    chat,
    authorization
    chat,
    currentUser
});
