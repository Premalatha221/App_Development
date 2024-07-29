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
    { id: 5, name: 'Teddy Bear', price: '₹250', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fba2a74dfc3b27b50f8379f/81vyjulszyl-_sl1500_-480x480.jpg' },
    { id: 6, name: 'Bunny Soft Dog', price: '₹199', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fba1e7fdd005955aecc9015/8131qygsfll-_sl1500_-480x480.jpg' },
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
    { id: 33, name: 'Tasty Foods Scissors', price: '₹860', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6627971728e7ac3872be81b1/81bntjcvhhl-_sl1500_-640x640.jpg' },
    { id: 34, name: 'Smartivity Crazy Wheels', price: '₹915', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62764c99383f535d0ab49da4/smartivity-crazy-wheels-640x640.jpg' },
    { id: 35, name: 'Marble Run 2', price: '₹657', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66269e2e6ee6c5c8a135d81f/blix-marble-run-2-640x640.jpg' },
    { id: 36, name: 'Chess Set', price: '₹157', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/622f8fdd0dec8455e9f18234/1-640x640.png' },
    

  ],
  education: [
    { id: 13, name: 'Dreamland Publications', price: '₹108', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a5880b35f70da790bb0ac/9789388416399_01-1-640x640.jpg' },
    { id: 14, name: 'Dreamland Publications 201', price: '₹588', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a4adbb35f70da7909ef8e/9789388416375_01-1-640x640.jpg' },
    { id: 15, name: 'Jungle Activity and Colouring Book', price: '₹209', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a49a5f32433bf5c8be550/9789394767560_1-scaled-1-640x640.jpg' },
    { id: 16, name: 'Activity and Colouring Book', price: '₹830', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a48ecb35f70da7909b864/9789394767454_1-scaled-1-640x640.jpg' },
    { id: 17, name: 'Math Workbook', price: '₹710', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66864f20bae1865b9d3a391b/9789394767881_1-scaled-1-640x640.jpg' },
    { id: 18, name: 'Keeping Active:', price: '₹25', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fd0a5327d0fba4d011307fa/9780241361207-640x640.jpg' },
    { id: 19, name: 'Going Solo By Roald Dahl', price: '₹225', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fcf12a646ad86c083cecab4/9780141365558-640x640.jpg' },
    { id: 20, name: 'PEPPA PIG THE BIG TALE', price: '₹257', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fc756025c90386d4b1e4f3b/9780723293132-640x640.jpg' },
    { id: 21, name: 'The Witches By Roald Dahl', price: '₹577', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fcef9b703622d8e403ca2fb/9780141365473-640x640.jpg' },
    { id: 22, name: 'Georges Marvellous', price: '₹257', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fc78bc7e249c0753f75b685/9780141365503-640x640.jpg' },
    { id: 37, name: 'Melissa & Doug Water', price: '₹275', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fe1b7d6e6c4225b35c598b4/s9317-640x640.jpg' },
    { id: 38, name: 'LADYBIRD CLASSICS DRACULA', price: '₹725', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fc77504a4241b40119e3e6a/9780723297055-640x640.jpg' },
   
  ],
};

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('toys');

  return (
    <div className="product-page" >
      <h1>Filter by Category</h1>
      <div className="category-links">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {products[selectedCategory].map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-actions">
              <FaHeart className="icon" />
              <FaShoppingCart className="icon" />
              <Link to="/payment">
              <button className="buy-button">Buy</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
