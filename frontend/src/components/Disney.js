/**
 * Name: Armend Sinanovic  
 * Date: April 14, 2025  
 * Course: IT-302  
 * Section: 454  
 * Assignment: IT302-Project Phase 4 
 * Email: as554@njit.edu  
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisneyDataService from '../service/DisneyDataService';

function Disney({ user }) {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DisneyDataService.get(id)
      .then(response => {
        setRecord(response.data);
        setLoading(false);
      })
      .catch(e => {
        console.error("Error fetching record:", e);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!record) return <p>No record found.</p>;

  return (
    <div>
      <h2>{record.name || "Unnamed Character"}</h2>
      <p><strong>ID:</strong> {record._id}</p>
      {record.description && <p><strong>Description:</strong> {record.description}</p>}
      {record.role && <p><strong>Role:</strong> {record.role}</p>}
      {user && <p><em>Viewing as: {user}</em></p>}
    </div>
  );
}

export default Disney;
