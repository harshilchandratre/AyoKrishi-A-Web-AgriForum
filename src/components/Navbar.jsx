import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Background.jpg';
import './Navbar.css';
// import './background.jpg';
import { useAuth0 } from '@auth0/auth0-react';


const Navbar = () => {

  const { loginWithRedirect, user, isAuthenticated, logout, isLoading } = useAuth0();

  // script for loading
  document.onreadystatechange = function () {
    var loadingBar = document.getElementById("loading-bar");

    if (document.readyState === "complete") {
        // Page has finished loading
        loadingBar.style.width = "100%";
        setTimeout(function () {
            // Hide the loading bar after a short delay
            loadingBar.style.display = "none";
        }, 500);
    } else {
        // Page is still loading
        // loadingBar.style.width = "0";
        // loadingBar.style.display = "block";

        loadingBar.style.transition = "width 10s linear";
        loadingBar.style.width = "80%"; // Adjust the initial width value as needed
        loadingBar.style.display = "block";
    }
};

  return (
    <div>
      {
        (
          <nav className="navbar">
            <div className="logo">AyoKrishi</div>
            <ul className="navbar-list">
              <li className="navbar-item"><NavLink to='/' className="navbar-link">Home</NavLink></li>
              <li className="navbar-item"><NavLink to='/forum' className="navbar-link">Forum</NavLink></li>
              <li className="navbar-item"><NavLink to='/articles' className="navbar-link">Articles</NavLink></li>
              <li className="navbar-item"><NavLink to='/about' className="navbar-link">About</NavLink></li>

              {
                isAuthenticated? (
                  <>
                  {isLoading}
                  <label htmlFor="userName">Welcome! {user.name}</label><button className='btn_logout' onClick={() => logout({ returnTo: window.location.origin})}>Log Out</button></>
                )
                :
                <>
                <li className="navbar-item"><NavLink to='/login' className="navbar-link" onClick={() => loginWithRedirect()}>Login</NavLink></li>
                </>
                
              }
              
            </ul>
          </nav>
        )
      }











      {/* <NavLink to=./register">Register</NavLink> */}
      {/* <NavLink to=./login">Login</NavLink> */}
    </div>
  )
}

export default Navbar