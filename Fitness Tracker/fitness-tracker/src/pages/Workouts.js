import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import "./Workouts.css";

const API_URL = "http://localhost:5000/workouts";

const Workouts = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);
  const [formData, setFormData] = useState({
    workoutType: "",
    date: "",
    duration: "",
    reps: "",
    weightUsed: "",
    caloriesBurned: "",
    notes: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [workoutToEdit, setWorkoutToEdit] = useState(null);

  // Fetch workouts from the backend
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setWorkouts(response.data))
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        // Update existing workout
        await axios.put(`${API_URL}/${workoutToEdit._id}`, formData);
        setWorkouts(
          workouts.map((w) =>
            w._id === workoutToEdit._id ? { ...w, ...formData } : w
          )
        );
        setEditMode(false);
        setWorkoutToEdit(null);
      } else {
        // Add new workout
        const response = await axios.post(API_URL, formData);
        setWorkouts([...workouts, response.data]);
      }
      setFormData({
        workoutType: "",
        date: "",
        duration: "",
        reps: "",
        weightUsed: "",
        caloriesBurned: "",
        notes: "",
      });
      alert("Workout Saved Successfully!");
    } catch (error) {
      console.error("Error saving workout:", error);
      alert("Failed to save workout.");
    }
  };

  const handleEdit = (workout) => {
    setFormData({ ...workout });
    setWorkoutToEdit(workout);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setWorkouts(workouts.filter((workout) => workout._id !== id));
      alert("Workout Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting workout:", error);
      alert("Failed to delete workout.");
    }
  };

  return (
    <div className="workouts-container">
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        <IoArrowBack className="back-icon" /> Dashboard
      </button>
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
      <h1>Workout Log</h1>
      <p>Track and log your workout sessions.</p>
      <form className="workout-form" onSubmit={handleSubmit}>
        <label>Workout Type:</label>
        <select
          name="workoutType"
          value={formData.workoutType}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Running">Running</option>
          <option value="Weightlifting">Weightlifting</option>
          <option value="Yoga">Yoga</option>
        </select>
        <label>Date & Time:</label>
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label>Duration (minutes):</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
        <label>Reps:</label>
        <input
          type="number"
          name="reps"
          value={formData.reps}
          onChange={handleChange}
        />
        <label>Weight Used (kg/lbs):</label>
        <input
          type="number"
          name="weightUsed"
          value={formData.weightUsed}
          onChange={handleChange}
        />
        <label>Calories Burned:</label>
        <input
          type="number"
          name="caloriesBurned"
          value={formData.caloriesBurned}
          onChange={handleChange}
        />
        <label>Notes:</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn">
          {editMode ? "Update Workout" : "Log Workout"}
        </button>
      </form>
      <div className="workout-list">
        <h2>Your Workouts</h2>
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <div key={workout._id} className="workout-item">
              <h3>{workout.workoutType}</h3>
              <p>Date: {new Date(workout.date).toLocaleString()}</p>
              <p>Duration: {workout.duration} minutes</p>
              <p>Reps: {workout.reps || "N/A"}</p>
              <p>Weight Used: {workout.weightUsed || "N/A"}</p>
              <p>Calories Burned: {workout.caloriesBurned || "N/A"}</p>
              <p>Notes: {workout.notes}</p>
              <div className="workout-actions">
                <button onClick={() => handleEdit(workout._id)}>Edit</button>

                <button onClick={() => handleDelete(workout._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No workouts logged yet.</p>
        )}
      </div>
    </div>
  );
};

export default Workouts;
