import React, { useState } from 'react';

import './RegistrationForm.css';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      // Passwords don't match, handle error
      return;
    }

    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 201) {
      setShowConfirmation(true);
    } else {
      // Handle registration errors
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
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
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <i
          className={`eye-icon ${showPassword ? 'visible' : ''}`}
          onClick={togglePasswordVisibility}
        ></i>
      </div>
      <button className="register-button" onClick={handleRegistration}>
        Register
      </button>
      {showConfirmation && (
        <div className="confirmation-message">
          Thank you for joining us! Please login to continue.
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
