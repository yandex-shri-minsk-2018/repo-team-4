import React, { Component } from 'react';
import './Contacts.css';
import '../ContactItem/ContactItem'



class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <ContactItem name="Вася"/>
                <ContactItem name="Игорь"/>
                <ContactItem name="Гена"/>
            </div>
        );
    }
}

export default Contacts;
