import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.sub}
    </div>
  );
};

const Nav = (props) => {
  const contents = props.contents;
  console.log(contents);
  const list = [];
  for (let i = 0; i < contents.length; i++) {
    const element = <li key={contents[i].id}><a href={`/content/${contents[i].id}`}>{contents[i].title}</a></li>;
    list.push(element);
  }
  return (
    <nav>
      <ul>
        {list}
      </ul>
    </nav>
  );
};

const Article = (props) => {
  const { id } = useParams();
  const contents = props.contents;
  let content;
  for (let i = 0; i < contents.length; i++) {
    const element = contents[i];
    if (id == element.id) {
      content = element;
      break;
    }
  }
  return (
    <article>
      <h2>{content.title}</h2>
      {content.desc}
    </article>
  );
};


function App() {
  const [subject, setSubject] = useState({ title: 'WEB', sub: 'World Wide Web!' });
  const [contents, setContents] = useState([
    {
      id: 1, title: 'HTML',
      desc: 'HTML is for information.'
    },
    { id: 2, title: 'CSS', desc: 'CSS is for design.' },
    {
      id: 3, title: 'JavaScript',
      desc: 'JavaScript is for interactive.'
    }
  ]);
  return (
    <div>
      <Header title={subject.title} sub={subject.sub}></Header>
      <Nav contents={contents}></Nav>
      {/* npm install react-router-dom */}
      <BrowserRouter>
        <Routes>
          <Route path="content/:id" element={<Article contents={contents}></Article>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
