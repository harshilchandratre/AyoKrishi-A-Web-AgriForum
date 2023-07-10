import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
const Login = () => {

    const validateLoginForm = (event) => {
        event.preventDefault(); // Prevent form submission
      
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
      
        // Perform login validation here
        // For simplicity, let's just check if username and password are not empty
        if (username !== "" && password !== "") {
          alert("Login successful");
          // Redirect to a different page or perform other actions
        } else {
          alert("Invalid username or password");
        }
      }
      


  return (
    <div className="register-container">
    <h2>Login</h2>
    <form id="register-form" onSubmit={validateLoginForm}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" required />

      <button type="submit">Login</button>
    </form>
    <p>New to platform? <NavLink to="/register">Register</NavLink></p>
    {/* <NavLink to="/">Go To Home</NavLink> */}
  </div>
  )
}

export default Login