// src/Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import LandingPage from "./LandingPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
