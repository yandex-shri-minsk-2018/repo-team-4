import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Contacts from "../Contacts/Contacts";
import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";
import LoginLayout from "../LoginLayout/LoginLayout";
import ChatListLayout from "../ChatListLayout/ChatListLayout";
import MessagesLayout from "../MessagesLayout/MessagesLayout";
import Profile from "../Profile/Profile";
import CreateRoomLayout from "../CreateRoomLayout/CreateRoomLayout";

class App extends Component {
    render() {
        let layout;
        switch (this.props.layout) {
            case "autorization":
                layout = <LoginLayout/>;
                break;
            case "chatListLayout":
                layout = <ChatListLayout/>;
                break;
            case "messagesLayout":
                layout = <MessagesLayout/>;
                break;
            case "contacts":
                layout = <Contacts/>;
                break;
            case "profile":
                layout = <Profile/>;
                break;
            case "createRoom":
                layout = <CreateRoomLayout/>;
                break;
            default:
                layout = <LoginLayout/>;
                break;
        }


        return (
            <div className="App">
                {layout}
            </div>
        );
    }
}

App.propTypes = {
    layout: PropTypes.string
};
export default connect(
    state => ({
        layout: state.navigation.layout
    }), {
        changeLayout
    }
)(App);
