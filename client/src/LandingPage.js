// src/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const LandingPage = () => {
  return (
    <div>
      <header>
        <h1><b>Blog Website</b></h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </header>
      <div className="landing-container">
      <div className="landing-content">
        <div className="login-signup-box">
        <br></br>
        <br></br>
          <br></br>
          <h1><b>Click below to login or signup:</b></h1>
          <br></br>
          <br></br>
          <p>Welcome to our Blog Website! Whether you're a new visitor or a returning user, we're delighted to have you here. For new users, feel free to sign up and join our community. If you're already part of our community, log in with your existing credentials and start exploring the latest posts and discussions. Happy blogging!</p>
          <br></br>
          <br></br>
          <div className="buttons-container">
            <Link to="/login" className="btn">
              Login
            </Link>
            {/* <span>or</span> */}
            <Link to="/signup" className="btn">
              Signup
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
