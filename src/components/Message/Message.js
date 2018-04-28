import React, {Component} from "react";

import Avatar from "../Avatar/Avatar";
import Balloon from "../Balloon/Balloon";
import PropTypes from "prop-types";

import "./Message.css";

export class Message extends Component {
    render() {

        return (
            <div className={this.props.isMyMessage ?
                "outgoing-message  messages-layout__message" : "incoming-message messages-layout__message"}>
                <Avatar size='small'/>
                <Balloon message={this.props.message.message} typeMessage={!this.props.isMyMessage} dateMessage={this.props.message.created_at}/>
            </div>
        );
    }
}

Message.propTypes = {
    isMyMessage: PropTypes.bool,
    url: PropTypes.string,
    message: PropTypes.object
};
