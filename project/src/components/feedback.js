import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import CommonNavbar from './commonNavbar';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here, such as sending data to a server
    console.log('Feedback submitted:', { rating, comments });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundImage: 'url("https://img.freepik.com/premium-photo/top-view-kids-toys-frame-wooden-background-with-copy-space-educational-development-toy_427957-7259.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2>Thank you for your feedback!</h2>
      </div>
    );
  }

  return (
    <div>
        <CommonNavbar/>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        minHeight: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148901163.jpg?w=996&t=st=1722529175~exp=1722529775~hmac=9a176fcd093ed454480b436202d8d21fae8e6caa4bf84d01b78c3623b99781de")', // Background image URL

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 style={{ color: 'black', textShadow: '1px 1px 2px black' }}>Feedback</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>Rate our service:</label>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={30}
                style={{ marginRight: '10px', cursor: 'pointer' }}
                color={star <= rating ? '#ffc107' : '#e4e5e9'}
                onClick={() => handleRatingChange(star)}
              />
            ))}
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>Comments:</label>
          <textarea
            value={comments}
            onChange={handleCommentsChange}
            placeholder="Enter your comments here"
            style={{
              width: '100%',
              height: '100px',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              resize: 'none',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#2874f0',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackPage;
