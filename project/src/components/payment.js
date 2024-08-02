import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonNavbar from './commonNavbar';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  const validateInput = () => {
    if (paymentMethod === 'Debit Card') {
      if (!cardNumber || cardNumber.length !== 13) {
        alert('Card number must be 13 digits long.');
        return false;
      }
      if (!cvv || cvv.length !== 3) {
        alert('CVV must be 3 digits long.');
        return false;
      }
      if (!/^\d{2}\/\d{4}$/.test(expiryDate)) {
        alert('Expiry date must be in MM/YYYY format.');
        return false;
      }
    }
    if (paymentMethod === 'UPI' && (!upiId || !/^[\w.-]+@[\w.-]+$/.test(upiId))) {
      alert('UPI ID must be in proper format.');
      return false;
    }
    return true;
  };

  const handlePayment = (event) => {
    event.preventDefault(); // Prevent form submission
    if (validateInput()) {
      alert(`Proceeding with ${paymentMethod} payment`);
      navigate('/done'); // Navigate to /done page
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("https://png.pngtree.com/background/20210711/original/pngtree-children-s-day-blue-blue-sky-white-clouds-cartoon-background-picture-image_1127399.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <CommonNavbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
           // Slightly transparent background for content area
          boxShadow: '0 0 50px #c3f7f3',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '900px',
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '0 0 50px #c3f7f3',
          }}
        >
          {/* Card Image Section */}
          <div
            style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <img
              src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126088.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722384000&semt=ais_hybrid"
              alt="Card"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }}
            />
          </div>

          {/* Payment Form Section */}
          <div style={{ flex: '2', padding: '20px' }}>
            <h2 style={{ marginBottom: '20px' }}>Payment Options</h2>
            <form onSubmit={handlePayment}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                  Select Payment Method:
                </label>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="radio"
                      id="debit-card"
                      name="payment-method"
                      value="Debit Card"
                      checked={paymentMethod === 'Debit Card'}
                      onChange={() => setPaymentMethod('Debit Card')}
                      style={{ marginRight: '10px' }}
                    />
                    <label htmlFor="debit-card">Debit Card</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="radio"
                      id="net-banking"
                      name="payment-method"
                      value="Net Banking"
                      checked={paymentMethod === 'Net Banking'}
                      onChange={() => setPaymentMethod('Net Banking')}
                      style={{ marginRight: '10px' }}
                    />
                    <label htmlFor="net-banking">Net Banking</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="radio"
                      id="upi"
                      name="payment-method"
                      value="UPI"
                      checked={paymentMethod === 'UPI'}
                      onChange={() => setPaymentMethod('UPI')}
                      style={{ marginRight: '10px' }}
                    />
                    <label htmlFor="upi">UPI</label>
                  </div>
                </div>
              </div>

              {paymentMethod === 'UPI' && (
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '10px' }}>
                    UPI ID
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="Enter UPI ID"
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      padding: '8px',
                      borderRadius: '3px',
                      border: '1px solid #ccc',
                    }}
                  />
                </div>
              )}

              {paymentMethod === 'Debit Card' && (
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ marginBottom: '15px' }}>Enter Debit Card Details</h3>
                  <label style={{ display: 'block', marginBottom: '10px' }}>
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Enter 13-digit card number"
                    maxLength="13"
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      padding: '8px',
                      borderRadius: '3px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <label
                    style={{
                      display: 'block',
                      marginTop: '15px',
                      marginBottom: '10px',
                    }}
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YYYY"
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      padding: '8px',
                      borderRadius: '3px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <label
                    style={{
                      display: 'block',
                      marginTop: '15px',
                      marginBottom: '10px',
                    }}
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="3-digit CVV"
                    maxLength="3"
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      padding: '8px',
                      borderRadius: '3px',
                      border: '1px solid #ccc',
                    }}
                  />
                </div>
              )}

              {paymentMethod === 'Net Banking' && (
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ marginBottom: '15px' }}>Select Your Bank</h3>
                  <select
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      padding: '8px',
                      borderRadius: '3px',
                      border: '1px solid #ccc',
                    }}
                  >
                    <option>SBI</option>
                    <option>Canara</option>
                    <option>HDFC</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={!paymentMethod}
                style={{
                  padding: '10px',
                  backgroundColor: '#2874f0',
                  color: 'white',
                  borderRadius: '3px',
                  border: 'none',
                  cursor: paymentMethod ? 'pointer' : 'not-allowed',
                }}
              >
                Proceed to Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
