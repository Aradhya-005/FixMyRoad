import React from 'react';
import { useNavigate } from 'react-router-dom';
import './userDash.css';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleFeedback = () => {
    navigate('/feedback'); // Navigates to the feedback page
  };

  const handleReport = () => {
    navigate('/report-issue'); // Navigates to the report issue page
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to the User Dashboard</h1>
      <p>As a responsible citizen, it’s important to take proactive steps to ensure the well-being and safety of our communities. By participating actively, you help to create a cleaner, safer, and more organized environment for everyone. Below are a few key responsibilities of a responsible citizen:</p>
      
      <ul className="responsibilities-list">
        <li><strong>Report Issues:</strong> Actively report any damages or hazards like potholes, broken streetlights, or other road-related issues to prevent accidents.</li>
        <li><strong>Provide Feedback:</strong> Share feedback on public services or infrastructure to help local authorities improve and maintain the community better.</li>
        <li><strong>Follow Rules:</strong> Adhere to traffic laws and respect public property to maintain order and reduce potential harm to others.</li>
        <li><strong>Raise Awareness:</strong> Encourage others to take part in community-driven initiatives, and spread awareness about safety and cleanliness in your locality.</li>
        <li><strong>Volunteer:</strong> Participate in community clean-ups and engage in efforts to beautify and maintain public spaces.</li>
      </ul>

      <div className="button-group">
        <button className="dashboard-button" onClick={handleFeedback}>Make a Feedback</button>
        <button className="dashboard-button" onClick={handleReport}>Make a Report</button>
      </div>
    </div>
  );
};

export default UserDashboard;
