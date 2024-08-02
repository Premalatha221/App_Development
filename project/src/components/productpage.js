import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './productpage.css';
import { Link } from 'react-router-dom';

const products = {
  toys: [
    { id: 1, name: 'Pickachu', price: '₹1699', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a11da411f6e22d3157a64a/1-480x480.jpg' },
    { id: 2, name: 'Baby Horse', price: '₹499', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e828cc477b6b2e82642bc/2-480x480.jpg' },
    { id: 3, name: 'Glitter Eye Penguin', price: '₹200', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e4bec408f645239ddf343/1-480x480.jpg' },
    { id: 4, name: 'Barbie Doll ', price: '₹999', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66744adc48492ea61a10511f/hth66-480x480.jpg' },
    { id: 5, name: 'Teddy Bear', price: '₹250', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fba2a74dfc3b27b50f8379f/81vyjulszyl-sl1500-480x480.jpg' },
    { id: 6, name: 'Bunny Soft Dog', price: '₹199', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fba1e7fdd005955aecc9015/8131qygsfll-sl1500-480x480.jpg' },
    { id: 25, name: ' Paws Mini Lab 8', price: '₹250', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e3b7918a64da32d2bfcab/2-480x480.jpg' },
    { id: 26, name: ' Cuddlekins Jumbo, Mom and Puppies ', price: '₹4000', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6631f59d2c94b4944ce22ce3/27480-640x640.jpg' },
    { id: 27, name: 'Jerry', price: '₹899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6401dbe0e49e442cf0928298/w26554-wr-elk-6in-480x480.webp' },
    { id: 28, name: 'Mirada Tom ', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65cdc5f95112340de942d600/10908-480x480.jpg' },
    { id: 29, name: 'Mirada Teddy ', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63dd07ae02344401380787b6/3-480x480.jpg' },
    { id: 30, name: 'Mirada', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662d209a06c45318de0a20ee/mp0763-480x480.jpg' },
  ],
  games: [
    { id: 7, name: 'Wild  Mini Bighorn Sheep', price: '₹820', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6663580ccc4a06df3fcbc8bf/se7607-480x480.jpg' },
    { id: 8, name: 'Dream Boy Retro Handheld Game', price: '₹895', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6663591b9d85c1a0c0d4da2b/se7621-640x640.jpeg' },
    { id: 9, name: 'Video Game', price: '₹690', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/663346807184ded045547ce0/2-640x640.jpg' },
    { id: 10, name: 'Mattel Blokus Classic Game', price: '₹615', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/665c4b43e8ac04cc0232124a/blokus-640x640.jpg' },
    { id: 11, name: 'Portable Pocket Puzzle', price: '₹783', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/659597801c8beeb08266faf4/tm130002-640x640.jpg' },
    { id: 12, name: 'Truzo Tumble Tower', price: '₹610', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/664a4031c0a0d8ba235e1cf2/truzo-tumble-tower_-640x640.jpg' },
    { id: 31, name: 'Marvel Thor', price: '₹820', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62a238a0436314404105a5f7/buildables-thor-2-640x640.jpg' },
    { id: 32, name: 'Scentos Activity Fun ', price: '₹785', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65f9b3b2b9b270f72ef7f1bb/1-640x640.jpg' },
    { id: 33, name: 'Tasty Foods Scissors', price: '₹860', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6627971728e7ac3872be81b1/81bntjcvhhl-sl1500-640x640.jpg' },
    { id: 34, name: 'Smartivity Crazy Wheels', price: '₹915', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62764c99383f535d0ab49da4/smartivity-crazy-wheels-640x640.jpg' },
    { id: 35, name: 'Marble Run 2', price: '₹657', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66269e2e6ee6c5c8a135d81f/blix-marble-run-2-640x640.jpg' },
    { id: 36, name: 'Chess Set', price: '₹157', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/622f8fdd0dec8455e9f18234/1-640x640.png' },
  ],
  education: [
    { id: 13, name: 'Dreamland Publications', price: '₹108', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a5880b35f70da790bb0ac/9789388416399_01-1-640x640.jpg' },
    { id: 14, name: 'Dreamland Publications 201', price: '₹588', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a4adbb35f70da7909ef8e/9789388416375_01-1-640x640.jpg' },
    { id: 15, name: 'Science Encyclopedia', price: '₹267', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a3a43b35f70da7905ef3f/9788184512501_01-640x640.jpg' },
    { id: 16, name: 'Advanced Activity', price: '₹171', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/667f31c1c482fa05f5b49ae4/9788184515823-640x640.jpg' },
    { id: 17, name: 'Birds Board', price: '₹440', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6656d2e4e6d616cf5db15da7/9788184515199-640x640.jpg' },
    { id: 18, name: 'First Padded Book', price: '₹650', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/663f6cf409c0fc2729d6b7c6/9788184514703-640x640.jpg' },
    { id: 37, name: ' My First Library', price: '₹300', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62764c17383f535d0ab4a0da/smartivity-crazy-wheels-640x640.jpg' },
    { id: 38, name: ' World Book', price: '₹215', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a3bb9b35f70da7906accc/9788184512518_01-640x640.jpg' },
    { id: 39, name: 'Word Book', price: '₹355', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/664945bc5554502d334ce812/71bdrd-mlql-640x640.jpg' },
    { id: 40, name: 'English', price: '₹289', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65f1e4f48ff2e1c7e30892c5/11103_1-640x640.jpg' },
    { id: 41, name: 'English', price: '₹289', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65f1e4f48ff2e1c7e30892c5/11103_1-640x640.jpg' },
    { id: 42, name: 'English', price: '₹289', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65f1e4f48ff2e1c7e30892c5/11103_1-640x640.jpg' },
  ],
 
};

const ProductPage = () => {
  const [category, setCategory] = useState('toys');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleBuy = (product) => {
    if (window.confirm(`Are you sure you want to buy ${product.name}?`)) {
      // Add your buy logic here
      handleAddToCart(product);
      // alert(`You have bought ${product.name}!`);
      window.location.href = '/address';
    }
  };

  return (
    <div className="product-page">
      <div className="category-links">
        <button
          className={`category-button ${category === 'toys' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('toys')}
        >
          Toys
        </button>
        <button
          className={`category-button ${category === 'games' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('games')}
        >
          Games
        </button>
        <button
          className={`category-button ${category === 'education' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('education')}
        >
          Education
        </button>
        
      </div>
      <div className="product-grid">
        {products[category].map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-actions">
              <FaHeart className="icon" onClick={() => handleAddToWishlist(product)} />
              <FaShoppingCart className="icon" onClick={() => handleAddToCart(product)} />
              <button className="buy-button" onClick={() => handleBuy(product)}>
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      
     
       
    </div>
  );
};

export default ProductPage;
