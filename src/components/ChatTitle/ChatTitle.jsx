import React from 'react';
import './ChatTitle.css';
import ChatName from "./ChatName/ChatName";
import NumberOfUsers from "./NumbersOfUsers/NumbersOfUsers";
import OnlineInfo from "./OnlineInfo/OnlineInfo";

//TODO Group chat:number of members, Private: lastVisit

class ChatTitle extends React.Component {

    render() {
        let title;
        if(this.props.chatInfo.type==='group'){
            title = <NumberOfUsers number={this.props.chatInfo.numberOfUsersInRoom}/>
        }
        else{
            title = <OnlineInfo online={this.props.chatInfo.isOnline}></OnlineInfo>;
        }
        return (
            <div>
                <ChatName name={this.props.chatName}/>
                {title}
            </div>
        );
    }
}

export default ChatTitle;
