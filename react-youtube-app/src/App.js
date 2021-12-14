import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Subscription from './pages/Subscription';



function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/explore" element={<Explore></Explore>}></Route>
        <Route path="/subscription" element={<Subscription></Subscription>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
