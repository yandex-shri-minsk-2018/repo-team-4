import React, { Component } from 'react';
import './ListItem.css';
import Avatar from "../Avatar/Avatar";
import {connect} from "react-redux";
import {joinExistingChat} from "../../reducers/chat/action";


class ListItem extends Component {

    clickHandler(){
        this.props.joinExistingChat(this.props.roomId);
    }


    render() {
        let currentTime = new Date();

        let dateMessage;
        let lastMessage = this.props.lastMessage;
        if ((currentTime - this.props.date) < (1000 * 60)) {
            dateMessage = 'Только что';
        }
        else if ((currentTime - this.props.date) < (5000 * 60)) {
            dateMessage = 'Минуту назад';
        }
        else if ((currentTime - this.props.date) < (7000 * 60)) {
            dateMessage = '5 минут назад';
        }
        else {
            let messageDate = new Date(this.props.date);
            let day = messageDate.getDate() < 10 ? '0'+messageDate.getDate() : messageDate.getDate();
            let month = messageDate.getMonth();
            month++;
            month = month < 10 ? '0'+month : month;
            let hour = messageDate.getHours() < 10 ? '0'+messageDate.getHours() : messageDate.getHours();
            let minutes = messageDate.getMinutes() < 10 ? '0'+messageDate.getMinutes() : messageDate.getMinutes();
            let seconds = messageDate.getSeconds() < 10 ? '0'+messageDate.getSeconds() : messageDate.getSeconds();

            let fullDate = (day + '.' + month + ' '+hour+':'+minutes+':'+seconds);
            dateMessage = fullDate;
        }


        if(!this.props.lastMessage){
            dateMessage = '';
            lastMessage = <small>Сообщений пока нет</small>
        }

        return (
            <div className="listItem" onClick={this.clickHandler.bind(this)}>
                <div className="listItem__leftInfo">
                    <Avatar size={this.props.sizeAvatar} url={this.props.urlAvatar}/>
                    <div className="listItem__leftInfo__userInfo">
                        <span className="listItem__leftInfo__userInfo__name">
                            {this.props.name}
                        </span>
                        <span className="listItem__leftInfo__userInfo__lastMessage">
                            {lastMessage}
                        </span>
                    </div>
                </div>

                <div className="listItem__newMessages">
                    <span className="listItem__newMessages__date">
                        {dateMessage}
                    </span>
                    {this.props.newMessages && this.props.date &&
                    <span className="listItem__newMessages__quantity">
                        {this.props.newMessages > 99 ? '99+' : this.props.newMessages}
                    </span>
                    }
                </div>

            </div>
        );
    }
}


export default connect(
    state => ({
    }), {
        joinExistingChat
    }
)(ListItem)
