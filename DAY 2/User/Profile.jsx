
import React, { useState } from 'react';
import '../Css/header.css'; 

const Profile = () => {
    const [showAccount, setShowAccount] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleAccount = () => {
        setShowAccount(!showAccount);
        setShowPassword(false); 
    }

    const togglePassword = () => {
        setShowPassword(!showPassword);
        setShowAccount(false); 
    }

    return (
        <div className="profile-container">
            <div className="sidebar">
                <div className="sidebar-profile">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Avatar" />
                </div>
                <div className="sidebar-links">
                    <button onClick={toggleAccount}>Account</button>
                    <button onClick={togglePassword}>Password</button>
                </div>
            </div>
            <div className="main-content">
                {showAccount && <AccountSection />}
                {showPassword && <PasswordSection />}
            </div>
        </div>
    );
}

const AccountSection = () => (
    <div className="profile-section">
        <h2>Account Settings</h2>
        <div className="profile-detail">
            <label>First Name:</label>
            <span>ACS</span>
        </div>
        <div className="profile-detail">
            <label>Last Name:</label>
            <span>sri</span>
        </div>
        <div className="profile-detail">
            <label>Email:</label>
            <span>acshaya@mail.com</span>
        </div>
        <div className="profile-detail">
            <label>Phone:</label>
            <span>9843319923</span>
        </div>
    </div>
);

const PasswordSection = () => (
    <div className="profile-section">
        <h2>Password</h2>
        <div className="password-form">
            <div className="form-group">
                <label htmlFor="current-password">Current Password:</label>
                <input type="password" id="current-password" name="current-password" />
            </div>
            <div className="form-group">
                <label htmlFor="new-password">New Password:</label>
                <input type="password" id="new-password" name="new-password" />
            </div>
            <div className="form-group">
                <label htmlFor="confirm-password">Confirm New Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" />
            </div>
            <button className="btn btn-primary">Update Password</button>
        </div>
    </div>
);

export default Profile;
