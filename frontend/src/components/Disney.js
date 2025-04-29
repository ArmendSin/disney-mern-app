/**
 * Name: Armend Sinanovic  
 * Date: April 27, 2025  
 * Course: IT-302  
 * Section: 454  
 * Assignment: IT302-Project Phase 5 
 * Email: as554@njit.edu  
 */

import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import DisneyDataService from '../service/DisneyDataService';

function Disney({ user }) {
  const { id } = useParams();
  const location = useLocation();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    DisneyDataService.get(id)
      .then(response => {
        setRecord(response.data);
        setLoading(false);
      })
      .catch(e => {
        console.error("Error fetching record:", e);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id, location]); 

  if (loading) return <p>Loading...</p>;
  if (!record) return <p>No record found.</p>;

  return (
    <div>
      <h2>{record.name || "Unnamed Character"}</h2>
      <p><strong>ID:</strong> {record._id}</p>
      {record.description && <p><strong>Description:</strong> {record.description}</p>}
      {record.role && <p><strong>Role:</strong> {record.role}</p>}

      {user ? (
        <div>
          <p><em>Viewing as: {user.name || user}</em></p>
          <Link to={`/as554_disney/${record._id}/feedback`}>Add Feedback</Link>
        </div>
      ) : (
        <p><em>Viewing as: guest</em></p>
      )}

      <div style={{ marginTop: "20px" }}>
        <h3>Feedback</h3>
        {record.feedback && record.feedback.length > 0 ? (
          <ul>
            {record.feedback.map((fb, index) => (
              <li key={index}>
                <strong>{fb.user_name || "Anonymous"}</strong>: {fb.text || "(No Comment)"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No feedback yet.</p>
        )}
      </div>
    </div>
  );
}

export default Disney;
