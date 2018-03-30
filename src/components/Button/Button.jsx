import React, {PureComponent} from 'react';
import './Button.css';

class Button extends PureComponent {
    render() {
        let renderedClass = this.props.theme ? "login-layout-button_theme_"+this.props.theme  : "login-layout-button_theme_default";
        return (
            <button className={["login-layout-button", renderedClass, this.props.userClass].join(" ")}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
