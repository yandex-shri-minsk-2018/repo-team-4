import React from 'react';
import './NumberOfUsers.css';

class NumberOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {online: true};
  }

  render() {
    return(
        <span>Members: {this.props.number}</span>
    );
  }
}

export default NumberOfUsers;