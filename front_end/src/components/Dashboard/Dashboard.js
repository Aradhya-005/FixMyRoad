import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./userDash.css";

import Profile from "../Profile/Profile";
import Feedbacks from "../Feedback/Feedback";
import Reports from "../Reports/Reports";
import "./Dashboard.css"; 

const Dashboard = ({ userName }) => {
  const navigate = useNavigate();

  const handleFeedback = () => {
    navigate("/feedform");  
  };

  const handleReport = () => {
    navigate("/report");  
  };

  if (!userName) {
    alert("Login required! ");
    navigate("/login");
    return null;
  }

  return (
    <>
      <div className="dashboard">
        
        <nav className="dashboard-nav">
          <h2>{userName}'s Dashboard</h2>
          <br></br>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">Your Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/feedbacks">Your Feedbacks</Link>
            </li>
            <li>
              <Link to="/dashboard/reports">Your Reports</Link>
            </li>
          </ul>
        </nav>

        <div className="dashboard-container">
          <h1>Welcome to the User Dashboard</h1>
          <p>
            As a responsible citizen, it’s important to take proactive steps to
            ensure the well-being and safety of our communities. By
            participating actively, you help to create a cleaner, safer, and
            more organized environment for everyone. Below are a few key
            responsibilities of a responsible citizen:
          </p>

          <ul className="responsibilities-list">
            <li>
              <strong>Report Issues:</strong> Actively report any damages or
              hazards like potholes, broken streetlights, or other road-related
              issues to prevent accidents.
            </li>
            <li>
              <strong>Provide Feedback:</strong> Share feedback on public
              services or infrastructure to help local authorities improve and
              maintain the community better.
            </li>
            <li>
              <strong>Follow Rules:</strong> Adhere to traffic laws and respect
              public property to maintain order and reduce potential harm to
              others.
            </li>
            <li>
              <strong>Raise Awareness:</strong> Encourage others to take part in
              community-driven initiatives, and spread awareness about safety
              and cleanliness in your locality.
            </li>
            <li>
              <strong>Volunteer:</strong> Participate in community clean-ups and
              engage in efforts to beautify and maintain public spaces.
            </li>
          </ul>

          <div className="button-group">
            <button className="dashboard-button" onClick={handleFeedback}>
              Make a Feedback
            </button>
            <button className="dashboard-button" onClick={handleReport}>
              Make a Report
            </button>
          </div>
        </div>

        {/* Main content area */}
        <div className="dashboard-content">
          <outlet>
            <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="feedbacks" element={<Feedbacks />} />
              <Route path="reports" element={<Reports />} />
            </Routes>
          </outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
