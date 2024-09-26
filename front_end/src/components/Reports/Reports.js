import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle button click
  const handleReportIssue = () => {
    navigate('/report'); // Navigates to ReportIssue page
  };

  return (
    <>
      <div>
        <h2>Your Reports</h2>
        <p>This is where your reports will be displayed.</p>
        {/* You can fetch and display reports related to the user */}
      </div>

      <div>
        <button onClick={handleReportIssue}>Report a New Issue</button>
      </div>
    </>
  );
};

export default Reports;
