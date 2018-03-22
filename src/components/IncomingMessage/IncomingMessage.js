import React, { Component } from 'react';

import Avatar from '../Avatar/Avatar'
import Balloon from "../Balloon/Balloon";

import './IncomingMessage.css';

class IncomingMessage extends Component{
    constructor(props){
        super(props);

        if (props.url)
            this.imageUrl = props.url;
        this.incomingMessage = props.incomingMessage
    }

    render() {
        return (
            <div className="incomingMessage messagesLayout__message">
                <Avatar url={this.imageUrl} size='small'/>
                <Balloon message={this.incomingMessage} typeMessage={true}/>
            </div>
        )
    }
}

export default IncomingMessage;