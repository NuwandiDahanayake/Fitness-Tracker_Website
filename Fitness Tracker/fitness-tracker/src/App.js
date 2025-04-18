import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Home from "./pages/Home";
import SetGoals from "./pages/SetGoals";
import Progress from "./pages/Progress";
import Challenge from "./pages/Challenge";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/set-goals" element={<SetGoals />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
