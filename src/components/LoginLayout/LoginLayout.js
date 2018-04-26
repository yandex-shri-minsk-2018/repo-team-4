import React from "react";
import "./LoginLayout.css";
import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";
import {authorization} from "../../reducers/authorization/action";
import PropTypes from "prop-types";
import api from "../../api";

class LoginLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.props.authorization();
    }
    // onLoginClick() {
    //     api.getUsers({limit:40}).then((user)=>console.log(user));
    // }



    render() {
        return (
            <div className='loginPage'>
                <div className='loginContainer'>
                    <div className='inputContainer'>
                        <span>Логин:</span>
                        <input id='login' type='text'>

                        </input>
                    </div>
                    <div className='buttonContainer'>
                        {/*onClick={this.onLoginClick.bind(this)}*/}
                        <div className='button' >Войти</div> 
                    </div>
                </div>
            </div>
        );
    }
}

LoginLayout.propTypes = {
    changeLayout: PropTypes.func
};

export default connect(
    state => ({
        layout: state.navigation.layout
    }), {
        changeLayout,
        authorization
    }
)(LoginLayout);
