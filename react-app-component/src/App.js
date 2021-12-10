import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';

class ClassComp extends Component {
  constructor(props) {
    super(props);
    // props 데이터를 state 데이터에 담음, 확장성을 위하여 
    this.state = {
      initNumber: this.props.initNumber,
      date: new Date().toString()
    }
    console.log('Class => constructor');
  }
  //따로 실행하지 않아도 자동으로 호출 실행 됨.
  componentDidMount() {
    console.log('Class => componentDidMount');

  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Class Comp => shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState) { // Deprecated
    console.log('Class Comp => componentWillUpdate');
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('Class Comp => componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('Class Comp => componentWillUnmount');
  }
  render() {
    console.log('Class => render');

    return (
      < div div className="container" >
        <h2>Class Style Component</h2>
        <p>Numbers from class component:{this.state.initNumber}</p>
        <button onClick={() => {
          this.setState({ initNumber: parseInt(Math.random() * 10) })
        }}>Random</button>
        <p>Date from class component:{this.state.date}</p>
        <button onClick={() => {
          this.setState({ date: new Date().toString() })
        }}>date</button>
      </div>
    )
  }
}

function FunctionComp(props) {
  const num = useState(props.initNumber);
  const setNum = num[1];
  const [date, setDate] = useState(new Date().toString());
  console.log('FunctionComp => render');

  useEffect(() => {
    console.log('FunctionComp =>  useEffect2');
  });
  //생성될 때 한 번만 호출된다.
  useEffect(() => {
    console.log('FunctionComp =>  useEffect1');
  }, []);
  return (
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Numbers from function component:{num[0]}</p>
      <button onClick={() => {
        setNum(parseInt(Math.random() * 10));
      }}>Random</button>
      <p>Date from function component:{date}</p>
      <button onClick={() => {
        setDate(new Date().toString());
      }}>date</button>
    </div>
  )
}


class ClassCounter extends Component {
  state = { count: 0 }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(`${this.state.count}`);
    }, 1000);
    return true;
  }
  render() {
    return (
      <>
        <button onClick={() => {
          this.state.count++;
          this.setState({ state: this.state.count });
        }}>click</button>
      </>
    )
  }
}

function FunctionCounter() {
  const [count, setCount] = useState(0);
  useEffect(function () {
    setTimeout(() => {
      console.log(`${count}`);
    }, 1000);
  });
  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>click</button>
    </>
  )
}

function App() {
  const [isShow, setShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <button onClick={() => {
        setShow(!isShow);
      }}>클릭</button>
      {isShow ? <ClassComp initNumber={2}></ClassComp> : null}
      <FunctionComp initNumber={2}></FunctionComp>
      <ClassCounter></ClassCounter>
      <FunctionCounter></FunctionCounter>
    </div>
  );
}

export default App;
