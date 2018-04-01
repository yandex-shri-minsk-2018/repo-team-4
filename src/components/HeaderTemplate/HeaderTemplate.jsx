import React from 'react';
import './HeaderTemplate.css';
import '../ChatTitle/ChatName/ChatName'

class ChatListHeader extends React.Component {


  render() {
    let ChatListHeaderClass = "chatListHeader";

    return(
        <div className={ChatListHeaderClass}>
          <div className="button button-1">
            <i className="fa fa-arrow-left"></i>
          </div>
          <h2>{this.props.title}</h2>
          <div className="button button-2">
            <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>
    );
  }
}

export default ChatListHeader;
