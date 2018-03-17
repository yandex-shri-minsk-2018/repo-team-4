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
        <div className="app-content">
        </div>
        <SendMessage />
      </div>
    );
  }
}

export default App;
