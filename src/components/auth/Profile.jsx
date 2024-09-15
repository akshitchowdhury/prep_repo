// src/components/Profile.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Reduc/authSlice';

const Profile = () => {
    const { user, token } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    if (!user) return <p>Please log in.</p>;

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Token:</strong> {token}</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
};

export default Profile;
