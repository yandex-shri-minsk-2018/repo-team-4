import React, {Component} from "react";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import {changeLayout} from "../../reducers/navigation/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Profile extends Component {

    render() {
        return (
            <div className='Profile__wrapper'>
                <div className='wrapper-background'>
                    <ProfileHeader/>
                    <div className='Profile__main'>

                        <div className='Profile__avatar'>
                            <img src={this.props.profileUser && this.props.profileUser.photo}/>
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
    changeLayout: PropTypes.func,
    profileUser: PropTypes.object,
};

export default connect(
    state => ({
        profileUser: state.currentUser.profileUser
    }), {
        changeLayout,
    }
)(Profile);
