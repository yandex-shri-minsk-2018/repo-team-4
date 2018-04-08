import React, {Component} from "react";

import Avatar from "../Avatar/Avatar";
import Balloon from "../Balloon/Balloon";

import "./Message.css";

export class Message extends Component {
    render() {
        return (
            <div className={this.props.isMyMessage ?
                "outgoing-message  messages-layout__message" : "incoming-message messages-layout__message"}>
                <Avatar url={this.props.url} size='small'/>
                <Balloon message={this.props.message.message} typeMessage={!this.props.isMyMessage} dateMessage={this.props.message.created_at}/>
            </div>
        );
    }
}
