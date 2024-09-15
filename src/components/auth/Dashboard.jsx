// src/components/Dashboard.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const { user } = useSelector(state => state.auth);

    if (!user) return <p>Please log in to view the dashboard.</p>;

    return (
        <div>
            <h2>Dashboard</h2>
            {user.role === 'admin' ? (
                <p>Welcome Admin! You have full access.</p>
            ) : (
                <p>Welcome {user.username}! You have limited access.</p>
            )}
        </div>
    );
};

export default Dashboard;
