import React, { useState, useEffect } from 'react';
import './Grievance.css'; // Import CSS file for styling

const Grievance: React.FC = () => {
    const [complaints, setComplaints] = useState<{ name: string; roomNo: string; complaint: string; userId: string }[]>([]);
    const [name, setName] = useState('');
    const [roomNo, setRoomNo] = useState('');
    const [complaint, setComplaint] = useState('');

    useEffect(() => {
        const storedComplaints = localStorage.getItem('complaints');
        if (storedComplaints) {
            setComplaints(JSON.parse(storedComplaints));
        }
    }, []);

    const currentUser = { id: '1' }; // Example: Assuming user with ID 1 is logged in

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!name.trim() || !roomNo.trim() || !complaint.trim()) {
            return;
        }
        const newComplaint = { name, roomNo, complaint, userId: currentUser.id };
        const updatedComplaints = [...complaints, newComplaint];
        setComplaints(updatedComplaints);
        localStorage.setItem('complaints', JSON.stringify(updatedComplaints));
        console.log('Complaint submitted:', newComplaint);
        setName('');
        setRoomNo('');
        setComplaint('');
    };

    return (
        <div className="grievance-container">
            <h2 className="title">Submit Your Complaints</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    required
                    className="input-field"
                />
                <label htmlFor="roomNo">Room Number:</label>
                <input
                    type="text"
                    id="roomNo"
                    value={roomNo}
                    onChange={(event) => setRoomNo(event.target.value)}
                    placeholder="Enter your room number"
                    required
                    className="input-field"
                />
                <label htmlFor="complaint">Description of Issue:</label>
                <textarea
                    id="complaint"
                    value={complaint}
                    onChange={(event) => setComplaint(event.target.value)}
                    placeholder="Type your complaint here..."
                    required
                    className="input-field"
                ></textarea>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <div className="complaints-list">
                <h3 className="complaints-title">Your Complaints:</h3>
                {complaints.filter(c => c.userId === currentUser.id).map((c, index) => (
                    <div key={index} className="complaint">
                        <p><strong>Name:</strong> {c.name}</p>
                        <p><strong>Room Number:</strong> {c.roomNo}</p>
                        <p><strong>Complaint:</strong> {c.complaint}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grievance;
