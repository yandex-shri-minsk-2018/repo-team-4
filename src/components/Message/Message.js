import React, {Component} from 'react';

import Avatar from '../Avatar/Avatar'
import Balloon from '../Balloon/Balloon'

import './Message.css';

class Message extends Component {
    render() {
        return (
            <div className={this.props.isMyMessage ?
                'outgoingMessage  messagesLayout__message' : 'incomingMessage messagesLayout__message'}>
                <Avatar url={this.props.url} size='small'/>
                <Balloon message={this.props.messageText} typeMessage={!this.props.isMyMessage}/>
            </div>
        )
    }
}

export default Message;