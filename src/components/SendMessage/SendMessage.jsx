import React, {Component} from 'react';
import MessageAttachement from '../MessageAttachement/MessageAttachement';
import MessageInput from '../MessageInput/MessageInput';

import './SendMessage.css';


class SendMessage extends Component {

    render() {
        return (
            <div className="sendmessage">
                <MessageAttachement />
                <MessageInput />
                <div className="sendmessage__send-button">
                        <button className="send-button__button">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                </div>
            </div>
        );
    }
}

export default SendMessage