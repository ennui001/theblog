import React from 'react';
import './App.css';

import {Header, Navbar, Space, Blog, Events, Jobs, News, Footer } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Header/>
      </div>
      <Navbar/>
      <Space />
      <Blog />
      <News />
      <Events />
      <Jobs />
      <Footer />
    </div>
  )
}

export default App