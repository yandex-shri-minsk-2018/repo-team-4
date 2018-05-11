import React, {Component} from "react";

import Header from "../Header/Header";
import SendMessage from "../SendMessage/SendMessage";
import {Message} from "../Message/Message";
import "./MessagesLayout.css";
import api from "../../api";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getRoomMessages, joinChat} from "../../reducers/chat/action";
import Spinner from "../Loaders/Spinner/Spinner";
import {checkUserStatusByName} from "../../reducers/currentUser/action";

class MessagesLayout extends Component {
    /**
     * todo: передавать в балун Timestamp сообщения в формате 'hh:mm', реализовать поддержку
     * todo: получать аватар пользователя в зависимости от его id. Для этого добавить в сущность User поле 'Avatar'
     * todo: получать аватарку получив информацию о юзере. userId брать из сообщения
     */

    state = {
        messages: [],
        currentUserId: "",
        incomingMessageAvatar: "https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by",
        myAvatar: "https://vignette.wikia.nocookie.net/borderlands/images/1/13/Awesome.png/revision/latest?cb=20091026223409"
    };

    componentDidMount() {
        console.log("getRoomMessages");
        this.props.getRoomMessages(this.props.roomId);
        api.getRoom(this.props.roomId).then((room) => {
            this.setState({
                room: room
            });
        });
    }

    componentDidUpdate() {
        let messagesElem = document.getElementById("messages-layout__messages");
        if (messagesElem) {
            messagesElem
                .scrollTo(0, messagesElem.scrollHeight);
        }
    }

    render() {
        let messages = this.props.messages;
        let currentUser = this.props.currentUser;
        let myAvatar = this.state.myAvatar;
        let incomingMessageAvatar = this.state.incomingMessageAvatar;
        let roomData = this.state.room;

        let chatName = roomData && roomData.name;
        let isGroup = true;

        let isOnline;
        if(roomData && roomData.name.split(", ").length>1){
            roomData && roomData.name.split(", ").forEach((name) => {
                if(name!==currentUser.name){
                    chatName = name;
                    isGroup = false;
                    this.props.checkUserStatusByName(name);
                    isOnline = this.props.isPartnerOnline;
                }
            });
        }

        let chatInfo = {};
        if(isGroup){
            chatInfo.type="group";
            chatInfo.numberOfUsersInRoom=roomData && roomData.users && roomData.users.length;
        }
        else{
            chatInfo.type="private";
            chatInfo.isOnline=isOnline;
        }

        if (this.props.loading) {
            return (
                <Spinner />
            );
        }

        return (
            <div className='messages-layout'>
                <div className='messages-layout__header'>
                    <Header chatName={chatName} chatInfo={chatInfo}/>
                </div>
                <div className='messages-layout__messages' id='messages-layout__messages'>
                    {messages && messages.map(function (message) {
                        return <Message
                            key={message._id}
                            url={message.userId === currentUser._id ? myAvatar : incomingMessageAvatar}
                            message={message}
                            isMyMessage={message.userId === currentUser._id}
                            userId={message.userId}
                        />;
                    })}
                </div>
                <div className='messages-layout__send-message'>
                </div>
                <SendMessage roomId={this.props.roomId}/>
            </div>
        );
    }
}

MessagesLayout.propTypes = {
    checkUserStatusByName: PropTypes.func,
    joinChat: PropTypes.func,
    getRoomMessages: PropTypes.func,
    roomId: PropTypes.string,
    messages: PropTypes.array,
    currentUser: PropTypes.object,
    isPartnerOnline: PropTypes.object,
    loading: PropTypes.object,
};
export default connect(
    state => ({
        roomId: state.chat.currentChatId,
        messages: state.chat.messages,
        currentUser: state.currentUser.currentUser,
        isPartnerOnline: state.currentUser.isPartnerOnline,
        loading: state.chat.loading
    }), {
        joinChat,
        getRoomMessages,
        checkUserStatusByName
    }
)(MessagesLayout);
