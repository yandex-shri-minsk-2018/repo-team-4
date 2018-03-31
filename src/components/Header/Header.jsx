import React from 'react';
import './Header.css';
import '../ChatTitle/ChatName/ChatName'
import ChatTitle from "../ChatTitle/ChatTitle";
import {connect} from "react-redux";
import {joinChat} from "../../reducers/chat/action";
import {goPrevLayout} from "../../reducers/navigation/action";


/*TODO Components:
button1,
button2,
ChatNameTitle,
LastVisit privateChat: visitTime; GroupChat: number of members
*/
class Header extends React.Component {

    clickGoBackButtonHandler() {
        this.props.goPrevLayout(this.props.prevLayout);
    }

    render() {
        let headerClass = "header";
        return (
            <div className={headerClass}>
                <div className="button button-1" onClick={this.clickGoBackButtonHandler.bind(this)}>
                    <i className="fa fa-arrow-left"></i>
                </div>
                <ChatTitle chatName={this.props.chatName}/>
                <div className="button button-2">
                    <i className="fa fa-ellipsis-h"></i>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        layout: state.navigation.layout,
    }), {
        goPrevLayout
    }
)(Header)

