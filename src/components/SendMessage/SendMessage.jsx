import React, {Component} from 'react';
import MessageAttachement from '../MessageAttachement/MessageAttachement';
import MessageInput from '../MessageInput/MessageInput';
import api from '../../api';
import './SendMessage.css';


class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.roomId
    }
    this.clickTextHundler = this.clickTextHundler.bind(this);
  }


  clickTextHundler() {
    const valueText = document.querySelector('.sendmessage__textarea').value;
    console.log(valueText);

  (async () => {
    let rooms = await api.getRooms();
    console.log(rooms);
    let room = await api.currentUserJoinRoom(this.state.text);
    console.log(room);
     console.log(valueText);
     let message = await api.sendMessage(this.state.text, valueText);
  })();
}

    render() {
      const { clickTextHundler } = this;
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
