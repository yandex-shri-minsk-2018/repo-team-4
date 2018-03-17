import React, { Component } from 'react';
import DateMessage from '../DateMessage/DateMessage'
import './Bolloon.css';

class Bolloon extends Component {
  render() {
    const date = '5';
    let style = this.props.typeMessage ? 'styleBolloon' : ' ';

    return (
      <div className= {'bolloon ' + style} >
        <div className='bolloon__content' message=''>
          {this.props.message}
        </div>
         <DateMessage dateMessage={date}/>
      </div>
    );
  }
}

export default Bolloon;
