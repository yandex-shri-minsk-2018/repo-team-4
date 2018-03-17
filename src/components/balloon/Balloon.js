import React, { Component } from 'react';
import DateMessage from '../DateMessage/DateMessage'
import './Balloon.css';

class Balloon extends Component {
  render() {
    const date = '5';
    let style = this.props.typeMessage ? 'styleballoon' : ' ';

    return (
      <div className= {'balloon ' + style} >
        <div className='balloon__content' message=''>
          {this.props.message}
        </div>
         <DateMessage dateMessage={date}/>
      </div>
    );
  }
}

export default Balloon;
