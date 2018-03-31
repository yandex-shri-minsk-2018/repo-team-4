import React, { Component } from 'react';
import './Contacts.css';
import '../ContactItem/ContactItem';
import ContactItem from "../ContactItem/ContactItem";
import Header from "../Header/Header";



class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
              <HeaderTemplate title='Контакты'/>
                <ContactItem name="Егор" url="https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by"/>
                <ContactItem name="Вова" url="https://pp.userapi.com/c841634/v841634244/127d3/mUMkFLCsRxk.jpg"/>
                <ContactItem name="Валера" url="https://avatarko.ru/img/kartinka/19/zhivotnye_kot_18034.jpg"/>
                <ContactItem name="Влад" url="https://im0-tub-by.yandex.net/i?id=0b05db1b50de1dca71f2f42d101ac765&n=13"/>
            </div>
        );
    }
}

export default Contacts;
