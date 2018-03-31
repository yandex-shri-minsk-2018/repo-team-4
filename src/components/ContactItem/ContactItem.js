import React, { Component } from 'react';
import Avatar from "../Avatar/Avatar";
import './ContactItem.css';
class ContactItem extends Component {
    onClickHandler = function() {

    };

    render() {
        return (
            <div className="contactItem" onClick={this.onClickHandler}>
                <Avatar size="medium" url={this.props.url}/>
                <span className="name">
                    {this.props.name}
                </span>
            </div>

        );
    }
}

export default ContactItem;
