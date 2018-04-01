import React from 'react';
import './ContactsList.css';
import ContactItem from "../ContactItem/ContactItem";
import { connect } from 'react-redux'
import { getContacts } from '../../reducers/chat/action';
import Spinner from "../Loaders/Spinner/Spinner";

class ContactsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getContacts()
    }

    render() {
        if(this.props.loading){
            return(
                <Spinner/>
            )
        }

        let users = this.props.users;
        return (
            <div className='contactsList'>
                {users && users.map(function (user) {
                    return <ContactItem key={user._id} name={user.name} userId={user._id}/>
                })}
            </div>
        );


    }
}

export default connect(
    state => ({
        users: state.chat.users,
        loading: state.chat.loading
    }), {
        getContacts
    }
)(ContactsList)
