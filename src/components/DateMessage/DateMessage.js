
import React, { Component } from 'react';
import './dataMessage.css';
class DateMessage extends Component {
  render() {
    return (
      <div className='balloon__data-message' date-message=''>
        <span className='data-message'>
            {this.props.dateMessage}
        </span>
        <span className='data-message'>

        </span>
      </div>
      );
  }
}

export default DateMessage;
