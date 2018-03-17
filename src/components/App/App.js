import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from "../ListItem/ListItem"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <ListItem name="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " lastMessage="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " newMessages="3" date="1 day ago"/>
      </div>
    );
  }
}

export default App;
