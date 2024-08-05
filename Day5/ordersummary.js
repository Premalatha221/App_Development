import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CommonNav from './commonNav';

const OrderSummaryPage = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleContinueShopping = () => {
    navigate('/navcategory');
  };

  const handlePlaceOrder = () => {
    navigate('/address');
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
     
      setCouponMessage('Applied successfully');
    } else {
      setCouponMessage('Please enter a coupon code');
    }
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
    if (e.target.value.trim() === '') {
      setCouponMessage('');
    }
  };

  if (cart.length === 0) {
    return (
      <div>
        
        <div style={{ padding: '20px', backgroundColor: 'white', minHeight: '100vh', textAlign: 'center' }}>
          <h2>Your cart is empty</h2>
          <button onClick={handleContinueShopping} style={{ padding: '10px 20px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const calculateTotal = () => {
    return cart.reduce((acc, product) => {
      const price = parseFloat(product.price.replace('₹', '')) || 0;
      return acc + price * (product.quantity || 1);
    }, 0);
  };

  return (
    <div>
      <CommonNav/>
      <div style={{ padding: '20px', backgroundColor: 'white', minHeight: '100vh' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Cart Summary</h2>
        <div style={{ maxWidth: '900px', margin: 'auto', backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 20px #c3f7f3' }}>
          <table style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>#</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Item</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Qty</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Price</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Item Total</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => {
                const price = parseFloat(product.price.replace('₹', '')) || 0;
                const itemTotal = price * (product.quantity || 1);
                return (
                  <tr key={index}>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{index + 1}</td>
                    <td style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                      <img src={product.image} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
                      <span>{product.name}</span>
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button onClick={() => handleDecrement(index)} style={{ padding: '5px', color: 'black', borderRadius: '3px', border: 'none', cursor: 'pointer' }}>-</button>
                        <span style={{ margin: '0 10px' }}>{product.quantity || 1}</span>
                        <button onClick={() => handleIncrement(index)} style={{ padding: '5px', color: 'black', borderRadius: '3px', border: 'none', cursor: 'pointer' }}>+</button>
                      </div>
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{`₹${price.toFixed(2)}`}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{`₹${itemTotal.toFixed(2)}`}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                      <button onClick={() => handleRemove(index)} style={{ padding: '5px', backgroundColor: '#f44336', color: 'white', borderRadius: '3px', border: 'none', cursor: 'pointer' }}>Remove</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ marginBottom: '20px' }}>
            <h3>Have Discount Coupon?</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                value={couponCode}
                onChange={handleCouponCodeChange}
                placeholder="Enter Coupon Code"
                style={{ padding: '10px', flexGrow: 1, marginRight: '10px', borderRadius: '3px', border: '1px solid #ccc' }}
              />
              <button onClick={handleApplyCoupon} style={{ padding: '10px 20px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                Apply Coupon
              </button>
            </div>
            {couponMessage && <p>{couponMessage}</p>}
            <p style={{ marginTop: '10px', color: '#666' }}>*Free Shipping over all orders above Rs.999*</p>
            <p style={{ color: '#666' }}>*Cash on delivery available for all orders below Rs.5000*</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div>
              <br></br>
              <p><strong>Sub Total:</strong> ₹{calculateTotal().toFixed(2)}</p>
              <p><strong>Total:</strong> ₹{calculateTotal().toFixed(2)}</p>
            </div>
            <div>
              <button onClick={handleContinueShopping} style={{ padding: '10px 20px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '10px'}}>
                Continue Shopping
              </button>
              <button onClick={handlePlaceOrder} style={{ padding: '10px 20px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
