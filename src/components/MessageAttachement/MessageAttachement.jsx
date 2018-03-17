import React, {Component} from 'react';
import MessageAttachementList from '../MessageAttachementsList/MessageAttachementList';

class MessageAttachement extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            attachementIsOpen: false
        }
    }

    toggleAttachement = () => {
        this.setState({
            attachementIsOpen: !this.state.attachementIsOpen
        });
    }

    render() {
        return (
            <div className="sendmessage__attachement">
                <div className="attachement__icon" onClick={this.toggleAttachement}>
                    <i className="fas fa-paperclip"></i>
                </div>
                <MessageAttachementList isOpen={this.state.attachementIsOpen}/>
            </div>
        );
    }
}

export default MessageAttachement;