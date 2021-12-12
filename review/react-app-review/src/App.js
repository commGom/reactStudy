import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import { Component } from 'react';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      id: 0,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information.' },
        { id: 2, title: 'CSS', desc: 'CSS is for design.' },
        {
          id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.'
        }
      ],
      CRUD: ['create', 'update', 'delete'],
      lastId: 3
    }
  }

  findContentById() {
    let content;
    for (let i = 0; i < this.state.contents.length; i++) {
      const element = this.state.contents[i];
      if (this.state.id === element.id) {
        content = element;
        break;
      }
    }
    return content;
  }

  render() {
    let title = '';
    let desc = '';
    let article;
    if (this.state.mode === 'welcome') {
      title = 'Welcome';
      desc = 'React Web Application';
    } else if (this.state.mode === 'read') {
      const content = this.findContentById();
      title = content.title;
      desc = content.desc;
    } else if (this.state.mode === 'create') {
      console.log('create 실행');
      article = <CreateContent onSubmit={(title, desc) => {
        const lastId = this.state.lastId;
        this.state.contents.push({ id: lastId + 1, title: title, desc: desc });
        this.setState({ lastId: lastId + 1, mode: 'welcome' });
      }}></CreateContent>
    } else if (this.state.mode === 'update') {
      const content = this.findContentById();
      console.log(`수정할 데이터`);
      console.log(content);
      article = <UpdateContent title={content.title} desc={content.desc}
        onSubmit={(title, desc) => {
          content.title = title;
          content.desc = desc;
          this.setState({ mode: 'read' });
        }}></UpdateContent>
    } else if (this.state.mode === 'delete') {
      if (window.confirm('Are u sure to delete?')) {
        for (let i = 0; i < this.state.contents.length; i++) {
          if (this.state.id === this.state.contents[i].id) {
            this.state.contents.splice(i, 1);
          }
        }
        this.state.mode = 'welcome';
        title = 'Welcome';
        desc = 'React Web Application';
      }

    }

    return (
      <div className="App" >
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangeMode={() => this.setState({ mode: 'welcome' })}></Subject>
        <TOC contents={this.state.contents} changePage={(id) => this.setState({ mode: 'read', id: id })}></TOC>
        <Control CRUD={this.state.CRUD} onChangeMode={(mode) => { this.setState({ mode: mode }) }}></Control>
        {article}
        <Content title={title} desc={desc}></Content>
      </div >
    );
  }
}

export default App;
