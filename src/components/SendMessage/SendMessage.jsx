import React, {Component} from 'react';
import MessageAttachement from '../MessageAttachement/MessageAttachement';
import MessageInput from '../MessageInput/MessageInput';
import api from '../../api';
import './SendMessage.css';


class SendMessage extends Component {
    clickTextHundler() {
        const valueText = document.querySelector('.sendmessage__textarea').value;
        console.log(valueText);

        (async () => {
            await api.currentUserJoinRoom(this.props.roomId);
            await api.sendMessage(this.props.roomId, valueText);
        })();
    }

    render() {
        return (
            <div className="sendmessage">
                <MessageAttachement />
                <MessageInput />
                <div className="sendmessage__send-button">
                  <button className="send-button__button" onClick={() => this.clickTextHundler()}>
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </div>
            </div>
        );
    }
}

export default SendMessage
