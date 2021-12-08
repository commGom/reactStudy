import logo from './logo.svg';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information.' },
        { id: 2, title: 'CSS', desc: 'CSS is for design.' },
        {
          id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.'
        }
      ]
    }
  }
  render() {
    let title = 'Welcome';
    let desc = 'React Web Application';
    for (let i = 0; i < this.state.contents.length; i++) {
      const element = this.state.contents[i];
      if (element.id === this.state.id) {
        title = element.title;
        desc = element.desc;
        break;
      }
    }
    console.log(`확인 : ${title}, ${desc}`);
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC contents={this.state.contents} changePage={(value) => this.setState({ id: value })}></TOC>
        <Content title={title} desc={desc}></Content>
      </div>
    );
  }
}

export default App;
