/**
 * Name: Armend Sinanovic  
 * Date: April 14, 2025  
 * Course: IT-302  
 * Section: 454  
 * Assignment: IT302-Project Phase 4 
 * Email: as554@njit.edu  
 */

import React, { useState, useEffect } from 'react';
import DisneyDataService from '../service/DisneyDataService';
import { Link } from 'react-router-dom';

function DisneyList() {
  const [records, setRecords] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    DisneyDataService.getAll()
      .then(response => {
        setRecords(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  const handleSearch = () => {
    DisneyDataService.findByField("filter", searchText)
      .then(response => {
        setRecords(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  };

  const handleReset = () => {
    setSearchText("");
    DisneyDataService.getAll()
      .then(response => {
        setRecords(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <div>
      <h2>Disney Records</h2>

      <div>
        <label>Search by Name:</label>
        <input
          type="text"
          className="form-control"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
        <button type="button" onClick={handleReset} style={{ marginLeft: "8px" }}>
          Reset
        </button>
      </div>

      <div>
        {records.map(record => (
          <div key={record._id}>
            <h3>{record.name}</h3>
            <p>{record.description}</p>
            <Link to={`/as554_disney/${record._id}`}>View Details</Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisneyList;
