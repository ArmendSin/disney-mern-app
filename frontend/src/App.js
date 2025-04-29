/**
 * Name: Armend Sinanovic  
 * Date: April 28, 2025  
 * Course: IT-302  
 * Section: 454  
 * Assignment: IT302-Project Phase 5 
 * Email: as554@njit.edu  
 */

import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DisneyList from './components/DisneyList';
import Disney from './components/Disney';
import Login from './components/Login';           // <-- added
import AddFeedback from './components/AddFeedback'; // <-- added

function App() {
  const [user, setUser] = useState(null);

  const login = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <div>
      <nav>
        <Link to="/as554_disney">Home</Link> |{" "}
        <Link to="/as554_disney">Disney</Link> |{" "}
        {user ? (
          <button onClick={() => setUser(null)}>Logout</button>
        ) : (
          <Link to="/as554_login">
            <button>Login</button>
          </Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<DisneyList />} />
        <Route path="/as554_disney" element={<DisneyList />} />
        <Route path="/as554_disney/:id" element={<Disney user={user} />} />
        <Route path="/as554_login" element={<Login login={login} />} /> {/* <-- added */}
        <Route path="/as554_disney/:id/feedback" element={<AddFeedback user={user} />} /> {/* <-- added */}
      </Routes>
    </div>
  );
}

export default App;
