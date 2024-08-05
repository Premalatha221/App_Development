import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './productpage.css';

const products = {
  
  toys: [
    { id: 1, name: 'Pickachu', price: '₹1699', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a11da411f6e22d3157a64a/1-480x480.jpg' },
    { id: 2, name: 'Baby Horse', price: '₹499', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e828cc477b6b2e82642bc/2-480x480.jpg' },
    { id: 3, name: 'Glitter Eye Penguin', price: '₹200', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e4bec408f645239ddf343/1-480x480.jpg' },
    { id: 4, name: 'Barbie Doll ', price: '₹999', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66744adc48492ea61a10511f/hth66-480x480.jpg' },
    { id: 5, name: 'Teddy Bear', price: '₹250', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63dd0f5c02344401380a8c6e/mp0082d-480x480.jpg' },
    { id: 6, name: 'Bunny Soft Dog', price: '₹199', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6230ce943de8faff37764f8a/mp0054a-480x480.jpg' },
    { id: 25, name: ' Paws Mini Lab 8', price: '₹250', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e3b7918a64da32d2bfcab/2-480x480.jpg' },
    { id: 26, name: ' Cuddlekins Jumbo, Mom and Puppies ', price: '₹4000', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6631f59d2c94b4944ce22ce3/27480-640x640.jpg' },
    { id: 27, name: 'Jerry', price: '₹899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/659fbeb42d0a0c69804b8e7c/ldd10007-480x480.jpeg' },
    { id: 28, name: 'Mirada Tom ', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65cdc5f95112340de942d600/10908-480x480.jpg' },
    { id: 29, name: 'Mirada Teddy ', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63dd07ae02344401380787b6/3-480x480.jpg' },
    { id: 30, name: 'Mirada', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662d209a06c45318de0a20ee/mp0763-480x480.jpg' },
  ],
  games: [
    { id: 7, name: 'Wild  Mini Bighorn Sheep', price: '₹820', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/659597801c8beeb08266faf4/tm130002-480x480.jpg' },
    { id: 8, name: 'Dream Boy Retro Handheld Game', price: '₹895', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6663591b9d85c1a0c0d4da2b/se7621-640x640.jpeg' },
    { id: 9, name: 'Video Game', price: '₹690', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/663346807184ded045547ce0/2-640x640.jpg' },
    { id: 10, name: 'Mattel Blokus Classic Game', price: '₹615', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/665c4b43e8ac04cc0232124a/blokus-640x640.jpg' },
    { id: 11, name: 'Portable Pocket Puzzle', price: '₹783', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/659597801c8beeb08266faf4/tm130002-640x640.jpg' },
    { id: 12, name: 'Truzo Tumble Tower', price: '₹610', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/664a4031c0a0d8ba235e1cf2/truzo-tumble-tower_-640x640.jpg' },
    { id: 31, name: 'Marvel Thor', price: '₹820', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62a238a0436314404105a5f7/buildables-thor-2-640x640.jpg' },
    { id: 32, name: 'Scentos Activity Fun ', price: '₹785', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65f9b3b2b9b270f72ef7f1bb/1-640x640.jpg' },
    { id: 33, name: 'Tasty Foods Scissors', price: '₹860', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/653413f358db7e8cd456dc34/9612200-480x480.jpg' },
    { id: 34, name: 'Smartivity Crazy Wheels', price: '₹915', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62764c99383f535d0ab49da4/smartivity-crazy-wheels-640x640.jpg' },
    { id: 35, name: 'Marble Run 2', price: '₹657', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66269e2e6ee6c5c8a135d81f/blix-marble-run-2-640x640.jpg' },
    { id: 36, name: 'Chess Set', price: '₹157', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/622f8fdd0dec8455e9f18234/1-640x640.png' },
  ],
  education: [
    { id: 13, name: 'Dreamland Publications', price: '₹108', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a5880b35f70da790bb0ac/9789388416399_01-1-640x640.jpg' },
    { id: 14, name: 'Dreamland Publications 201', price: '₹588', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a4adbb35f70da7909ef8e/9789388416375_01-1-640x640.jpg' },
    { id: 15, name: 'Science Encyclopedia', price: '₹267', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/666c2b9cdb861478048ed65e/9789395588355_1-480x480.jpg' },
    { id: 16, name: 'Advanced Activity', price: '₹171', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a3f460cc58168d19c9b36c/2-480x480.jpg' },
    { id: 17, name: 'Touch and Feel', price: '₹440', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a3787e6a69d1c49440aa47/9789350892626_1-1-480x480.jpg' },
    { id: 18, name: 'First Padded Book', price: '₹650', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a4a43a1358d64dd9db982/9789394767591_1-scaled-1-480x480.jpg' },
    { id: 37, name: ' My First Pizza', price: '₹300', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6418a68613536af8f19a5d90/funskool-giggles-my-first-pizza-2-480x480.jpeg' },
    { id: 38, name: 'Story Book', price: '₹215', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64b6de803e1c4e3a26bc3258/shifu53-480x480.jpg' },
    { id: 39, name: 'Word Book', price: '₹355', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64b686a55acce13218105875/shifu057-5-480x480.webp' },
    { id: 40, name: 'Sudoku', price: '₹249', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6522ee56457333c2583ed7ff/toykraft-magnetic-sudoku-transport-4x4-sudoku-puzzle-480x480.png' },
    { id: 41, name: 'Tangram', price: '₹289', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6522f4632551dd46a0119664/toykraft-magnetic-tangram-junior-magnetic-tile-puzzle-game-480x480.png' },
    { id: 42, name: 'Sudoku', price: '₹232', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6522f1d2147247470df53e2b/toykraft-magnetic-sudoku-farm-6x6-sudoku-puzzle-480x480.png' },
  ],
};

const ProductPage = () => {
  const [category, setCategory] = useState('toys');
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [likedItems, setLikedItems] = useState(new Set());
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (likedItems.has(product.id)) {
        // Remove from wishlist
        const updatedWishlist = prevWishlist.filter(item => item.id !== product.id);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setLikedItems(prevLiked => {
          const updatedLiked = new Set(prevLiked);
          updatedLiked.delete(product.id);
          return updatedLiked;
        });
        showNotification(`${product.name} removed from wishlist!`);
        return updatedWishlist;
      } else {
        // Add to wishlist
        const updatedWishlist = [...prevWishlist, product];
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setLikedItems(prevLiked => {
          const updatedLiked = new Set(prevLiked);
          updatedLiked.add(product.id);
          return updatedLiked;
        });
        showNotification(`${product.name} added to wishlist!`);
        return updatedWishlist;
      }
    });
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
    showNotification(`${product.name} added to cart!`, true);
  };

  const handleBuy = (product) => {
    if (window.confirm(`Are you sure you want to buy ${product.name}?`)) {
      handleAddToCart(product);
    }
  };

  const showNotification = (message, navigateToCart = false) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
      if (navigateToCart) {
        navigate('/ordersummary');
      }
    }, 2000);
  };

  return (
    <div className="product-page">
      <div className="category-links">
        <button className={`category-button ${category === 'toys' ? 'active' : ''}`} onClick={() => handleCategoryChange('toys')}>Toys</button>
        <button className={`category-button ${category === 'games' ? 'active' : ''}`} onClick={() => handleCategoryChange('games')}>Games</button>
        <button className={`category-button ${category === 'education' ? 'active' : ''}`} onClick={() => handleCategoryChange('education')}>Education</button>
      </div>
      <div className="product-grid">
        {products[category].map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-actions">
              <FaHeart
                className={`icon ${likedItems.has(product.id) ? 'liked' : ''}`}
                onClick={() => handleAddToWishlist(product)}
              />
              <FaShoppingCart className="icon" onClick={() => handleAddToCart(product)} />
              <button className="buy-button" onClick={() => handleBuy(product)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
      {notification.show && (
        <div className="notification">
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
