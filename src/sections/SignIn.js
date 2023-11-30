// SignIn.js

import React, { useState } from "react";
import LoginImg from "../assets/loginimg.gif";
import "../styles/SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://172.18.62.22:3002/login",  // Update with your server URL
        formData
      );
  
      if (response.status === 200) {
        console.log("Login successful");
        navigation("/Home")
        // Redirect or perform other actions upon successful login
      } else {
        console.error("User not found or incorrect password");
        // Handle error, display message to the user, etc.
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="home">
      <div
        className="headerSide"
        style={{ backgroundImage: `url(${LoginImg})` }}
      ></div>
      <div className="footerSide">
        <h1>Login</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="signinbox">
            <div className="input2">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                placeholder="Enter first name..."
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="input2">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                placeholder="Enter last name..."
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="input2">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                placeholder="Enter password..."
                type="password"
                onChange={handleChange}
                required
              />
              <button className="lgbtn" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
