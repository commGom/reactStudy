import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Article from './components/Article';
import Footer from './components/Footer';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '야구게임방식',
      contents: [
        '사용되는 숫자는 0에서 9까지 서로 다른 숫자이다.',
        '숫자는 맞지만 위치가 틀렸을 때는 볼.',
        '숫자와 위치가 전부 맞으면 스트라이크.',
        '숫자와 위치가 전부 틀리면 아웃. "틀렸다"는 게 중요하다.',
        '물론 무엇이 볼이고 스트라이크인지는 알려주지 않는다.'
      ],
      examples: {
        th1: '횟수',
        th2: '숫자',
        th3: '판정',
        tries: [
          { trycount: 1, firstNum: 8, secondNum: 3, thirdNum: 0, result: '아웃' },
          { trycount: 2, firstNum: 6, secondNum: 5, thirdNum: 9, result: '0S 1B' },
          { trycount: 3, firstNum: 2, secondNum: 6, thirdNum: 4, result: '1S 1B' },
          { trycount: 4, firstNum: 1, secondNum: 2, thirdNum: 6, result: '1S 2B' },
          { trycount: 5, firstNum: 2, secondNum: 1, thirdNum: 6, result: '3S 0B' },
        ]
      },
      descriptions: [
        '1. 830 - 들어맞는 숫자가 아예 없으므로 아웃. 이때부터 0, 3, 8이 후보에서 빠지므로 남는 숫자는 1, 2, 4, 5, 6, 7, 9다.',
        '2. 659 - 6이 있지만 위치가 다르므로 1볼. 게임 상으로는 어떤 숫자가 맞는지 모르기 때문에 가장 난감하다.',
        '3. 264 - 2가 있고 위치가 맞으며, 6이 있지만 위치가 다르므로 1스트라이크 1볼.',
        '4. 126 - 숫자는 전부 맞지만 위치는 6만 맞고 나머지 둘은 다르므로 1스트라이크 2볼.',
        '5. 216 - 전부 맞으므로 승리.'
      ]
    };
  }
  render() {
    return (
      <div>
        <Header title={this.state.title}></Header>
        <Section contents={this.state.contents}></Section>
        <Article examples={this.state.examples}></Article>
        <Footer descriptions={this.state.descriptions}></Footer>
      </div>
    );
  }
}

export default App;
