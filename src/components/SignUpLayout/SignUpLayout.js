import React from "react";
import "./SignUpLayout.css";
import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";
import {authorization, signUp} from "../../reducers/authorization/action";
import {loginButtonHandler} from "../../reducers/authorization/action";
import PropTypes from "prop-types";


class SignUpLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    onSignUpClick() {
        this.props.signUp(document.getElementById("name").value, document.getElementById("email").value, document.getElementById("password").value);
        // this.props.signUp('name', 'email', 'password');
    }

    onLoginClick() {
        this.props.changeLayout('authorization');
    }

    render() {
        return (
            <div className='loginPage'>
                <div className='loginContainer'>
                    <div className='inputContainer'>
                        <span>Имя:</span>
                        <input id='name' type='text' autoComplete='off'>
                        </input>
                        <span>Email:</span>
                        <input id='email' type='text' autoComplete='off'>
                        </input>
                        <span>Пароль:</span>
                        <input id='password' type='password'>
                        </input>
                    </div>
                    <div className='buttonContainer'>
                        <div className='button' onClick={this.onSignUpClick.bind(this)}>Регистрация</div>
                        <div className='button' onClick={this.onLoginClick.bind(this)}>Назад</div>
                    </div>
                </div>
            </div>
        );
    }
}

SignUpLayout.propTypes = {
    changeLayout: PropTypes.func,
    authorization: PropTypes.func,
    loginButtonHandler: PropTypes.func,
};

export default connect(
    state => ({
        layout: state.navigation.layout
    }), {
        changeLayout,
        authorization,
        loginButtonHandler,
        signUp
    }
)(SignUpLayout);
