import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
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
            <Link to="/progress"> Track Progress</Link>
          </li>
        </ul>
      </nav>

      <div className="hero-section">
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon2" />
        <AiFillStar className="star-icon3" />
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Fitness <span className="highlight">TRACKER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Track your workouts, set goals, monitor your nutrition, and improve
            sleep—all in one place!
          </motion.p>
          <Link to="/dashboard">
            <button className="btn">Get Started</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/fitness-tracker.jpg" alt="Fitness Tracker" />
        </div>
      </div>
    </div>
  );
};

export default Home;
