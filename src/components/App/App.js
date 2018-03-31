import React, { Component } from 'react';
import './App.css';
import Contacts from "../Contacts/Contacts";
import { connect } from 'react-redux'
import { changeLayout } from '../../reducers/navigation/action';
import LoginLayout from "../LoginLayout/LoginLayout";
import ChatListLayout from "../ChatListLayout/ChatListLayout";
import MessagesLayout from "../MessagesLayout/MessagesLayout";


class App extends Component {
    render() {
        let layout;

        switch (this.props.layout) {
            case 'autorization':
                layout = <LoginLayout/>;
                break;
            case 'chatListLayout':
                layout = <ChatListLayout/>;
                break;
            case 'messagesLayout':
                layout = <MessagesLayout/>;
                break;
            case 'contacts':
                layout = <Contacts/>;
                break;
        }



        return (
            <div className="App">
                { layout }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    layout: state.navigation.layout
});

const mapDispatchToProps = dispatch => ({
    changeLayout: changeLayout
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


