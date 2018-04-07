import React, {Component} from 'react';

import Header from '../Header/Header'
import SendMessage from '../SendMessage/SendMessage'
import {Message} from '../Message/Message'

import './MessagesLayout.css';
import api from '../../api';

import {connect} from "react-redux";
import {getRoomMessages, joinChat} from "../../reducers/chat/action";

class MessagesLayout extends Component {
    /**
     * todo: передавать в балун Timestamp сообщения в формате 'hh:mm', реализовать поддержку
     * todo: получать аватар пользователя в зависимости от его id. Для этого добавить в сущность User поле 'Avatar'
     * todo: получать аватарку получив информацию о юзере. userId брать из сообщения
     */

    state = {
        messages : [],
        currentUserId: '',
        incomingMessageAvatar: 'https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by',
        myAvatar: 'https://vignette.wikia.nocookie.net/borderlands/images/1/13/Awesome.png/revision/latest?cb=20091026223409'
    };

    componentDidMount() {
        this.props.getRoomMessages(this.props.roomId);


        api.getCurrentUser()
            .then((user) => {
                const currentUser = user._id;
                this.setState({ currentUserId: currentUser });
            });
        api.getRoom(this.props.roomId).then((room) => {
            this.setState({
                room: room
            })
        })
    }

    componentDidUpdate(){
        document.getElementById('messages-layout__messages')
            .scrollTo(0, document.getElementById('messages-layout__messages').scrollHeight);
    }

    render() {
        let messages = this.props.messages;
        let currentUserId = this.state.currentUserId;
        let myAvatar = this.state.myAvatar;
        let incomingMessageAvatar = this.state.incomingMessageAvatar;
        let roomData = this.state.room;
        return (
            <div className='messages-layout'>
                <div className='messages-layout__header'>
                    <Header chatName={roomData && roomData.name}/>
                </div>
                <div className='messages-layout__messages' id='messages-layout__messages'>
                    {messages && messages.map(function(message){
                        return <Message
                            key={message._id}
                            url={message.userId === currentUserId ? myAvatar : incomingMessageAvatar}
                            messageText={message.message}
                            isMyMessage={message.userId === currentUserId}/>
                    })}
                </div>
                <div className='messages-layout__send-message'>
                </div>
                <SendMessage roomId={this.props.roomId}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        roomId: state.chat.currentChatId,
        messages: state.chat.messages
    }), {
        joinChat,
        getRoomMessages
    }
)(MessagesLayout)
