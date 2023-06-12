import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import LoginPage from "./components/Login";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import Exercises from "./components/Exercises";
import HealthData from "./components/HealthData";
import Medicinedetails from "./components/Medicinedetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/healthdata" element={<HealthData />} />
          <Route path="/medicinedetails" element={<Medicinedetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
