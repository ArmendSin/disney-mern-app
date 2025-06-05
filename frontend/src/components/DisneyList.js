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
    <div className="container" style={{ padding: "20px" }}>
      <h2>Disney Records</h2>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "8px" }}>Search by Name:</label>
        <input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          style={{ padding: "5px", marginRight: "10px", width: "200px" }}
        />
        <button type="button" onClick={handleSearch} style={{ marginRight: "8px" }}>
          Search
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {records.map(record => (
          <div 
            key={record._id} 
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              width: "300px",
              boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
              backgroundColor: "white"
            }}
          >
            <h3>{record.name}</h3>
            {record.description && <p>{record.description.substring(0, 100)}...</p>}
            <Link to={`/as554_disney/${record._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisneyList;
