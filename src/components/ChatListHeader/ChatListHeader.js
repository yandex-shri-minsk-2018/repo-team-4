import React from 'react';
import './ChatListHeader.css';
import '../ChatTitle/ChatName/ChatName'
import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";

class ChatListHeader extends React.Component {

    clickLeftButtonHandler() {
        this.props.changeLayout('profile');
    }

    render() {
        let ChatListHeaderClass = "ChatListHeader";

        return(
            <div className={ChatListHeaderClass}>
                <div className="button button-1" onClick={this.clickLeftButtonHandler.bind(this)}>
                    <i className='fa fa-cog'></i>
                </div>
                <h2>Диалоги</h2>
                <div className="button button-2">
                    <i className='fa fa-plus'></i>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        layout: state.navigation.layout,
    }), {
        changeLayout
    }
)(ChatListHeader)
