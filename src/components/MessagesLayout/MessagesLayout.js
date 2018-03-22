import React, { Component } from 'react';

import Header from '../Header/Header'
import IncomingMessage from '../IncomingMessage/IncomingMessage'
import OutgoingMessage from '../OutgoingMessage/OutgoingMessage'
import SendMessage from "../SendMessage/SendMessage"

import './MessagesLayout.css';

class MessagesLayout extends Component{
    constructor(props){
        super(props);

        this.incomingMessageAvatar = 'https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by'
        this.myAvatar = 'https://vignette.wikia.nocookie.net/borderlands/images/1/13/Awesome.png/revision/latest?cb=20091026223409'
        this.incomingMessage='Hi Andrea! How are you?';
        this.outgoingMessage='Doing good, how do you feel about grabbing a coffee sometime?';

        if (props.incomingMessage)
            this.incomingMessage = props.incomingMessage;
        if (props.outgoingMessage)
            this.outgoingMessage = props.outgoingMessage;

        /*
         * Не забыть добавить key, после связки с БД,
         * Сделать вывод сообщений в зависимости от времени их написания
         */
        this.messages = [];
        for (let i = 0; i < 5; i++){
            this.messages.push(
                <IncomingMessage url={this.incomingMessageAvatar} incomingMessage={this.incomingMessage}/>,
                <OutgoingMessage url={this.myAvatar} outgoingMessage={this.outgoingMessage}/>
            )
        }
    }

    componentDidMount(){
        document.getElementById("messagesLayout__messageList")
            .scrollTo(0,document.getElementById("messagesLayout__messageList").scrollHeight)
    }

    render(){
        return(
            <div className="messagesLayout">
                <div className="messagesLayout__header">
                    <Header />
                </div>
                <div className="messagesLayout__messageList" id="messagesLayout__messageList">
                    {this.messages.map(item => item)}
                </div>
                <div className="messagesLayout__textInput">
                </div>
                <SendMessage />
            </div>
        )
    }
}

export default MessagesLayout;