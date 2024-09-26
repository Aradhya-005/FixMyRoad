import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Report.css'; // Import CSS for styling

const Reports = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Hardcoded report data
  const reportsList = [
    {
      id: 1,
      feedback: "The potholes on mulayam chauraha jankipuram extension are causing serious traffic problems. Please fix them soon!",
      location: "mulayam chauraha jankipuram extension",
      date: "2024-09-27",
    },
    {
      id: 2,
      feedback: "Cracks in the road near second campus university of lucknow are making it unsafe for university students and cyclists.",
      location: "near second campus university of lucknow",
      date: "2024-09-27",
    },
  ];

  // Function to handle button click
  const handleReportIssue = () => {
    navigate('/report'); // Navigates to ReportIssue page
  };

  return (
    <div className="reports-container">
      <h2>Your Reports</h2>
      <p>Below are the reports you've submitted regarding road conditions:</p>

      <div className="reports-list">
        {reportsList.map((report) => (
          <div key={report.id} className="report-item">
            <p><strong>Location:</strong> <br/> {report.location}</p>
            <p><strong>Report:</strong><br/> {report.feedback}</p>
            <p><strong>Date:</strong><br/> {report.date}</p>
          </div>
        ))}
      </div>

      <div className="report-button-container">
        <button className="report-button" onClick={handleReportIssue}>Report New Issue</button>
      </div>
    </div>
  );
};

export default Reports;
