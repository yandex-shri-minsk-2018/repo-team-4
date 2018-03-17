import React, { Component } from 'react';
import './Contacts.css';
import '../ContactItem/ContactItem';
import ContactItem from "../ContactItem/ContactItem";
import Header from "../Header/Header";



class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <Header/>
                <ContactItem name="Вася"/>
                <ContactItem name="Игорь"/>
                <ContactItem name="Гена"/>
            </div>
        );
    }
}

export default Contacts;
