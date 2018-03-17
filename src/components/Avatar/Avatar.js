import React, { Component } from 'react';
import avatar_img from './default-avatar.png';
import './Avatar.css';

class Avatar extends Component{
    constructor(props) {
        super(props);

        if (this.props.size === "small")
            this.classAvatarSize = 'avatar__img__small';
        else if (this.props.size === "medium")
            this.classAvatarSize = 'avatar__img__medium';
        else
            this.classAvatarSize = 'avatar__img__large';

        if (this.props.url)
            this.image = this.props.url;
        else this.image = avatar_img;
    }

    render(){
        return(
            <div className={this.classAvatarSize}>
                <img src={this.image} className='avatar__img' alt="avatar" />
            </div>
        );
    }
}

export default Avatar;
