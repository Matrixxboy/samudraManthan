import React from 'react';
import { useAuth } from '../../Hooks/auth/useAuth';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeProvider/Layer';
import Glass from '../../components/UI/glass/Glass'

const DashboardPage = () => {
    const theme = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{
            backgroundColor : theme.colors.background
            
        }}>
            <h2>Welcome, {user ? user.username : 'Guest'}!</h2>
            <p>This is your dashboard.</p>
            <Glass className="p-6 max-w-sm">
                <h2 className="text-xl font-bold mb-2">Glass Card</h2>
                <p>This div has a frosted glass effect.</p>
            </Glass>

            <button onClick={handleLogout} style={{ padding: '10px', marginTop: '20px' }}>
                Logout
            </button>
        </div>
    );
};

export default DashboardPage;
