import React, { useState, useEffect } from 'react';
import './ViewComplaints.css'; // Import CSS file for styling

const ViewComplaints: React.FC = () => {
    const [complaints, setComplaints] = useState<{ id: number; name: string; roomNo: string; complaint: string; resolved: boolean }[]>([]);
    const [selectedComplaints, setSelectedComplaints] = useState<number[]>([]);
    const [showSubmit, setShowSubmit] = useState<boolean>(false);

    useEffect(() => {
        // Initialize complaints from localStorage or a database
        const storedComplaints = localStorage.getItem('complaints');
        if (storedComplaints) {
            setComplaints(JSON.parse(storedComplaints));
        }
    }, []);

    const handleResolve = (id: number) => {
        const updatedComplaints = complaints.map(c => {
            if (c.id === id) {
                return { ...c, resolved: !c.resolved };
            }
            return c;
        });
        setComplaints(updatedComplaints);
        localStorage.setItem('complaints', JSON.stringify(updatedComplaints));
        setSelectedComplaints(selectedComplaints.filter(c => c !== id));
        setShowSubmit(false);
    };

    const handleSelect = (id: number) => {
        if (selectedComplaints.includes(id)) {
            setSelectedComplaints(selectedComplaints.filter(c => c !== id));
        } else {
            setSelectedComplaints([...selectedComplaints, id]);
        }
        setShowSubmit(selectedComplaints.length === 0 ? true : false);
    };

    const handleSubmit = () => {
        const updatedComplaints = complaints.filter(c => !selectedComplaints.includes(c.id));
        setComplaints(updatedComplaints);
        localStorage.setItem('complaints', JSON.stringify(updatedComplaints));
        setSelectedComplaints([]);
        setShowSubmit(false);
    };

    return (
        <div className="complaint-list">
            <h2>All Complaints</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Room Number</th>
                        <th>Complaint</th>
                        <th>Resolve</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map((c, index) => (
                        <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.roomNo}</td>
                            <td>{c.complaint}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedComplaints.includes(c.id)}
                                    onChange={() => handleSelect(c.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="submit-button-container">
                {showSubmit && <button onClick={handleSubmit}>Submit</button>}
            </div>
        </div>
    );
};

export default ViewComplaints;
