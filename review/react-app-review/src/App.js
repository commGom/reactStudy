import logo from './logo.svg';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Subject></Subject>
      <TOC></TOC>
      <Content></Content>
    </div>
  );
}

export default App;
