import React from 'react';
import './LoginLayout.css';
import { connect } from 'react-redux'
import { changeLayout } from '../../reducers/navigation/action';

class LoginLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onLoginClick() {
        this.props.changeLayout("chatListLayout");
    }

    //TODO пока что остыль, в будущем сделать авторизацию
    componentWillMount() {
        //this.props.changeLayout('contacts');
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
                        <div className='button' onClick={this.onLoginClick.bind(this)}>Войти</div>
                        <div className='button'>Регистрация</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        layout: state.navigation.layout
    }), {
        changeLayout
    }
)(LoginLayout)
