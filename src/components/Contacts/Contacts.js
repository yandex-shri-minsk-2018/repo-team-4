import React, {Component} from 'react';
import './Contacts.css';
import '../ContactItem/ContactItem';
import ContactItem from "../ContactItem/ContactItem";
import HeaderTemplate from "../HeaderTemplate/HeaderTemplate";

import api from '../../api';

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        api.getUsers().then((users) => {
            this.setState({users: users.items})
        });
    }

    render() {
        let users = this.state.users;
        return (
            <div className="contacts">
                <HeaderTemplate title='Контакты'/>

                {users && users.map(function(user){
                        return <ContactItem key={user._id} name={user.name} userId={user._id}/>
                })}

            </div>
        );
    }
}

export default Contacts;
