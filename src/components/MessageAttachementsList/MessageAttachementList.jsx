import React, {Component} from 'react';
import './MessageAttachementList.css'

class MessageAttachementsList extends Component {
    constructor(props) {
        super(props)

        this.props = props;

        this.state = {
            isOpen: this.props.isOpen
        }
    }

    render() {
        if(this.props.isOpen != this.state.isOpen) {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
        return (
            <ul className={this.state.isOpen ? "message-attachements message-attachement_opened" : "message-attachements message-attachement_close"}>
                <li className="message-attachements__li"><i className="fas fa-images"></i> Photo</li>
                <li className="message-attachements__li"><i className="fas fa-video"></i> Video</li>
                <li className="message-attachements__li"><i className="fas fa-file"></i> Document</li>
            </ul>
        );
    }
}

export default MessageAttachementsList;