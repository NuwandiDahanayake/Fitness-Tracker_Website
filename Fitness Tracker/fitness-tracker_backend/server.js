import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

import workouts from "./routes/workouts.js";
import goalRoutes from "./routes/goalRoutes.js";

const app = express();

// Fix for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const mongoUrl =
  "mongodb+srv://nuwandihdd:fWL3GxcehUk6H9Gx@cluster0.rkkpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// API Routes
app.use("/workouts", workouts);
app.use("/goals", goalRoutes);

// Serve frontend (React build)
app.use(express.static(path.join(__dirname, "fitness-tracker", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "fitness-tracker", "build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
