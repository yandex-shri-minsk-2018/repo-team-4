import React, { PureComponent } from "react";
import Avatar from "../Avatar/Avatar";
import "../ContactItemMin/ContactItemMin.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ChatContactItem extends PureComponent {
    render() {
        return (
            <div className="contactItemMin">
                <div className="contactItemMin__leftInfo">
                    <Avatar size={this.props.sizeAvatar} url={this.props.urlAvatar}/>
                    <div className="contactItemMin__leftInfo__userInfo">
                        <span className="contactItemMin__leftInfo__userInfo__name">
                            {this.props.name}
                        </span>
                        <span className="contactItemMin__leftInfo__userInfo__lastMessage">
                            {this.props.lastMessage}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

ChatContactItem.propTypes = {
    sizeAvatar: PropTypes.string,
    urlAvatar: PropTypes.string,
    name: PropTypes.string,
    lastMessage: PropTypes.string
};
export default connect()(ChatContactItem);
