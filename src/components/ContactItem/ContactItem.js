import React, {Component} from 'react';
import Avatar from "../Avatar/Avatar";
import './ContactItem.css';
import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";

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
  
    onContactItemClick() {
        this.props.changeLayout("messagesLayout");
    }

    render() {
        return (
            <div className="contactItem" onClick={this.onContactItemClick.bind(this)}>

                <Avatar size="medium" url={this.props.url}/>
                <span className="name">
                    {this.props.name}
                </span>
            </div>

        );
    }
}

export default connect(
    state => ({
        layout: state.navigation.layout
    }), {
        changeLayout
    }
)(ContactItem)
