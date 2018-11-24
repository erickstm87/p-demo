import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Welcome,
  Work,
  Portfolio,
  Contact,
  Navigation
} from './components/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <Navigation />
        <Welcome />
        <Work />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
