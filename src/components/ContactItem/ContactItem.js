import React, { Component } from 'react';
import Avatar from "../Avatar/Avatar";
import './ContactItem.css';
import api from "../../api";
class ContactItem extends Component {
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    async clickHandler(){
        let chatUser = await api.getUser(this.props.userId);

        let room = await api.createRoom({name: chatUser.name, users: [chatUser._id]});
        console.log(room);
    }

    render() {
        return (
            <div className="contactItem" onClick={this.clickHandler}>
                <Avatar size="medium" url={this.props.url}/>
                <span className="name">
                    {this.props.name}
                </span>
            </div>

        );
    }
}

export default ContactItem;
