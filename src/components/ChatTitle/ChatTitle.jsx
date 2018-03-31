import React from 'react';
import './ChatTitle.css';
import ChatName from "./ChatName/ChatName";
import NumberOfUsers from "./NumbersOfUsers/NumbersOfUsers";
import OnlineInfo from "./OnlineInfo/OnlineInfo";


//TODO Group chat:number of members, Private: lastVisit

class ChatTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isGroup: false, online: false};
  }

  render() {
    let title = this.state.isGroup ? <NumberOfUsers number={6}/> : <OnlineInfo online={this.state.online} time={"12:30"}>Private</OnlineInfo>;
    let name = "Yahor Kutz";

    return(
        <div>
          <ChatName online={this.state.isGroup ? false : this.state.online} name={this.props.chatName}/>
          {title}
        </div>
    );
  }
}

export default ChatTitle;
