import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

class ClassComp extends Component {
  constructor(props) {
    super(props);
    // props 데이터를 state 데이터에 담음, 확장성을 위하여 
    this.state = { initNumber: this.props.initNumber }
  }
  render() {
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Numbers from class component:{this.state.initNumber}</p>
      </div>
    )
  }
}

function FunctionComp(props) {
  const num = useState(props.initNumber);
  console.log(num);
  return (
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Numbers from function component:{num[0]}</p>

    </div>
  )
}

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <ClassComp initNumber={2}></ClassComp>
      <FunctionComp initNumber={2}></FunctionComp>
    </div>
  );
}

export default App;
