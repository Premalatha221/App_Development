import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './age.css';
import { Link } from 'react-router-dom';

const ageItems = {
  '0-3': [
    { id: 1, name: 'Fisher Price Ultra Care', price: '$190', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6697fa8ced005b4f64da767f/hc-g0dm-4khp-1-640x640.jpg' },
    { id: 2, name: 'Cuddlekins Mini Alligator', price: '$885', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/668ccfe245b5674dcbc5caad/19539-640x640.jpg' },
    { id: 3, name: 'Playskool Step Start', price: '$515', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/667b137883317a1f5356bfd6/f2288-1-640x640.jpg' },
    { id: 4, name: 'Black wolf', price: '$159', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6647358f653b401c2c33f755/ck-black-wolf-23075-1024x1024.jpg' },
    { id: 5, name: 'Mini Lynx - 6 Inch', price: '$189', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/668e6bded6bba131b501029f/19628-640x640.jpg' },
    { id: 6, name: 'Mini Budgie Assorted', price: '$1765', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/668ce15f8b0e7101f1df8e88/screenshot-2024-07-09-at-12-34-42-pm-640x640.png' },
    { id: 7, name: ' Silicon Baby Bib Pink', price: '$1095', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6697fd9c02930525bcc40a6d/fisher-price-ultra-care-easy-clean-silicon-baby-bib-pink-640x640.jpg' },
    { id: 8, name: ' Paws Mini Lab 8', price: '₹250', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e3b7918a64da32d2bfcab/2-480x480.jpg' },
    { id: 9, name: ' Cuddlekins Jumbo, Mom and Puppies ', price: '₹4000', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6631f59d2c94b4944ce22ce3/27480-640x640.jpg' },
    { id: 10, name: 'Jerry', price: '₹899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6401dbe0e49e442cf0928298/w26554-wr-elk-6in-480x480.webp' },
    { id: 11, name: 'Mirada Tom ', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65cdc5f95112340de942d600/10908-480x480.jpg' },
    { id: 12, name: 'Mirada', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662d209a06c45318de0a20ee/mp0763-480x480.jpg' },
    
    
  ],
  '4-6': [
    { id: 13, name: 'Hot Wheels Motor Cycle Club', price: '$1245', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a11776e1ea717bb1844c71/1-640x640.jpg' },
    { id: 14, name: 'Mirada Baby Horse', price: '$458', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e828cc477b6b2e82642bc/2-640x640.jpg' },
    { id: 15, name: 'Mirada Pokémon Squirtle Officially Licensed', price: '$318', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a11f0960101038bfa3b300/screenshot-2024-07-24-at-9-03-41-pm-640x640.png' },
    { id: 16, name: 'Bubble Magic Fan Bubs', price: '$418', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63066b35308a3629a4fd7bb0/fb50014-5-640x640.jpeg' },
    { id: 17, name: 'Bubble Magic Fan Bubs Doughnut', price: '$185', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63066890597bb65346776554/fb50015-1-640x640.jpeg' },
    { id: 18, name: 'Bubble Magic Turbo', price: '$235', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6468f71f7b650c32f8c9ba7a/bubble-magic-blaster-2-640x640.jpg' },
    { id: 19, name: 'Bubble Magic Fan Bubs', price: '$568', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65aebb7317c1434a968af317/bubble-magic-fan-bubs-mickey-and-friends-640x640.jpg' },
    { id: 20, name:'Art 3D Unicorns', price: '$768', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/668d20ae5e7b1971ba142817/skill769iup-640x640.jpg' },
    { id: 21, name: 'Scavenger Hunt', price: '$788', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6310f6bc8f2890f857b47b1d/skillmatics-found-it-outdoors-640x640.jpg' },
    { id: 22, name: 'Squirtle', price: '$1784', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a11f0960101038bfa3b300/screenshot-2024-07-24-at-9-03-41-pm-480x480.png' },
    { id: 23, name: 'Fish Parrot', price: '$1784', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669d5a745a965bc16f7a04a8/27003-640x640.jpg' },
    { id: 24, name: 'Mini Pufferfish', price: '$1784', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669dfd853a04eb27a8d393ef/2-640x640.jpg' },

   
  ],
  '7-9': [
    { id: 25, name: 'colouring funBook', price: '$8', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/665f0bb2aa4dec362b696ec9/9789395406758_1-640x640.jpg' },
    { id: 26, name: 'Monkey Black', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/631ccd78144ec7c208dcb618/mp0012a-640x640.jpg' },
    { id: 27, name: 'Monkey Brown', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/631ccbcff329bcc126896a94/mirada-52cm-hanging-monkey-640x640.jpg' },
    { id: 28, name: 'Mirada Husky Dog', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63c19c7e3cc67901952c169a/1-640x640.jpg' },
    { id: 29, name: 'Mirada Miss Bunny Plush', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fbace14ab5d8720c934f31d/71wr4ktetgl-_sl1500_-640x640.jpg' },
    { id: 30, name: 'Paws Mini Cat', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e35914e71cfa38f6c9f63/1-640x640.jpg' },
    { id: 31, name: 'Coral Reef', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/664737387b5432dd39023461/27000-640x640.jpg' },
    { id: 32, name: 'Mirada Woman Bunny', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662d2150aa1ad925c0d140c9/mp0940-640x640.jpg' },
    { id: 33, name: 'Mirada Pet In A Bag', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65e9804959162c54d4c5f601/dog-in-a-bag-640x640.jpeg' },
    { id: 34, name: ' Cuddlekins Moose ', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65ca1056b1baa6b6fd60b227/toy-store-640x640.jpeg' },
    { id: 35, name: 'Mini Chipmunk', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65c8ac183364495bf840e89f/16492-640x640.jpg' },
    { id: 36, name: 'Lemur', price: '$14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65734d0fa12aef67eb20f0ba/w10880-640x640.jpg' },
    
    
  ],
};

const Age = () => {
  const [selectedAge, setSelectedAge] = useState('0-3');

  const handleBuy = (product) => {
    if (window.confirm(`Are you sure you want to buy ${product.name}?`)) {
      // Add your buy logic here
      handleAddToCart(product);
      // alert(`You have bought ${product.name}!`);
      window.location.href = '/address';
    }
  };

  const handleAddToCart = (product) => {
    // Logic to add the product to the cart
    console.log(`${product.name} added to cart.`);
  };

  return (
    <div className="product-page">
      <h1>Filter by Age</h1>
      <div className="category-links">
        <button
          className={`category-button ${selectedAge === '0-3' ? 'active' : ''}`}
          onClick={() => setSelectedAge('0-3')}
        >
          0-3
        </button>
        <button
          className={`category-button ${selectedAge === '4-6' ? 'active' : ''}`}
          onClick={() => setSelectedAge('4-6')}
        >
          4-6
        </button>
        <button
          className={`category-button ${selectedAge === '7-9' ? 'active' : ''}`}
          onClick={() => setSelectedAge('7-9')}
        >
          7-9
        </button>
      </div>
      <div className="product-grid">
        {ageItems[selectedAge].map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-name">{item.name}</div>
            <div className="product-price">{item.price}</div>
            <div className="product-actions">
              <FaHeart className="icon" />
              <FaShoppingCart className="icon" />
              <button className="buy-button" onClick={() => handleBuy(item)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Age;
