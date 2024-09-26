import React, { useState } from 'react';
import './ReportIssue.css'; // Importing the same CSS file for styling

const ReportIssue = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        elocation: '',
        issueDescription: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the report using FastAPI backend
        console.log('Issue Reported:', formData);
        // You can use fetch or axios to submit data to the FastAPI backend
    };

    return (
        <div className="report-issue-section">
            <form className="form" onSubmit={handleSubmit}>
                <h3>Report an Issue</h3>
                
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location of the Issue"
                    required
                />

                <label htmlFor="elocation">Exact Location</label>
                <input
                    type="text"
                    name="elocation"
                    id="elocation"
                    value={formData.elocation}
                    onChange={handleChange}
                    placeholder="Exact Location"
                    required
                />

                <label htmlFor="issueDescription">Issue Description</label>
                <textarea
                    name="issueDescription"
                    id="issueDescription"
                    rows="5"
                    value={formData.issueDescription}
                    onChange={handleChange}
                    placeholder="Describe the issue here"
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReportIssue;
