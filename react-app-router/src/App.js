import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Link,
  NavLink,
  Outlet,
  useParams
} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><Link to='/topics/1'>HTML</Link></li>
        <li><Link to='/topics/2'>CSS</Link></li>
        <li><Link to='/topics/3'>JS</Link></li>
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
};

const Topic = () => {
  const { id } = useParams();
  const params = useParams();
  const id2 = params.id;
  return (
    <div>
      Topic... Number is {id}, {id2}
    </div>
  );
};


const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>

    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM Example</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/topics'>Topics</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/topics" element={<Topics></Topics>}>
            <Route path=":id" element={<Topic></Topic>}></Route>
          </Route>
          <Route path="/contact"
            element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
