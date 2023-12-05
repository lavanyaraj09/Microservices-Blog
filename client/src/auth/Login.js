import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      // Handle successful login, e.g., store the token in local storage
      console.log("Login successful", response.data);

      // Display a prompt
      alert("Login successful!");

      // Redirect to the main application
      navigate("/app");
    } catch (error) {
      // Handle login error, e.g., display an error message
      console.error("Login failed", error.message);
    }
  };

  const validateLogin = () => {
    if (email !== '' && password !== '') {
      alert('Login successful!');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div>
      <header>
        <h1>Blog Website</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </header>
      <div className="landing-container">
      <div className="login-container">
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={validateLogin}><Link to="/app" className="btn">Login</Link></button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Login;
