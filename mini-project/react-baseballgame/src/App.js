import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Article from './components/Article';
import Footer from './components/Footer';
import React, { Component } from 'react';
import DescInput from './components/DescInput';
import NumberInput from './components/NumberInput';

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
          // { trycount: 1, firstNum: 8, secondNum: 3, thirdNum: 0, result: '아웃' },
          // { trycount: 2, firstNum: 6, secondNum: 5, thirdNum: 9, result: '0S 1B' },
          // { trycount: 3, firstNum: 2, secondNum: 6, thirdNum: 4, result: '1S 1B' },
          // { trycount: 4, firstNum: 1, secondNum: 2, thirdNum: 6, result: '1S 2B' },
          // { trycount: 5, firstNum: 2, secondNum: 1, thirdNum: 6, result: '3S 0B' },
        ]
      },
      descriptions: [
        // '1. 830 - 들어맞는 숫자가 아예 없으므로 아웃. 이때부터 0, 3, 8이 후보에서 빠지므로 남는 숫자는 1, 2, 4, 5, 6, 7, 9다.',
        // '2. 659 - 6이 있지만 위치가 다르므로 1볼. 게임 상으로는 어떤 숫자가 맞는지 모르기 때문에 가장 난감하다.',
        // '3. 264 - 2가 있고 위치가 맞으며, 6이 있지만 위치가 다르므로 1스트라이크 1볼.',
        // '4. 126 - 숫자는 전부 맞지만 위치는 6만 맞고 나머지 둘은 다르므로 1스트라이크 2볼.',
        // '5. 216 - 전부 맞으므로 승리.'
      ],
      comNumbers: this.makeThreeRandomNumbers()
    };
  }
  //랜덤으로 숫자 세 개 뽑기
  makeThreeRandomNumbers() {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 100; i++) {
      const randomNum = parseInt(Math.random() * 10);
      const temp = numArr[0];
      numArr[0] = numArr[randomNum];
      numArr[randomNum] = temp;
    }
    numArr.splice(3);
    console.log(numArr);
    return numArr;
  }
  //스트라이크, 볼 갯수 체크
  countStrikeAndBall(comArr, userArr) {
    let strike = 0;
    let ball = 0;
    //스트라이크 판별
    for (let i = 0; i < comArr.length; i++) {
      if (comArr[i] == userArr[i]) {
        strike += 1;
      }
    }
    //스트라이크 숫자를 배열에서 지우고 나서 판별
    for (let i = 0; i < comArr.length; i++) {
      const comNum = comArr[i];
      for (let j = 0; j < userArr.length; j++) {
        if (i == j) continue;
        if (comNum == userArr[j]) {
          ball += 1;
        }
      }
    }
    let result = `${strike} S ${ball} B`;
    console.log(result);
    if (strike == 3) {
      result = "3S 승리";
    } else if (strike == 0 && ball == 0) {
      result = "아 웃!"
    }
    return result;
  }
  render() {
    return (
      <div>
        <Header title={this.state.title}></Header>
        <Section contents={this.state.contents}></Section>
        <NumberInput onSubmit={(n1, n2, n3) => {
          const copyState = Object.assign({}, this.state);
          const tries = copyState.examples.tries;
          //선택한 번호 userNumbers
          const userNumbers = [n1, n2, n3];
          //스트라이크 볼 확인 결과
          const result = this.countStrikeAndBall(this.state.comNumbers, userNumbers);
          tries.push({ trycount: tries.length + 1, firstNum: n1, secondNum: n2, thirdNum: n3, result: result })
          this.setState(copyState);
        }}></NumberInput>
        <Article examples={this.state.examples}></Article>
        <Footer descriptions={this.state.descriptions}></Footer>
        <DescInput onSubmit={(value) => {
          const copyState = Object.assign({}, this.state);
          copyState.descriptions.push(value);
          this.setState({ descriptions: copyState.descriptions });
        }
        }></DescInput>
      </div>
    );
  }
}

export default App;
