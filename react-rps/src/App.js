import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Title from './components/Title';
import Scissors from './components/Scissors';
import Rock from './components/Rock';
import Paper from './components/Paper';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <div>
        <Title></Title>
        <Scissors></Scissors>
        <Rock></Rock>
        <Paper></Paper>
        <Result></Result>
      </div>
    );
  }
}

export default App;
