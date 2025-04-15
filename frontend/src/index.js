/**
 * Name: Armend Sinanovic  
 * Date: April 14, 2025  
 * Course: IT-302  
 * Section: 454  
 * Assignment: IT302-Project Phase 4 
 * Email: as554@njit.edu  
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="">
    <App />
  </BrowserRouter>
);
