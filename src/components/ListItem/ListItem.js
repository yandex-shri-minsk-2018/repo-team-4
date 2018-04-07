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
        return (
            <div className="listItem" onClick={this.clickHandler.bind(this)}>
                <div className="listItem__leftInfo">
                    <Avatar size={this.props.sizeAvatar} url={this.props.urlAvatar}/>
                    <div className="listItem__leftInfo__userInfo">
                        <span className="listItem__leftInfo__userInfo__name">
                            {this.props.name}
                        </span>
                        <span className="listItem__leftInfo__userInfo__lastMessage">
                            {this.props.lastMessage}
                        </span>
                    </div>
                </div>

                <div className="listItem__newMessages">
                    <span className="listItem__newMessages__date">
                        {this.props.date}
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
