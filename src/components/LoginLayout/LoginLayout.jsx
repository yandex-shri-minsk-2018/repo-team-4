import React, {Component} from 'react';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import SocialButton from '../SocialButton/SocialButton';
import './LoginLayout.css';
import logoSvg from './logo.svg';

class LoginLayout extends Component {
    render() {
        return (
            <div className="login-layout">
                <div className="login-layout__logo">
                    <img src={logoSvg} className="login-layout__logo-img" />
                </div>
                <div className="login-form">
                    <InputField typeOfField="text" placeholder="Enter your email or login" faClass="fa fa-user-circle"/>
                    <InputField typeOfField="password" placeholder="Password" faClass="fa fa-key"/>
                    <Button text="Get Started"/>
                    <Button text="Forgot Password?" theme="white" />
                </div>
                <div className="login-layout__footer">
                    <div className="login-layout-footer__social-block">
                        <SocialButton faClass="fa-facebook-f" dataHref="https://facebook.com"/>
                        <SocialButton faClass="fa-vk" dataHref="https://vk.com"/>
                        <SocialButton faClass="fa-linkedin-in" dataHref="https://linkedin.com"/>
                    </div>
                    <Button text="Or Sign Up" userClass="login-layout-button__sign-up-btn" />
                </div>
            </div>
        );
    }
}

export default LoginLayout;
