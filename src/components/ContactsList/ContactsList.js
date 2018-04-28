import React from "react";
import "./ContactsList.css";
import ContactItem from "../ContactItem/ContactItem";
import {connect} from "react-redux";
import {getContacts} from "../../reducers/chat/action";
import Spinner from "../Loaders/Spinner/Spinner";
import PropTypes from "prop-types";

class ContactsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        if (this.props.loading) {
            return (
                <Spinner/>
            );
        }

        let users = this.props.users;
        return (
            <div className='contactsList'>
                {users && users.map(function (user) {
                    return <ContactItem
                        sizeAvatar={"small"}
                        key={user._id}
                        name={user.name}
                        lastMessage={user.phone}
                        userId={user._id}/>;
                })}
            </div>
        );


    }
}

ContactsList.propTypes = {
    getContacts: PropTypes.func,
    loading: PropTypes.bool,
    users: PropTypes.array
};


export default connect(
    state => ({
        users: state.chat.users,
        loading: state.chat.loading
    }), {
        getContacts
    }
)(ContactsList);
