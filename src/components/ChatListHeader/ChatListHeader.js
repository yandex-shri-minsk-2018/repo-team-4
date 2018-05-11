import React from "react";
import "./ChatListHeader.css";
import PropTypes from "prop-types";
import "../ChatTitle/ChatName/ChatName";
import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";
import {setProfileUser} from "../../reducers/currentUser/action";

class ChatListHeader extends React.Component {

    clickLeftButtonHandler() {
        this.props.setProfileUser(this.props.currentUser._id);
        this.props.changeLayout("profile");
    }

    clickRightButtonHandler() {
        this.props.changeLayout("createRoom");
    }

    render() {

        return (
            <div className="ChatListHeader">
                <div className="button button-1" onClick={this.clickLeftButtonHandler.bind(this)}>
                    <i className='fa fa-cog'></i>
                </div>
                <h2>Диалоги</h2>
                <div className="button button-2">
                    <i className='fa fa-plus' onClick={this.clickRightButtonHandler.bind(this)}></i>
                </div>
            </div>
        );
    }
}
ChatListHeader.propTypes = {
    changeLayout: PropTypes.func,
    setProfileUser: PropTypes.func,
    currentUser: PropTypes.obj,
};
export default connect(
    (state) => ({
        currentUser: state.currentUser.currentUser
    }), {
        changeLayout,
        setProfileUser
    }
)(ChatListHeader);
