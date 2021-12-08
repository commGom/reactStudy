import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Scissors from './components/Scissors';
import Rock from './components/Rock';
import Paper from './components/Paper';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <Title />
      <Scissors />
      <Rock />
      <Paper />
      <Result />
    </div>
  );
}

export default App;
