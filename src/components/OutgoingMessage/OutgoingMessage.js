import React, { Component } from 'react';

import Avatar from '../Avatar/Avatar'
import Balloon from "../Balloon/Balloon";

import './OutgoingMessage.css';

class OutgoingMessage extends Component{
    constructor(props){
        super(props);

        if (props.url)
            this.imageUrl = props.url;
        this.outgoingMessage = props.outgoingMessage
    }

    render() {
        return (
            <div className="outgoingMessage messagesLayout__message">
                <Balloon message={this.outgoingMessage}/>
                <Avatar url={this.imageUrl} size='small'/>
            </div>
        )
    }
}

export default OutgoingMessage;