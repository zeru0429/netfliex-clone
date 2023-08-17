import { useState, useEffect } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/home/Home';
import Home2 from './pages/home/Home2';
import Second from './pages/second/Second'

//component
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer';

import {TabContent,Tab,Apppp } from './components/host'
function App() {

  return (
    <div className='app'>
      
      <Nav />
      {/* <Second /> */}
     
      <Routes>    
        <Route path='/' element={<Home />} />
        <Route path='/home2' element={<Home2 />} />
        <Route path='/second' element={<Second />} />
        <Route path='*' element={<><h1>4O4</h1></>} />
      </Routes>
      <Footer />
      {/* <Apppp />
      <Tab />
      <TabContent /> */}
    </div>
  )
}

export default App
