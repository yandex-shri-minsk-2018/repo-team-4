import React, {Component} from 'react';

import Header from '../Header/Header'
import SendMessage from '../SendMessage/SendMessage'
import {Message} from '../Message/Message'

import './MessagesLayout.css';
import api from '../../api';

export default class MessagesLayout extends Component {
    /**
     * todo: передавать в балун Timestamp сообщения в формате 'hh:mm', реализовать поддержку
     * todo: получать аватар пользователя в зависимости от его id. Для этого добавить в сущность User поле 'Avatar'
     */

    /**
     * todo: получать аватарку получив информацию о юзере. userId брать из сообщения
     *
     * userId = this.dbMessage[i]._id
     * let user = await api.getUser(userId);
     * url={user.avatar}
     */

    state = {
        messages : [],
        currentUserId: '',
        incomingMessageAvatar: 'https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by',
        myAvatar: 'https://vignette.wikia.nocookie.net/borderlands/images/1/13/Awesome.png/revision/latest?cb=20091026223409'
    };

    componentDidMount() {
        api.getRoomMessages(this.props.roomId)
            .then((messages) => {
                this.setState({ messages: messages.items });
                document.getElementById('messages-layout__messages')
                    .scrollTo(0, document.getElementById('messages-layout__messages').scrollHeight);
            });
        api.getCurrentUser()
            .then((user) => {
                const currentUser = user._id;
                this.setState({ currentUserId: currentUser });
            });
    }

    render() {
        let messages = this.state.messages;
        let currentUserId = this.state.currentUserId;
        let myAvatar = this.state.myAvatar;
        let incomingMessageAvatar = this.state.incomingMessageAvatar;

        return (
            <div className='messages-layout'>
                <div className='messages-layout__header'>
                    <Header/>
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
