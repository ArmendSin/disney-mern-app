/**
 * Name: Armend Sinanovic  
 * Date: April 14, 2025  
 * Course: IT-302  
 * Section: 454  
 * Assignment: IT302-Project Phase 4 
 * Email: as554@njit.edu  
 */


import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DisneyList from './components/DisneyList';
import Disney from './components/Disney';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <nav>
        <Link to="/as554_disney">Home</Link> |{" "}
        <Link to="/as554_disney">Disney</Link> |{" "}
        {user ? (
          <button onClick={() => setUser(null)}>Logout</button>
        ) : (
          <button onClick={() => setUser("guest")}>Login</button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<DisneyList />} />
        <Route path="/as554_disney" element={<DisneyList />} />
        <Route path="/as554_disney/:id" element={<Disney user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
