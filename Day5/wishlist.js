import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    // Remove item from wishlist
    const updatedWishlist = wishlist.filter(item => item.id !== itemId);
    
    // Update local storage
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
    // Update state
    setWishlist(updatedWishlist);
  };

  const handleContinueShopping = () => {
    navigate('/navcategory'); 
  };

  return (
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
            <div key={item.id} style={styles.productCard}>
              <img src={item.image} alt={item.name} style={styles.productImage} />
              <div style={styles.cardContent}>
                <h2 style={styles.productName}>{item.name}</h2>
                <p style={styles.productPrice}>{item.price}</p>
                <div style={styles.buttonContainer}>
                  <button onClick={() => handleAddToCart(item)} style={styles.button}>Add to Cart</button>
                  <button onClick={() => handleRemoveFromWishlist(item.id)} style={styles.button}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
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
    backgroundColor: '#ffdd01',
    color: 'black',
    cursor: 'pointer',
    fontSize: '0.9em',
    transition: 'background-color 0.3s ease',
  },
  emptyWishlist: {
    textAlign: 'center',
    marginTop: '20px',
  },
  continueButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  },
};

export default WishlistPage;
