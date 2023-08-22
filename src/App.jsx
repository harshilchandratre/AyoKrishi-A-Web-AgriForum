// import { useState } from 'react'
import './App.css'
import './components/Home.css'
// import Login from './components/Login'
// import Register from './components/Register'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
import Forum from './components/Forum';
import Slider from './components/Slider';


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     
      <Navbar />
      <Slider />

        <Routes>
          <Route exact path="/" activeClassName='active-link' element={<Home />} />
          <Route path="/forum" activeClassName='active-link' element={<Forum />} />
          <Route path="/articles" activeClassName='active-link' element={<Articles />} />
          <Route path="/about" activeClassName='active-link' element={<About />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>

      <Footer />
  


    </>
  )
}

export default App
