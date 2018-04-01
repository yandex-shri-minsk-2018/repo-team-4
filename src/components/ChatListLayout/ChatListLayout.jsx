import React from 'react';
import './ChatListLayout.css';
import ChatList from "../ChatList/ChatList";
import HeaderTemplate from "../HeaderTemplate/HeaderTemplate";

import {connect} from 'react-redux'
import {changeLayout} from '../../reducers/navigation/action';
import {joinChat} from "../../reducers/chat/action";

class ChatListLayout extends React.Component {

    onFooterClick() {
        this.props.changeLayout("contacts");
    }

    render() {
        return (
            <div>
                <HeaderTemplate title='Диалоги'/>
                <ChatList/>
                <div className='mockFooter' onClick={this.onFooterClick.bind(this)}>Контакты</div>
            </div>
        );
    }
}

export default connect(
    state => ({
        layout: state.navigation.layout
    }), {
        changeLayout,
        joinChat
    }
)(ChatListLayout)
