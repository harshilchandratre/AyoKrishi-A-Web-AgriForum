import React from 'react'
import './Register.css'
import { NavLink } from 'react-router-dom'

const Register = () => {

    const validateRegisterForm = (event) => {
        event.preventDefault();// Prevent form submission
      
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
      
        // Perform registration validation here
        // For simplicity, let's just check if all fields are not empty and if the passwords match
        if (username !== "" && password !== "" && confirmPassword !== "") {
          if (password === confirmPassword) {
            alert("Registration successful");
            // Redirect to a different page or perform other actions
          } else {
            alert("Passwords do not match");
          }
        } else {
          alert("Please fill in all fields");
        }
      }
      



  return (
    <div className="register-container">
    <h2>Registration</h2>
    <form id="register-form" onSubmit={validateRegisterForm}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" required />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" required />

      <button type="submit">Register</button>
    </form>
    <p>Already have an account? <NavLink to='/login'>Login</NavLink></p>
    {/* <NavLink to="/">Go To Home</NavLink> */}
  </div>
  )
}

export default Register