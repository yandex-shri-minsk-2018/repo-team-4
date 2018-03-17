import React, { Component } from 'react';
import SendMessage from '../SendMessage/SendMessage';
import logo from './logo.svg';
import './App.css';
import ListItem from "../ListItem/ListItem"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1>Header</h1>
        </header>
<<<<<<< HEAD
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <ListItem name="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " lastMessage="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " newMessages="3" date="1 day ago"/>
=======
        <div className="app-content">
        </div>
        <SendMessage />
>>>>>>> Создал плашку для ввода сообщений
      </div>
    );
  }
}

export default App;
