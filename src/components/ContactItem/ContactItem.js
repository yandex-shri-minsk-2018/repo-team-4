import React, {PureComponent} from "react";
import Avatar from "../Avatar/Avatar";
import "./ContactItem.css";
import {connect} from "react-redux";
import {joinChat} from "../../reducers/chat/action";
import PropTypes from "prop-types";
import {getCurrentUserInfo} from "../../reducers/currentUser/action";


class ContactItem extends PureComponent {

    componentWillMount(){
        this.props.getCurrentUserInfo();
    }

    clickHandler() {
        this.props.joinChat(this.props.userId, this.props.currentUser);
    }

    render() {
        return (

            <div className="listItem" onClick={this.clickHandler.bind(this)}>
                <div className="listItem__leftInfo">
                    <Avatar size={this.props.sizeAvatar} url={this.props.urlAvatar}/>
                    <div className="listItem__leftInfo__userInfo">
                        <span className="listItem__leftInfo__userInfo__name">
                            {this.props.name}
                        </span>
                        <span className="listItem__leftInfo__userInfo__lastMessage">
                            {this.props.lastMessage}
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}
ContactItem.propTypes = {
    joinChat: PropTypes.func,
    userId: PropTypes.string,
    sizeAvatar: PropTypes.string,
    urlAvatar: PropTypes.string,
    name: PropTypes.string,
    lastMessage: PropTypes.string,
    getCurrentUserInfo: PropTypes.func,
    currentUser: PropTypes.object
};
export default connect(
    state => ({
        layout: state.navigation.layout,
        currentUser: state.currentUser.currentUser
    }), {
        joinChat,
        getCurrentUserInfo
    }
)(ContactItem);
