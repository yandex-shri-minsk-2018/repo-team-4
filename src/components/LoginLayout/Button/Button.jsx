import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props)

        this.props = props
    }

    render() {
        let renderedClass = this.props.highlighted ? "login-layout-button login-layout-button_highlighted" : "login-layout-button";
        return (
            <button className={renderedClass + " " + this.props.userClass}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
