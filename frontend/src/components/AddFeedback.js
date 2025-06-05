import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DisneyDataService from '../service/DisneyDataService';

function AddFeedback({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const saveFeedback = () => {
    const data = {
      disneyId: parseInt(id),         
      text: feedback,
      user_name: user.name,
      user_id: user.user_id,
    };
  
    DisneyDataService.createFeedback(data)
      .then(response => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.error("Error creating feedback:", e);
      });
  };
  

  return (
    <div>
      <h2>Add Feedback</h2>

      {submitted ? (
        <div>
          <h4>Feedback submitted successfully!</h4>
          <button onClick={() => navigate(`/as554_disney/${id}`)}>
            Back to Disney Details
          </button>
        </div>
      ) : (
        <div className="submit-form">
          <div className="form-group">
            <label htmlFor="feedback">Comment</label>
            <textarea
              className="form-control"
              id="feedback"
              required
              value={feedback}
              onChange={handleInputChange}
              name="feedback"
              placeholder="Write your feedback here..."
              rows="4"
            />
          </div>

          <button onClick={saveFeedback} style={{ marginTop: "10px" }}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default AddFeedback;
