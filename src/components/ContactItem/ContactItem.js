import React, {PureComponent} from 'react';
import Avatar from "../Avatar/Avatar";
import './ContactItem.css';
import {connect} from "react-redux";
import {joinChat} from "../../reducers/chat/action";

class ContactItem extends PureComponent {
    clickHandler(){
        this.props.joinChat(this.props.userId);
    }

    render() {
        return (
            <div className="contactItem" onClick={this.clickHandler.bind(this)}>
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
        joinChat
    }
)(ContactItem)
