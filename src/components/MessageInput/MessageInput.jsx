import React, {Component} from 'react';
import './MessageInput.css';

class MessageInput extends Component {
    render() {
        return (
            <div className="sendmessage__message-wrapper">
                <div className="sendmessage__input">
                    <input className="sendmessage__textarea" placeholder="Write message">

                    </input>
                </div>
            </div>
        );
    }
}

export default MessageInput;
