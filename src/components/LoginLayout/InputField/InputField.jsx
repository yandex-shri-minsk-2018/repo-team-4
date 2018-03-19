import React, {Component} from 'react';
import './InputField.css';

class InputField extends Component {
    constructor(props) {
        super(props)

        this.props = props
    }
    render() {
        return (
            <div className="login-form__input-field">
                <i className={this.props.faClass + " login-form__input-field__logo"} aria-hidden="true"></i>
                <input type={this.props.typeOfField} placeholder={this.props.placeholder} className="login-form__input-field__input"/>
            </div>
        );
    }
}

export default InputField;