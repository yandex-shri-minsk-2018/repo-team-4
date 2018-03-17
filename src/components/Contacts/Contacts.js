import React, { Component } from 'react';
import './Contacts.css';
import '../ContactItem/ContactItem';
import ContactItem from "../ContactItem/ContactItem";
import HeaderTemplate from "../HeaderTemplate/HeaderTemplate";



class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
              <HeaderTemplate title='Контакты'/>
                <ContactItem name="Вася"/>
                <ContactItem name="Игорь"/>
                <ContactItem name="Гена"/>
            </div>
        );
    }
}

export default Contacts;
