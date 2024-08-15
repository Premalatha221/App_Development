import React from 'react';
import { Link } from 'react-router-dom';
import './done.css';
import CommonNav from './commonNav';

function PaymentDone() {
  const gifUrl = 'https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif'; // Replace with your desired GIF URL

  return (
    <div>
      <CommonNav />
      <div className="payment-done-container">
        <div className="payment-done-box">
        
          <img src={gifUrl} alt="Success" width='200px'  height='100px'/>
          <h1>Payment Done!</h1>
          <p>Thank you for completing your secure online payment.</p>
          <p>Have a great day!</p>
          <Link to="/feedback">
            <button>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentDone;
