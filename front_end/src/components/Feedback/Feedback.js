import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css'; // Import the CSS file for styling

const Feedbacks = () => {
  const navigate = useNavigate();

  // Hardcoded feedbacks for demonstration
  const feedbackList = [
    {
      id: 1,
      feedback: "Great job on fixing the potholes on mulayam chauraha jankipuram extension.The road feels much smoother now.",
      location: " mulayam chauraha jankipuram extension ",
      date: "2024-09-27",
    },
    {
      id: 2,
      feedback: "The road repair on near second campus university of lucknow was done quickly, but there are still small cracks visible.",
      location: "near second campus university of lucknow",
      date: "2024-09-27",
    },
  ];

  const handleReportIssue = () => {
    navigate('/feedform'); // Navigates to feedback form
  };

  return (
    <div className="feedbacks-container">
      <h2>Your Feedbacks</h2>
      <div className="feedback-list">
        {feedbackList.length > 0 ? (
          feedbackList.map((feedback) => (
            <div key={feedback.id} className="feedback-item">
              <p><strong>Feedback:</strong> <br/> {feedback.feedback}</p>
              <p><strong>Location:</strong><br/>  {feedback.location}</p>
              <p><strong>Date Submitted:</strong> <br/> {feedback.date}</p>
            </div>
          ))
        ) : (
          <p>No feedbacks to display.</p>
        )}
      </div>
      <div className="button-container">
        <button className="report-button" onClick={handleReportIssue}>
          Give feedback
        </button>
      </div>
    </div>
  );
};

export default Feedbacks;
