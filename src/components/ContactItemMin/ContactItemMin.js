import React, {PureComponent} from "react";
import Avatar from "../Avatar/Avatar";
import "./ContactItemMin.css";
import {connect} from "react-redux";
import {joinChat, pickUser} from "../../reducers/chat/action";
import PropTypes from "prop-types";


class contactItemMin extends PureComponent {
    clickHandler() {
        this.props.pickUser(this.props.pickedUsers, this.props.userId);

        let nodeClass = this.node.className;
        if(!nodeClass.includes('selected')){
            this.node.className = nodeClass.concat(' selected');
        }
        else{
            this.node.className = 'contactItemMin';
        }
    }

    render() {
        return (

            <div className="contactItemMin" onClick={this.clickHandler.bind(this)} ref={(node) => { this.node = node; }}>
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
contactItemMin.propTypes = {
    joinChat: PropTypes.func,
    userId: PropTypes.string,
    sizeAvatar: PropTypes.string,
    urlAvatar: PropTypes.string,
    name: PropTypes.string,
    lastMessage: PropTypes.string
};
export default connect(
    state => ({
        pickedUsers: state.chat.pickedUsers
    }), {
        joinChat,
        pickUser
    }
)(contactItemMin);
