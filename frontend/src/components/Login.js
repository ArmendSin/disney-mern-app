/**
 * Name: Armend Sinanovic  
 * Date: April 27, 2025  
 * Course: IT-302  
 * Section: 454  
 * Assignment: IT302-Project Phase 4 
 * Email: as554@njit.edu  
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ login }) {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (name && userId) {
      login({ name, user_id: userId });
      navigate("/as554_disney");
    } else {
      alert("Please enter both your full name and user ID.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="form-control"
            placeholder="Enter your user ID"
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
