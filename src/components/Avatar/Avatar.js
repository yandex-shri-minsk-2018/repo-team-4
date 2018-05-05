import React, {Component} from "react";
import avatar_img from "./default-avatar.png";
import "./Avatar.css";
import PropTypes from "prop-types";
import {changeLayout} from "../../reducers/navigation/action";
import {getCurrentUserInfo, setProfileUser} from "../../reducers/currentUser/action";
import {connect} from "react-redux";

class Avatar extends Component {
    constructor(props) {
        super(props);

        if (this.props.size === "small")
            this.classAvatarSize = "avatar__img__small";
        else if (this.props.size === "medium")
            this.classAvatarSize = "avatar__img__medium";
        else
            this.classAvatarSize = "avatar__img__large";

        if (this.props.url)
            this.image = this.props.url;
        if (this.props.photo){
            this.image = this.props.photo;
        }
        else this.image = avatar_img;
    }

    clickHandler(){
        if(this.props.userId){
            this.props.setProfileUser(this.props.userId);
            this.props.changeLayout('profile');
        }
    }

    render() {
        return (
            <div className={this.classAvatarSize} onClick={this.clickHandler.bind(this)}>
                <img src={this.image} className='avatar__img' alt="avatar"/>
            </div>
        );
    }
}
Avatar.propTypes = {
    size: PropTypes.string,
    photo: PropTypes.string,
    url: PropTypes.string

};
export default connect(
    state => ({
    }), {
        changeLayout,
        setProfileUser
    }
)(Avatar);
