import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} /> {/* Render SignIn for root path */}
        {/* Other routes can be added here */}
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App; // Ensure to export App as default
