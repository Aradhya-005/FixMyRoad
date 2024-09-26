import React, { useState } from 'react';

const ReportIssue = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
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
        <div style={{ textAlign: 'center' }}>
            <h2>Report an Issue</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} />
                </div>
                <div>
                    <label>Exact Location:</label>
                    <input type="text" name="elocation" value={formData.elocation} onChange={handleChange} />
                </div>
                <div>
                    <label>Issue Description:</label>
                    <textarea name="issueDescription" value={formData.issueDescription} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReportIssue;
