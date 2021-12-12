import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('welcome');
  const [title, setTitle] = useState('WEB');
  const [sub, setSub] = useState('World Wide Web');
  const [contents, setContents] = useState([{ id: 1, title: 'html', desc: 'HTML IS HyperText Markup Language.' },
  { id: 2, title: 'css', desc: 'CSS is for design' },
  { id: 3, title: 'js', desc: 'Javascript is interactive' }]);



  let intro, desc;
  if (mode === 'welcome') {
    intro = "Welcome";
    desc = "Hello Web";
  } else {
    intro;
    desc;
  }
  return (
    <div className="App">
      <Subject title={title} sub={sub}></Subject>
      <TOC contents={contents}></TOC>
      <Content></Content>
    </div>
  );
}

export default App;
