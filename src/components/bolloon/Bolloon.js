import React, { Component } from 'react';
import DateMessage from '../DateMessage/DateMessage'
import './Bolloon.css';
class Bolloon extends Component {
  constructor() {
        super();

        this.state = {
          typeMessage: true
        };
    }


  render() {
    const textTwo = 'Doing good, how do you feel about grabbing a coffee';
    const date = '5';
    let style ='styleBolloon';
    let {typeMessage} = this.state;

    if (typeMessage) {
      style = null;
    }



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
