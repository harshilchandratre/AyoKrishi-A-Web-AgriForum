import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  // const [loadingBarWidth, setLoadingBarWidth] = useState('0%');
  const { loginWithRedirect, user, isAuthenticated, logout, isLoading } = useAuth0();

  // useEffect(() => {
  //   const loadingBar = document.getElementById('loading-bar');

  //   if (document.readyState === 'complete') {
  //     setLoadingBarWidth('100%');
  //     setTimeout(() => {
  //       setLoadingBarWidth('0%');
  //     }, 500);
  //   } else {
  //     setLoadingBarWidth('80%'); // Adjust the initial width value as needed
  //   }
  // }, []);

  document.onreadystatechange = function () {
    var loadingBar = document.getElementById("loading-bar");

    if (document.readyState === "complete") {
        // Page has finished loading
        loadingBar.style.width = "80%";
        setTimeout(function () {
            // Hide the loading bar after a short delay
            loadingBar.style.display = "none";
        }, 2500);
    } else {
        // Page is still loading
        loadingBar.style.width = "0";
        loadingBar.style.display = "block";
    }
};

  return (
    <>
    <div>
      {/* {isLoading && (
        <div className="loading-bar" style={{ width: loadingBarWidth }} id="loading-bar"></div>
      )} */}

      <nav className="navbar">
        <div className="logo">
          <img className='ayogo-main' src="/ayogo.png" alt="ayokrishi" />
          AyoKrishi
        </div>
        
        <ul className="navbar-list">
          <li className="navbar-item"><NavLink to='/' className="navbar-link home-active">Home</NavLink></li>
          <li className="navbar-item"><NavLink to='/forum' className="navbar-link">Forum</NavLink></li>
          <li className="navbar-item"><NavLink to='/articles' className="navbar-link">Articles</NavLink></li>
          <li className="navbar-item"><NavLink to='/about' className="navbar-link">About</NavLink></li>
          

          {isAuthenticated ? (
            <>
              {isLoading}
              {/* <li className="navbar-item"></li> */}
              {/* <button className='btn_logout' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button> */}
              <div className="separator"></div>
              <li className="navbar-item"><label className="userName">Hello👋 {user.name} </label><NavLink className='navbar-link logout-border' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</NavLink></li>
              
            </>
          ) : (
              <li className="navbar-item">
                <NavLink to='/login' className="navbar-link" onClick={() => loginWithRedirect()}>Login</NavLink>
              </li>
            )}
        </ul>
      </nav>
    </div>
    <div id="loading-bar"></div>
    </>
    
  );
};

export default Navbar;
