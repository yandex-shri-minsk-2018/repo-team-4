import React, { Component } from 'react';

import Avatar from '../Avatar/Avatar'
import Balloon from "../Balloon/Balloon";

import './OutgoingMessage.css';

class OutgoingMessage extends Component{
    render() {
        return (
            <div className="outgoingMessage messagesLayout__message">
                <Balloon message={this.props.outgoingMessage}/>
                <Avatar url={this.props.url} size='small'/>
            </div>
        )
    }
}

export default OutgoingMessage;