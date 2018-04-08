import {combineReducers} from "redux";
import navigation from "./navigation/reducer";
import chat from "./chat/reducer";

export default combineReducers({
    navigation,
    chat
});
