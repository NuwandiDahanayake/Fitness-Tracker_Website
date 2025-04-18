import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <button className="back-button" onClick={() => navigate("/")}>
        <IoArrowBack className="back-icon" /> Home
      </button>

      <div className="dashboard-main">
        {/* workout section*/}
        <div className="dashboard-content">
          <h1>Set Goals. Log Workouts. Stay on Track.</h1>
          <p>
            Easily track your workouts, set training plans, and discover new
            workout routines to crush your goals.
          </p>
          <button className="workout-btn" onClick={() => navigate("/workouts")}>
            Go to Workout
          </button>
        </div>

        <div className="dashboard-image">
          <img src="dashboard_image1.jpg" alt="Workout" />
        </div>
      </div>

      {/* challenge section */}
      <div
        className="clickable-image-container"
        onClick={() => navigate("/challenge")}
      >
        <img
          src="dashboard_image2.png"
          alt="Fitness Challenge"
          className="clickable-image"
        />
        <div className="image-text">
          <h2>YOU VS. THE YEAR 2025 CHALLENGE - Join us!</h2>
        </div>
      </div>

      {/*Set your goals section */}
      <div className="features-container">
        <h2>Set Your Goals</h2>
        <p>Define your fitness objectives and track progress.</p>
        <button className="setgoals-btn" onClick={() => navigate("/set-goals")}>
          Go to Set Your Goals
        </button>
      </div>

      <div className="progress-section">
        <div className="progress-image">
          <img src="liftning-img.jpeg" alt="Progress Tracking" />
        </div>

        {/* Progress Tracking Button */}
        <div className="progress-content">
          <h2>Track Your Progress</h2>
          <p>Monitor your workout performance and improve over time.</p>
          <button
            className="progress-btn"
            onClick={() => navigate("/progress")}
          >
            Go to Progress Tracking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
