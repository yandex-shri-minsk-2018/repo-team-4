import React, {Component} from 'react';

import Header from '../Header/Header'
import SendMessage from '../SendMessage/SendMessage'
import {Message} from '../Message/Message'

import './MessagesLayout.css';

export class MessagesLayout extends Component {
    constructor(props) {
        super(props);

        this.incomingMessageAvatar = 'https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by';
        this.myAvatar = 'https://vignette.wikia.nocookie.net/borderlands/images/1/13/Awesome.png/revision/latest?cb=20091026223409';

        /**
         * todo: передавать в балун Timestamp сообщения в формате 'hh:mm', реализовать поддержку
         * todo: получать аватар пользователя в зависимости от его id. Для этого добавить в сущность User поле 'Avatar'
         * todo: асинхронность
         *
         * userId 1001 - авторизированный пользователь
         * Пока что в псевдо-бд стоит рандом входящих/исходящих сообщений
         */

        // let messages = await api.getRoomMessages(roomId);
        this.dbMessage = [];
        for (let i = 0; i < 10; i++)
            this.dbMessage.push({
                _id: "000" + i.toString(),
                userId: "100" + Math.floor(1 + Math.random() * 2),
                message: "BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBlaBlaBla__" + i.toString(),
                created_at: 28032018171900 + i
            })

        /**
         * todo: получать аватарку получив информацию о юзере. userId брать из сообщения
         *
         * userId = this.dbMessage[i]._id
         * let user = await api.getUser(userId);
         * url={user.avatar}
         */

        this.messages = [];
        for (let i = 0; i < 10; i++) {
            this.messages.push(
                <Message
                    key={this.dbMessage[i]._id}
                    url={this.dbMessage[i].userId === "1001" ? this.myAvatar : this.incomingMessageAvatar}
                    messageText={this.dbMessage[i].message}
                    isMyMessage={this.dbMessage[i].userId === "1001"}/>
            )
        }
    }

    componentDidMount() {
        document.getElementById('messages-layout__messages')
            .scrollTo(0, document.getElementById('messages-layout__messages').scrollHeight)
    }

    render() {
        return (
            <div className='messages-layout'>
                <div className='messages-layout__header'>
                    <Header/>
                </div>
                <div className='messages-layout__messages' id='messages-layout__messages'>
                    {this.messages.map(item => item)}
                </div>
                <div className='messages-layout__send-message'>
                </div>
                <SendMessage/>
            </div>
        )
    }
}
