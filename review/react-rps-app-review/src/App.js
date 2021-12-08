import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Scissors from './components/Scissors';
import Rock from './components/Rock';
import Paper from './components/Paper';
import Result from './components/Result';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '_',
      com: '_',
      result: '선택해주세요!'
    }
  }
  render() {
    console.log(this.state.user, this.state.com, this.state.result);
    if (this.state.user != '_') {
      this.state.com = parseInt(Math.random() * 3);
      let com = this.state.com;
      let user = this.state.user;
      let result = "선택해주세요!"
      if (user == com) {
        result = '비겼습니다'
      } else if ((user + 1) == com) {
        result = '졌습니다.'
      } else {
        result = "이겼습니다."
      }
      this.state.result = result;
    }
    return (
      <div>
        <Title />
        <Scissors onSubmit={(value) => { this.setState({ user: value }) }} />
        <Rock onSubmit={(value) => { this.setState({ user: value }) }} />
        <Paper onSubmit={(value) => { this.setState({ user: value }) }} />
        <Result result={this.state.result} />
      </div>
    );
  }
}

export default App;
