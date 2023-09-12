import React, { useState, useEffect } from 'react';
import './App.css'
import './components/Home.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
import Forum from './components/Forum';
// import Chat from './components/Chat';
import ToTop from './components/ToTop';
import Loading from './components/Loading';


import { Routes, Route } from "react-router-dom";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to represent your app's loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed
  }, []);

  return (
    <>

      {isLoading ? <Loading /> : (

        <>
          <Navbar />

          <Routes>
            <Route exact path="/" activeClassName='active-link' element={<Home />} />
            <Route path="/forum" activeClassName='active-link' element={<Forum />} />
            <Route path="/articles" activeClassName='active-link' element={<Articles />} />
            <Route path="/about" activeClassName='active-link' element={<About />} />
          </Routes>
          <ToTop />

          <Footer />
        </>

      )}
      
    </>
  )
}

export default App
