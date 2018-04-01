import React from 'react';
import './ContactsList.css';
import ContactItem from "../ContactItem/ContactItem";
import { connect } from 'react-redux'
import { getRooms } from '../../reducers/chat/action';
import api from "../../api";
import Spinner from "../Loaders/Spinner/Spinner";

class ContactsList extends React.Component {

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
        if(!this.state.loading){
            return (
                <Spinner/>
            );
        }

        let users = this.state.users;
        return (
            <div>
                {users && users.map(function (user) {
                    return <ContactItem key={user._id} name={user.name} userId={user._id}/>
                })}
            </div>
        );


    }
}

export default connect(
    state => ({

    }), {

    }
)(ContactsList)
