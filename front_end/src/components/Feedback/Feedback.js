import React from 'react';
import { useNavigate } from 'react-router-dom';




const Feedbacks = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle button click
  const handleReportIssue = () => {
    navigate('/feedform'); // Navigates to ReportIssue page
  };



  return (
    <>
    <div>
      <h2>Your Feedbacks</h2>
      <p>This is where your feedbacks will be displayed.</p>
      {/* You can fetch and display user feedback from the database */}
    </div>
    <div>
    <button onClick={handleReportIssue}>Report a New Issue</button>
  </div>
    </>
  );
};

export default Feedbacks;
 