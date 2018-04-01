import React, {Component} from 'react';
import './Contacts.css';
import '../ContactItem/ContactItem';
import ContactItem from "../ContactItem/ContactItem";
import HeaderTemplate from "../HeaderTemplate/HeaderTemplate";

import api from '../../api';
import Spinner from "../Loaders/Spinner/Spinner";

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: false};
    }

    componentDidMount() {
        api.getUsers().then((users) => {
            this.setState({
                users: users.items,
                loading: true
            })
        });
    }

    render() {
        if (!this.state.loading) {
            return (
                <div className="contacts">
                    <HeaderTemplate title='Контакты'/>
                    <Spinner/>
                </div>
            )
        }

        let users = this.state.users;
        return (
            <div className="contacts">
                <HeaderTemplate title='Контакты'/>
                {users && users.map(function (user) {
                    return <ContactItem key={user._id} name={user.name} userId={user._id}/>
                })}
            </div>
        );


    }
}

export default Contacts;
