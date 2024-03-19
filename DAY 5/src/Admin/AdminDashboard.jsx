import React from 'react';
import '../Css/admin.css'; // Import the CSS file for styling
import Footer from '../Components/Footer';

const AdminDashboard = () => {
    const users = [
        { username: 'user1', email: 'user1@example.com' },
        { username: 'user2', email: 'user2@example.com' },
        { username: 'user3', email: 'user3@example.com' },
        { username: 'user4', email: 'user4@example.com' },
        { username: 'user5', email: 'user5@example.com' },
    ];

    return (
        <div className="admin-container">
            <div className='table'>
            <h2>User Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className='foot'>
                <Footer />
            </div>
        </div>
    );
};

export default AdminDashboard;
