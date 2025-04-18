import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: false,
  },
  weightUsed: {
    type: Number,
    required: false,
  },
  caloriesBurned: {
    type: Number,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
});

const Workout = mongoose.model("workouts", workoutSchema);
export default Workout;
