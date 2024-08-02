import React from 'react';

import './done.css';
import { Link } from 'react-router-dom';
import CommonNavbar from './commonNavbar';


function PaymentDone() {
 

  

  return (
    <div>
      <CommonNavbar/>
    <div className="payment-done-container">
      <div className="payment-done-box">
        <div className="checkmark">✅</div>
        <h1>Payment Done!</h1>
        <p>Thank you for completing your secure online payment.</p>
        <p>Have a great day!</p>
        <Link to="/feedback"><button >Next</button></Link>
      </div>
    </div>
    </div>
  );
}

export default PaymentDone;
