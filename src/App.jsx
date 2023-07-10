// import { useState } from 'react'
// import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
import Forum from './components/Forum';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     
      <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />


          <Route path="/register" element={<Register />} />
        </Routes>
  


    </>
  )
}

export default App
