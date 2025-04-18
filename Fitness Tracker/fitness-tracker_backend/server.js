import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import workouts from "./routes/workouts.js";
import goalRoutes from "./routes/goalRoutes.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoUrl =
  "mongodb+srv://nuwandihdd:fWL3GxcehUk6H9Gx@cluster0.rkkpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Workout API
app.use("/workouts", workouts);

// Goal API
app.use("/goals", goalRoutes);

app.use(express.static("./fitness-tracker/build)"));
app.get("*", (req, res) => {
  res.sendFile(
    Path2D.resolve(__dirname, "fitness-tracker", "build", "index.html")
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
