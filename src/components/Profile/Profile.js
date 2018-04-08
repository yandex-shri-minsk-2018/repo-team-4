import React, {Component} from "react";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import Avatar from "../Avatar/Avatar";


class Profile extends Component {
    render() {
        var avatar = "https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by";
        return (
            <div className='Profile__wrapper'>
                <div className='wrapper-background'>
                    <ProfileHeader/>
                    <div className='Profile__main'>
                        <div className='Profile__avatar'>
                            <Avatar url={avatar}/>
                        </div>
                        <div className='Profile__name'>
                            {this.props.name}
                        </div>
                        <div className='Profile__Edit'>
                            Редактировать
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
