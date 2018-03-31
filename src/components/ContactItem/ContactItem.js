import React, {Component} from 'react';
import Avatar from "../Avatar/Avatar";
import './ContactItem.css';
import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";

class ContactItem extends Component {
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
