import React, {Component} from "react";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";
import {changeLayout} from "../../reducers/navigation/action";
import {connect} from "react-redux";
import {getCurrentUserInfo} from "../../reducers/currentUser/action";

class Profile extends Component {

    render() {
        return (
            <div className='Profile__wrapper'>
                <div className='wrapper-background'>
                    <ProfileHeader/>
                    <div className='Profile__main'>
                        <div className='Profile__avatar'>
                            <Avatar photo={this.props.profileUser && this.props.profileUser.photo}/>
                        </div>
                        <div className='Profile__info-container'>
                            <h2>{this.props.profileUser && this.props.profileUser.name}</h2>
                            <span>{this.props.profileUser && this.props.profileUser.email}</span>
                            <span>{this.props.profileUser && this.props.profileUser.phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {

};

export default connect(
    state => ({
        profileUser: state.currentUser.profileUser
    }), {
        changeLayout,
    }
)(Profile);
