import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonNavbar from './commonNavbar';

const OrderSummaryPage= () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const product = {
    name: 'Airfix Hawker Hurricane Mk.I 1:72',
    rate: 899, // Rate per unit in INR
    image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/663134119b3d095c6652cb08/f1396-480x480.jpeg', // Placeholder image URL
    discount: 0 // Assuming no discount
  };

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const totalAmount = (product.rate * quantity) - product.discount;

  const handleContinueShopping = () => {
    // Add logic to navigate back to shopping
    navigate('/navcategory');
  };

  const handlePlaceOrder = () => {
    // Add logic to navigate to the order placing page
    navigate('/payment');
  };

  return (
    <div>
      <CommonNavbar/>
    <div style={{ padding: '20px', backgroundColor: 'white', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Cart Summary</h2>
      <div style={{ maxWidth: '900px', margin: 'auto', backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: ' 0 0 20px #c3f7f3' }}>
        <table style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>#</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Item</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Qty</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Price</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Item Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', textAlign: 'center' }}>1</td>
              <td style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                <img src={product.image} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
                <span>{product.name}</span>
              </td>
              <td style={{ padding: '10px', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button onClick={handleDecrement} style={{ padding: '5px', backgroundColor: '#f44336', color: 'white', borderRadius: '3px', border: 'none', cursor: 'pointer' }}>-</button>
                  <span style={{ margin: '0 10px' }}>{quantity}</span>
                  <button onClick={handleIncrement} style={{ padding: '5px', backgroundColor: '#4caf50', color: 'white', borderRadius: '3px', border: 'none', cursor: 'pointer' }}>+</button>
                </div>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                  <a href="#" style={{ color: '#2874f0', textDecoration: 'none' }}>Add to Wishlist</a>
                  <br />
                  <a href="#" style={{ color: '#2874f0', textDecoration: 'none' }}>Remove</a>
                </div>
              </td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{`₹${product.rate}`}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{`₹${totalAmount}`}</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginBottom: '20px' }}>
          <h3>Have Discount Coupon?</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Enter Coupon Code" style={{ padding: '10px', flexGrow: 1, marginRight: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
            <button style={{ padding: '10px 20px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Apply!</button>
          </div>
          <p style={{ marginTop: '10px', color: '#666' }}>*Free Shipping over all orders above Rs.999*</p>
          <p style={{ color: '#666' }}>*Cash on delivery available for all orders below Rs.5000*</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p><strong>Sub Total:</strong> ₹{totalAmount}</p>
            <p><strong>Total:</strong> ₹{totalAmount}</p>
          </div>
          <div>
            <button onClick={handleContinueShopping} style={{ padding: '10px 20px', marginRight: '10px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Continue Shopping</button>
            <button onClick={handlePlaceOrder} style={{ padding: '10px 20px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default OrderSummaryPage;
