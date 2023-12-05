import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/signup", {
        username,
        email,
        password,
      });

      // Handle successful signup, e.g., store the token in local storage
      console.log("Signup successful", response.data);

      // Redirect to the main application or login page
      navigate("/");
    } catch (error) {
      // Handle signup error, e.g., display an error message
      console.error("Signup failed", error.message);
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
    <div className="signup-container">
      <form onSubmit={onSubmit}>
        <h1>Signup</h1>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
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
        <button className="btn btn-primary"><Link to="/" className="btn">Signup</Link></button>
      </form>
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default Signup;
