import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  goalType: {
    type: String,
    required: true,
  },
  goalValue: {
    type: Number,
    required: true,
  },
  goalDuration: {
    type: String,
    required: true,
  },
  presetGoal: {
    type: String,
    required: false,
  },
});

const Goal = mongoose.model("goals", goalSchema);
export default Goal;
