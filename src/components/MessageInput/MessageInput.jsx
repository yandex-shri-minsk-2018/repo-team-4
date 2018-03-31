import React, {Component} from 'react';
import './MessageInput.css';

class MessageInput extends Component {
    render() {
        return (
            <div className="sendmessage__message-wrapper">
                <div className="sendmessage__input">
                    <textarea className="sendmessage__textarea" placeholder="Write message"></textarea>
                </div>
                <div className="sendmessage__smiles">
                    <div className="smiles__icon">
                        <i className="fa fa-smile-o"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageInput;
