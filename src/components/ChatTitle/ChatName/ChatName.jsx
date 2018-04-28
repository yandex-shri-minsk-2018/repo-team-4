import React from 'react';
import './ChatName.css';

class ChatName extends React.Component {

    render() {
        return (
            <h2>{this.props.name}</h2>
        );
    }
}

export default ChatName;
