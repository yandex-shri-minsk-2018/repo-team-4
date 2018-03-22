import React, { Component } from 'react';

import Avatar from '../Avatar/Avatar'
import Balloon from "../Balloon/Balloon";

import './IncomingMessage.css';

class IncomingMessage extends Component{
    render() {
        return (
            <div className="incomingMessage messagesLayout__message">
                <Avatar url={this.props.url} size='small'/>
                <Balloon message={this.props.incomingMessage} typeMessage={true}/>
            </div>
        )
    }
}

export default IncomingMessage;