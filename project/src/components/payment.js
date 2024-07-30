import React, { useState } from 'react';
import './payment.css';
import { Link } from 'react-router-dom';

function PaymentPage() {
  const [activeMethod, setActiveMethod] = useState('first-credit-card');

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="back">
      <div className="first-container">
        <div className="first-payment-methods">
          <h2>Select Payment Method</h2>
          <div className="first-methods">
            <div
              className={`first-method ${activeMethod === 'first-credit-card' ? 'first-active' : ''}`}
              onClick={() => setActiveMethod('first-credit-card')}
            >
              Credit Card
            </div>
            <div
              className={`first-method ${activeMethod === 'first-net-banking' ? 'first-active' : ''}`}
              onClick={() => setActiveMethod('first-net-banking')}
            >
              Net Banking
            </div>
            <div
              className={`first-method ${activeMethod === 'first-paypal' ? 'first-active' : ''}`}
              onClick={() => setActiveMethod('first-paypal')}
            >
              PayPal
            </div>
            <div
              className={`first-method ${activeMethod === 'first-debit-card' ? 'first-active' : ''}`}
              onClick={() => setActiveMethod('first-debit-card')}
            >
              Debit Card
            </div>
          </div>
        </div>

        {activeMethod === 'first-credit-card' && (
          <form className="first-payment-form" onSubmit={handleSubmit}>
            <h2>Credit Card Info</h2>
            <label htmlFor="cardname">Name on Card</label>
            <input type="text" id="cardname" name="cardname" required />

            <label htmlFor="cardnumber">Card Number</label>
            <input type="text" id="cardnumber" name="cardnumber" required />

            <div className="first-card-details">
              <div>
                <label htmlFor="expiration">Expiration</label>
                <input type="text" id="expiration" name="expiration" placeholder="MM / YY" required />
              </div>
              <div>
                <label htmlFor="cvv">CVV Number</label>
                <input type="text" id="cvv" name="cvv" required />
              </div>
            </div>

            <div className="first-terms">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
            </div>

            <Link to="/done">
              <button type="submit">Submit</button>
            </Link>
          </form>
        )}

        {activeMethod === 'first-net-banking' && (
          <div className="first-net-banking-content">
            <h2>Net Banking Info</h2>
            <p>Choose your bank from the list below and proceed with the payment.</p>
            {/* Add additional content and options for Net Banking */}
          </div>
        )}

        {activeMethod === 'first-paypal' && (
          <div className="first-paypal-content">
            <h2>PayPal Info</h2>
            <p>Log in to your PayPal account to complete the payment.</p>
            {/* Add additional content and options for PayPal */}
          </div>
        )}

        {activeMethod === 'first-debit-card' && (
          <form className="first-payment-form" onSubmit={handleSubmit}>
            <h2>Debit Card Info</h2>
            <label htmlFor="cardname">Name on Card</label>
            <input type="text" id="cardname" name="cardname" required />

            <label htmlFor="cardnumber">Card Number</label>
            <input type="text" id="cardnumber" name="cardnumber" required />

            <div className="first-card-details">
              <div>
                <label htmlFor="expiration">Expiration</label>
                <input type="text" id="expiration" name="expiration" placeholder="MM / YY" required />
              </div>
              <div>
                <label htmlFor="cvv">CVV Number</label>
                <input type="text" id="cvv" name="cvv" required />
              </div>
            </div>

            <div className="first-terms">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
            </div>

            <Link to="/done">
              <button type="submit">Submit</button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}

export default PaymentPage;
