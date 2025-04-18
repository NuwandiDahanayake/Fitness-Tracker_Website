import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./challenge.css";

const Challenge = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="challenge-page">
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
      <div className="header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>YOU vs. THE YEAR 2025</h1>
          <p>Log 1,025 km in 2025</p>
        </div>
      </div>

      <div className="challenge-container">
        <div className="left-section">
          <p className="small-txt">
            January 1 2025 - December 31 2025 • 306 Days Remaining <br></br>
            <br></br>Log 1,025 km in 2025
          </p>

          <h2>Challenge Overview</h2>

          <p>
            Are you ready to push your limits and take on the ultimate fitness
            challenge?
          </p>
          <p>
            "You VS The Year 2025" is designed to test your endurance,
            consistency, and dedication over the course of an entire year.
          </p>
          <p>
            This year, we're partnering with Brooks to encourage runners and
            walkers alike to achieve a total of 1,025 kilometers from January
            1st to December 31st. That’s about 2.8 kilometers per day a goal
            that fosters both physical strength and mental resilience. Whether
            you prefer long weekend runs or daily jogs, every step counts
            towards conquering the year ahead.
          </p>
          <p>
            Brooks has been at the forefront of motion science and engineering
            for over 110 years, helping athletes of all levels reach their
            goals. To celebrate your efforts, all participants who complete the
            challenge will be entered into a special giveaway, featuring an
            exclusive race package, Brooks gear, and even travel incentives!
          </p>
          <p>
            So, are you in? Join now, start tracking your progress, and make
            2025 the year of achievement one kilometer at a time.
          </p>
          <p className="list-rule">RULES - </p>

          <p className="list">
            ✅ You must complete 1,025 km to complete the challenge <br></br>✅
            Run, Walk, Hike, Indoor Run, and Treadmill workouts are eligible
            <br></br>✅ Workouts must be at least 5 minutes long<br></br>✅ A
            maximum of 2 workouts per day will count toward the challenge
          </p>

          <p className="list-rule">PRIZES - </p>
          <p>
            Participants who complete the challenge will earn an exclusive
            Challenge Completion Badge to showcase their achievement and be
            entered to win the ultimate race weekend package from Brooks,
            including a race entry stipend for you and a friend, a Brooks eGift
            card, and Rs.200,000 to use toward travel and lodging.
          </p>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="agree"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="agree">
              {" "}
              I agree to the challenge terms and conditions.
            </label>
          </div>
          <button
            className="button"
            onClick={() => navigate("/set-goals")}
            disabled={!isChecked}
          >
            Join Challenge
          </button>
        </div>

        <div className="right-section">
          <h2>Milestones</h2>
          <div className="milestones">
            {[1, 25, 42, 100, 200, 400, 600, 800, 1025].map((km) => (
              <div key={km} className="milestone">
                {km} km
              </div>
            ))}
          </div>

          <img
            src="/running-img.jpeg"
            alt="Milestone Achievement"
            className="milestone-image"
          />
          <button
            className="back-button"
            onClick={() => navigate("/dashboard")}
          >
            <IoArrowBack className="back-icon" /> Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
