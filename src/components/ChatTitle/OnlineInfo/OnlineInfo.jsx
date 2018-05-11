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
          <span>Не в сети</span>
      );
    }
  }
}

export default OnlineInfo;
