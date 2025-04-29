/**
 * Name: Armend Sinanovic  
 * Date: April 28, 2025  
 * Course: IT-302  
 * Section: 454  
 * Assignment: IT302-Project Phase 5 
 * Email: as554@njit.edu  
 */

import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api/v1/as554/disney`;

class DisneyDataService {
  getAll() {
    return axios.get(API_URL);
  }

  get(id) {
    return axios.get(`${API_URL}/id/${id}`);
  }

  findByField(field, value) {
    return axios.get(`${API_URL}?${field}=${value}`);
  }


  createFeedback(data) {
    return axios.post(`${API_URL}/feedback`, data);
  }

  updateFeedback(data) {
    return axios.put(`${API_URL}/feedback`, data);
  }

  deleteFeedback(id, userId) {
    return axios.delete(`${API_URL}/feedback`, {
      data: { feedback_id: id, user_id: userId }
    });
  }
}

export default new DisneyDataService();
