import React, { useState } from 'react';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneno: '',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/feedform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Feedback submitted successfully!');
                console.log(data);
            } else {
                alert('Error submitting feedback');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Submit Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone No:</label>
                    <input type="text" name="phoneno" value={formData.phoneno} onChange={handleChange} required />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange}  required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
