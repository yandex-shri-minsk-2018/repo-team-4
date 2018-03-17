import React from 'react';
import './ChatName.css';

class ChatName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let UserNameClass = "userName";

    return(
        <h2 className={this.props.online ? "online" : ""}>{this.props.name}</h2>
    );
  }
}

export default ChatName;