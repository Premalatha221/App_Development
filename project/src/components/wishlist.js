import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonNav from './commonNav';
// Import the Nav component

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...cart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/ordersummary');
  };

  const handleRemoveFromWishlist = (itemId) => {
    const updatedWishlist = wishlist.filter(item => item.productId !== itemId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  const handleContinueShopping = () => {
    navigate('/navcategory'); 
  };

  return (
    <div>
      <CommonNav/>
      <div style={styles.container}>
        <h1>Wishlist</h1>
        {wishlist.length === 0 ? (
          <div style={styles.emptyWishlist}>
            <p>Your wishlist is empty</p>
            <button onClick={handleContinueShopping} style={styles.continueButton}>Continue Shopping</button>
          </div>
        ) : (
          <div style={styles.wishlistContainer}>
            {wishlist.map((item) => (
              <div key={item.productId} style={styles.productCard}>
                <img src={item.imageUrl} alt={item.productName} style={styles.productImage} />
                <div style={styles.cardContent}>
                  <h2 style={styles.productName}>{item.productName}</h2>
                  <p style={styles.productPrice}>₹ {item.productPrice}</p>
                  <div style={styles.buttonContainer}>
                    <button onClick={() => handleAddToCart(item)} style={styles.button}>Add to Cart</button>
                    <button onClick={() => handleRemoveFromWishlist(item.productId)} style={styles.button}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '16px',
    fontFamily: 'Arial, sans-serif',
  },
  wishlistContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
  productCard: {
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    width: '320px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  productImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '12px',
  },
  productName: {
    margin: '8px 0',
    fontSize: '1.2em',
  },
  productPrice: {
    margin: '8px 0',
    color: '#888',
  },
  buttonContainer: {
    display: 'flex',
    gap: '8px',
    marginTop: '12px',
  },
  button: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '0.9em',
  },
  emptyWishlist: {
    textAlign: 'center',
  },
  continueButton: {
    marginTop: '16px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#28a745',
    color: '#fff',
  }
};

export default WishlistPage;
