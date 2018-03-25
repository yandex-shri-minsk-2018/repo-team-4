import React, {Component} from 'react';
import './SocialButton.css';

class SocialButton extends Component {
    constructor(props) {
        super(props)

        this.props = props
    }

    render() {
        return (
            <div className="login-layout-footer__social-icon" data-href={this.props.dataHref}>
                <i className={"fab " + this.props.faClass} aria-hidden="true"></i>
            </div>
        );
    }
}

export default SocialButton;