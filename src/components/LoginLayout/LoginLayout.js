import React from "react";
import "./LoginLayout.css";
import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";
import {authorization} from "../../reducers/authorization/action";
import {loginButtonHandler} from "../../reducers/authorization/action";

import PropTypes from "prop-types";
import api from "../../api";

class LoginLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentWillMount() {
        this.props.authorization();
    }

    onLoginClick() {
        this.props.loginButtonHandler(document.getElementById("email").value, document.getElementById("password").value);//
    }

    onSignUpClick() {
        // api.getUsers({limit: 20}).then((user) => console.log(user));
        // this.props.loginButtonHandler(document.getElementById("login").value);
        console.log('Sign Up mock')
    }

    render() {
        return (
            <div className='loginPage'>
                <div className='loginContainer'>
                    <div className='inputContainer'>
                        <span>Email:</span>
                        <input id='email' type='text' autoComplete='off'>
                        </input>
                        <span>Пароль:</span>
                        <input id='password' type='password'>
                        </input>
                    </div>
                    <div className='buttonContainer'>
                        <div className='button' onClick={this.onLoginClick.bind(this)}>Войти</div>
                        <div className='button' onClick={this.onSignUpClick.bind(this)}>Войти</div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginLayout.propTypes = {
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
        loginButtonHandler
    }
)(LoginLayout);
