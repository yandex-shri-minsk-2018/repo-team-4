import React from 'react';
import './ChatName.css';

class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {online: true};
  }

  render() {
    let UserNameClass = "userName";

    return(
        <h2 className={this.state.online ? "online" : ""}>{this.props.name}</h2>
    );
  }
}

export default UserName;