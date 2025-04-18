import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SetGoals.css";

const API_URL = "http://localhost:5000/goals";

const SetGoals = () => {
  const navigate = useNavigate();
  const [goalType, setGoalType] = useState("");
  const [goalValue, setGoalValue] = useState("");
  const [goalDuration, setGoalDuration] = useState("");
  const [presetGoal, setPresetGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [goalToEdit, setGoalToEdit] = useState(null);

  // Fetch goals from the backend
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setGoals(response.data);
      })
      .catch((error) => console.error("Error fetching goals:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGoal = { goalType, goalValue, goalDuration, presetGoal };

    try {
      if (editMode) {
        // Update existing goal
        await axios.put(`${API_URL}/${goalToEdit._id}`, newGoal);
        setGoals(
          goals.map((goal) => (goal._id === goalToEdit._id ? newGoal : goal))
        );
        setEditMode(false);
        setGoalToEdit(null);
      } else {
        // Add new goal
        const response = await axios.post(API_URL, newGoal);
        setGoals([...goals, response.data]);
      }
      alert("Goal Saved Successfully!");
    } catch (error) {
      console.error("Error saving goal:", error);
      alert("Failed to save goal.");
    }

    setGoalType("");
    setGoalValue("");
    setGoalDuration("");
    setPresetGoal("");
  };

  const handleEdit = (goal) => {
    setGoalType(goal.goalType);
    setGoalValue(goal.goalValue);
    setGoalDuration(goal.goalDuration);
    setPresetGoal(goal.presetGoal);
    setGoalToEdit(goal);
    setEditMode(true);
  };

  const handlePause = (goal) => {
    alert(`Goal ${goal.goalType} paused!`);
  };

  const handleReset = async (goal) => {
    try {
      await axios.delete(`${API_URL}/${goal._id}`);
      setGoals(goals.filter((g) => g._id !== goal._id));
      alert(`Goal ${goal.goalType} has been reset!`);
    } catch (error) {
      console.error("Error resetting goal:", error);
      alert("Failed to reset goal.");
    }
  };

  return (
    <div className="set-goals-container">
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        <IoArrowBack className="back-icon" /> Dashboard
      </button>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">FitSync</h2>
        <ul className="nav-links">
          <li>
            <Link to="/dashboard">Dashboard | </Link>
          </li>
          <li>
            <Link to="/workouts">Workout | </Link>
          </li>
          <li>
            <Link to="/set-goals">Set Goals | </Link>
          </li>
          <li>
            <Link to="/progress">Track Progress</Link>
          </li>
        </ul>
      </nav>

      <h1 className="setgoal-caption">Set Your Fitness Goals</h1>
      <p className="setgoal-p">
        Select your fitness targets and track progress.
      </p>

      <form className="goal-form" onSubmit={handleSubmit}>
        <label>Select Goal Type:</label>
        <select
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
          required
        >
          <option value="">-- Choose a Goal --</option>
          <option value="steps">Steps</option>
          <option value="calories">Calories Burned</option>
          <option value="distance">Distance (km)</option>
          <option value="workoutTime">Workout Time (mins)</option>
          <option value="weightLoss">Weight Loss (lbs/kg)</option>
          <option value="muscleGain">Muscle Gain (lbs/kg)</option>
        </select>

        {/* Goal Value */}
        <label>Enter Goal Value:</label>
        <input
          type="number"
          value={goalValue}
          onChange={(e) => setGoalValue(e.target.value)}
          placeholder="Enter target value"
          required
        />

        {/* Goal Duration */}
        <label>Select Goal Duration:</label>
        <select
          value={goalDuration}
          onChange={(e) => setGoalDuration(e.target.value)}
          required
        >
          <option value="">-- Choose Duration --</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>

        {/* Preset Goals */}
        <label>Or Choose a Preset Goal:</label>
        <select
          value={presetGoal}
          onChange={(e) => setPresetGoal(e.target.value)}
        >
          <option value="">-- Optional: Select a Preset --</option>
          <option value="lose5lbs">Lose 5 lbs in a month</option>
          <option value="run10k">Run 10K in 6 weeks</option>
          <option value="burn500cals">Burn 500 Calories Daily</option>
        </select>

        <button type="submit" className="btn">
          {editMode ? "Update Goal" : "Save Goal"}
        </button>
      </form>

      <div className="goals-list">
        <h2>Your Goals</h2>
        {goals.length > 0 ? (
          goals.map((goal, index) => (
            <div key={index} className="goal-item">
              <h3>{goal.goalType}</h3>
              <p>
                {goal.goalValue} {goal.goalType} - {goal.goalDuration}
              </p>
              <div className="goal-actions">
                <button onClick={() => handleEdit(goal)}>Edit</button>
                <button onClick={() => handlePause(goal)}>Pause</button>
                <button onClick={() => handleReset(goal)}>Reset</button>
              </div>
            </div>
          ))
        ) : (
          <p>No goals set yet.</p>
        )}
      </div>
    </div>
  );
};

export default SetGoals;
