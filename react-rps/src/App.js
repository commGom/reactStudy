import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Title from './components/Title';
import Scissors from './components/Scissors';
import Rock from './components/Rock';
import Paper from './components/Paper';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      com: '_',
      you: '_',
      result: '선택해주세요!'
    }
  }
  render() {
    console.log("랜더링");
    this.state.com = parseInt(Math.random() * 3);
    let you = this.state.you;
    let com = this.state.com;
    if (this.state.you != '_') {
      if (you == com) {
        this.state.result = '비겼습니다.';
      } else if ((you + 1) == com) {
        this.state.result = '당신이 졌습니다.';
      } else {
        this.state.result = '당신이 이겼습니다.';
      }
    }
    return (
      <div>
        <Title></Title>
        <Scissors onSubmit={(value) => { this.setState({ you: value }); }}></Scissors>
        <Rock onSubmit={(value) => { this.setState({ you: value }); }}></Rock>
        <Paper onSubmit={(value) => { this.setState({ you: value }); }}></Paper>
        <Result result={this.state.result}></Result>
      </div>
    );
  }
}

export default App;
