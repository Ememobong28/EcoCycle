import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [showConfetti, setShowConfetti] = useState(false);

    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log('Login successful');
            setShowConfetti(true);

            // Delay navigation to the home page after 3 seconds
            setTimeout(() => {
                setShowConfetti(false);
                navigate('/');
            }, 3000);
        } else {
            // Handle login errors
        }
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            {showConfetti && <Confetti />}
            <h2>Login</h2>
            <div className="input-container">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="password-input">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i
                        className={`eye-icon ${showPassword ? 'visible' : ''}`}
                        onClick={togglePasswordVisibility}
                    ></i>
                </div>
            </div>
            {showConfetti ? (
                <div className="login-button-disabled">Logging In...</div>
            ) : (
                <button className="login-button" onClick={handleLogin}>
                    Login
                </button>
            )}
        </div>
    );
};

export default LoginForm;
