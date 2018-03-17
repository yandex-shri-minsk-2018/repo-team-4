import React from 'react';
import './ChatListHeader.css';
import '../ChatTitle/ChatName/ChatName'
import ChatTitle from "../ChatTitle/ChatTitle";


/*TODO Components:
button1,
button2,
ChatNameTitle,
LastVisit privateChat: visitTime; GroupChat: number of members
*/
class ChatListHeader extends React.Component {


  render() {
    let ChatListHeaderClass = "chatListHeader";

    return(
        <div className={ChatListHeaderClass}>
          <div className="button button-1">
            <i className="fa fa-arrow-left"></i>
          </div>
          <h2>Сообщения</h2>
          <div className="button button-2">
            <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>
    );
  }
}

export default ChatListHeader;