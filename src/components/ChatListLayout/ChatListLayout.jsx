import React from 'react';
import './ChatListLayout.css';
import Header from "../Header/Header";
import ListItem from "../ListItem/ListItem";
import ChatTitle from "../ChatTitle/ChatTitle";
import ChatList from "../ChatList/ChatList";
import ChatListHeader from "../ChatListHeader/ChatListHeader";

class ChatListLayout extends React.Component {

  render() {
    return(
        <div>
          <ChatListHeader/>
          <ChatList/>
          <div className='mockFooter'> Mock Footer</div>
        </div>
    );
  }
}

export default ChatListLayout;