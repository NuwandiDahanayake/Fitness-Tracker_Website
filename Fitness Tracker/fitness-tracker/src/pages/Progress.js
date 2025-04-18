import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Progress.css";

const progressData = [
  { date: "Feb 1", calories: 200, duration: 30, weightLifted: 10 },
  { date: "Feb 5", calories: 250, duration: 45, weightLifted: 15 },
  { date: "Feb 10", calories: 300, duration: 50, weightLifted: 20 },
  { date: "Feb 15", calories: 400, duration: 60, weightLifted: 25 },
  { date: "Feb 20", calories: 450, duration: 70, weightLifted: 30 },
];

const Progress = () => {
  const navigate = useNavigate();

  return (
    <div className="progress-container">
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        <IoArrowBack className="back-icon" /> Dashboard
      </button>
      <nav className="navbar">
        <h1 className="logo">FitSync</h1>
        <ul className="nav-links">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/workouts">Workout</a>
          </li>
          <li>
            <a href="/set-goals">Set Goals</a>
          </li>
          <li>
            <a href="/progress-tracking">Track Progress</a>
          </li>
        </ul>
      </nav>

      <h1 className="topic">Workout Progress</h1>
      <p className="sub-topic">Track your improvement over time.</p>

      <div className="chart-container">
        {/* Calories Burned Chart */}
        <div className="chart-card">
          <h3>Calories Burned Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="calories"
                stroke="#b82132"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Workout Duration Chart */}
        <div className="chart-card">
          <h3>Workout Duration Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="duration"
                stroke="#4b4376"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Weight Lifted Chart */}
        <div className="chart-card">
          <h3>Weight Lifted Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weightLifted"
                stroke="#2a9d8f"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Progress;
