import { useState, useEffect } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/home/Home';
import second from './pages/seconድ'

//component
import Nav from './components/nav/Nav'


function App() {

  return (
    <div className='app'>
    
      <Nav />
      <Home/>
      {/* <Routes>
        <Nav/>
        <Route path='/' element={<Home/>} />
      </Routes> */}
    </div>
  )
}

export default App
