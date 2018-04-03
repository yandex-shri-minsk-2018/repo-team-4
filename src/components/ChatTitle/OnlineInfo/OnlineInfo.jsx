import React from 'react';
import './OnlineInfo.css';

class OnlineInfo extends React.Component {

  render() {
    if(this.props.online){
      return(
          <span>Online</span>
      );
    }
    else{
      return(
          <span>Last visit: {this.props.time}</span>
      );
    }
  }
}

export default OnlineInfo;
