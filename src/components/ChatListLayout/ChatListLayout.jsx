import React from 'react';
import './ChatListLayout.css';
import ChatList from "../ChatList/ChatList";
import {connect} from 'react-redux'
import {changeLayout} from '../../reducers/navigation/action';
import ChatListHeader from "../ChatListHeader/ChatListHeader";

class ChatListLayout extends React.Component {

    onFooterClick() {
        this.props.changeLayout("contacts");
    }

    render() {
        return (
            <div>
                <ChatListHeader/>
                <ChatList/>
                <div className='footer' onClick={this.onFooterClick.bind(this)}>Контакты</div>
            </div>
        );
    }
}

export default connect(
    state => ({
    }), {
        changeLayout
    }
)(ChatListLayout)
