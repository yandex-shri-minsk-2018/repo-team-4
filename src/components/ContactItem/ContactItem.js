import React, { Component } from 'react';
import Avatar from "../Avatar/Avatar";
import './ContactItem.css';
class ContactItem extends Component {
    render() {
        return (
            <div className="contactItem">
                <Avatar size="medium"/>
                <span>
                    {this.props.name}
                </span>
            </div>

        );
    }
}

export default ContactItem;
