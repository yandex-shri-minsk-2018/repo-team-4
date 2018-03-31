import React from 'react';
import './LoginLayout.css';

class LoginLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className='loginPage'>
                <div className='loginContainer'>
                    <div className='inputContainer'>
                        <span>Логин:</span>
                        <input type='text'></input>
                    </div>
                    <div className='inputContainer'>
                        <span>Пароль:</span>
                        <input type='text'></input>
                    </div>
                    <div className='buttonContainer'>
                        <div className='button'>Войти</div>
                        <div className='button'>Регистрация</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginLayout;
