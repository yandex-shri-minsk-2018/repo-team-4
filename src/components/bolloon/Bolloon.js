import React, { Component } from 'react';
import DateMessage from '../DateMessage/DateMessage'
import './Bolloon.css';
class Bolloon extends Component {
  constructor() {
        super();

        this.state = {
            message: true,
        };
    }


  render() {
    const textOne = 'Hi Andrea! How are you? ';
    const textTwo = 'Doing good, how do you feel about grabbing a coffee';
    const date = '5';
    const style = message ? 'styleBolloon' : null;
    let {message} = this.state;



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
