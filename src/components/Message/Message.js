import React, {Component} from 'react';

import Avatar from '../Avatar/Avatar'
import Balloon from '../Balloon/Balloon'

import './Message.css';

class Message extends Component {
    render() {
        return (
            <div className={this.props.isMyMessage ?
                'outgoingMessage  messagesLayout__message' : 'incomingMessage messagesLayout__message'}>
                {this.props.isMyMessage && <Balloon message={this.props.messageText}/>}
                <Avatar url={this.props.url} size='small'/>
                {!this.props.isMyMessage && <Balloon message={this.props.messageText} typeMessage={true}/>}
            </div>
        )
    }
}

export default Message;