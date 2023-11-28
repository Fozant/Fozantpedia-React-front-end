
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn"
import Register from "./pages/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} /> {/* Render SignIn for root path */}
        {/* Other routes can be added here */}
        <Route path="/register" element={<Register />} />


      </Routes>
    </Router>
  );
}




export default App;