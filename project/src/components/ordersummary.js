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

  const calculateTotal = () => {
    return cart.reduce((acc, product) => {
      const price = parseFloat(product.productPrice) || 0;
      return acc + price * (product.quantity || 1);
    }, 0);
  };

  if (cart.length === 0) {
    return (
      <div style={styles.emptyCartContainer}>
        <h2>Your cart is empty</h2>
        <button onClick={handleContinueShopping} style={styles.continueShoppingButton}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div>
      <CommonNav />
      <div style={styles.container}>
        <h2 style={styles.title}>Cart Summary</h2>
        <div style={styles.summaryContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>#</th>
                <th style={styles.tableHeader}>Item</th>
                <th style={styles.tableHeader}>Qty</th>
                <th style={styles.tableHeader}>Price</th>
                <th style={styles.tableHeader}>Item Total</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => {
                const price = parseFloat(product.productPrice) || 0;
                const itemTotal = price * (product.quantity || 1);
                return (
                  <tr key={index}>
                    <td style={styles.tableCell}>{index + 1}</td>
                    <td style={styles.tableCell}>
                      <div style={styles.itemInfo}>
                        <img src={product.imageUrl} alt={product.productName} style={styles.itemImage} />
                        <span>{product.productName}</span>
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.quantityContainer}>
                        <button onClick={() => handleDecrement(index)} style={styles.quantityButton}>-</button>
                        <span style={styles.quantity}>{product.quantity || 1}</span>
                        <button onClick={() => handleIncrement(index)} style={styles.quantityButton}>+</button>
                      </div>
                    </td>
                    <td style={styles.tableCell}>{`₹${price.toFixed(2)}`}</td>
                    <td style={styles.tableCell}>{`₹${itemTotal.toFixed(2)}`}</td>
                    <td style={styles.tableCell}>
                      <button onClick={() => handleRemove(index)} style={styles.removeButton}>Remove</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={styles.couponContainer}>
            <h3>Have Discount Coupon?</h3>
            <div style={styles.couponInputContainer}>
              <input
                type="text"
                value={couponCode}
                onChange={handleCouponCodeChange}
                placeholder="Enter Coupon Code"
                style={styles.couponInput}
              />
              <button onClick={handleApplyCoupon} style={styles.applyCouponButton}>
                Apply Coupon
              </button>
            </div>
            {couponMessage && <p>{couponMessage}</p>}
            <p style={styles.infoText}>*Free Shipping over all orders above Rs.999*</p>
            <p style={styles.infoText}>*Cash on delivery available for all orders below Rs.5000*</p>
          </div>
          <div style={styles.footer}>
            <div>
              <p><strong>Sub Total:</strong> ₹{calculateTotal().toFixed(2)}</p>
              <p><strong>Total:</strong> ₹{calculateTotal().toFixed(2)}</p>
            </div>
            <div>
              <button onClick={handleContinueShopping} style={styles.continueShoppingButton}>
                Continue Shopping
              </button>
              <button onClick={handlePlaceOrder} style={styles.placeOrderButton}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: 'white',
    minHeight: '100vh',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  summaryContainer: {
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 20px #c3f7f3',
  },
  table: {
    width: '100%',
    marginBottom: '20px',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'center',
  },
  itemInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  itemImage: {
    width: '50px',
    marginRight: '10px',
  },
  quantityContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButton: {
    padding: '5px',
    color: 'black',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
  },
  quantity: {
    margin: '0 10px',
  },
  removeButton: {
    padding: '5px',
    backgroundColor: '#f44336',
    color: 'white',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
  },
  couponContainer: {
    marginBottom: '20px',
  },
  couponInputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  couponInput: {
    padding: '10px',
    flexGrow: 1,
    marginRight: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  },
  applyCouponButton: {
    padding: '10px 20px',
    backgroundColor: '#ffcc00',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  infoText: {
    marginTop: '10px',
    color: '#666',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  continueShoppingButton: {
    padding: '10px 20px',
    backgroundColor: '#ffcc00',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  placeOrderButton: {
    padding: '10px 20px',
    backgroundColor: '#ffcc00',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  emptyCartContainer: {
    padding: '20px',
    backgroundColor: 'white',
    minHeight: '100vh',
    textAlign: 'center',
  },
};

export default OrderSummaryPage;
