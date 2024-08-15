import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './age.css';

const products = {
  '0-3': [
    { id: 101, name: 'Fisher Price Ultra Care', price: '₹800', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6697fa8ced005b4f64da767f/hc-g0dm-4khp-1-640x640.jpg' },
    { id: 102, name: 'Cuddlekins Mini Alligator', price: '₹885', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/668ccfe245b5674dcbc5caad/19539-640x640.jpg' },
    { id: 103, name: 'Playskool Step Start', price: '₹515', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/667b137883317a1f5356bfd6/f2288-1-640x640.jpg' },
    { id: 104, name: 'Black wolf', price: '₹159', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662d2db406c45318de0b268e/mp0826-480x480.png' },
    { id: 105, name: 'Mini Lynx - 6 Inch', price: '₹189', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/668e6bded6bba131b501029f/19628-640x640.jpg' },
    { id: 106, name: 'Mini Budgie Assorted', price: '₹1765', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/668ce15f8b0e7101f1df8e88/screenshot-2024-07-09-at-12-34-42-pm-640x640.png' },
    { id: 107, name: ' Silicon Baby Bib Pink', price: '₹1095', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6697fd9c02930525bcc40a6d/fisher-price-ultra-care-easy-clean-silicon-baby-bib-pink-640x640.jpg' },
    { id: 108, name: ' Paws Mini Lab 8', price: '₹250', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e3b7918a64da32d2bfcab/2-480x480.jpg' },
    { id: 109, name: ' Cuddlekins Jumbo, Mom and Puppies ', price: '₹4000', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6631f59d2c94b4944ce22ce3/27480-640x640.jpg' },
    { id: 110, name: 'Jerry', price: '₹899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a9258faef2e2e7f576d28e/1-480x480.png' },
    { id: 111, name: 'Mirada Tom ', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65cdc5f95112340de942d600/10908-480x480.jpg' },
    { id: 112, name: 'Mirada', price: '₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662d209a06c45318de0a20ee/mp0763-480x480.jpg' },
    
    
  ],
  '4-6': [
    { id: 113, name: 'Hot Wheels Motor Cycle Club', price: '₹1245', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a11776e1ea717bb1844c71/1-640x640.jpg' },
    { id: 114, name: 'Mirada Baby Horse', price: '₹458', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e828cc477b6b2e82642bc/2-640x640.jpg' },
    { id: 115, name: 'Mirada Pokémon Squirtle Officially Licensed', price: '₹318', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a11f0960101038bfa3b300/screenshot-2024-07-24-at-9-03-41-pm-640x640.png' },
    { id: 116, name: 'Bubble Magic Fan Bubs', price: '₹418', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63066b35308a3629a4fd7bb0/fb50014-5-640x640.jpeg' },
    { id: 117, name: 'Bubble Magic Fan Bubs Doughnut', price: '$185', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63066890597bb65346776554/fb50015-1-640x640.jpeg' },
    { id: 118, name: 'Bubble Magic Turbo', price: '₹235', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6468f71f7b650c32f8c9ba7a/bubble-magic-blaster-2-640x640.jpg' },
    { id: 119, name: 'Bubble Magic Fan Bubs', price: '₹568', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65aebb7317c1434a968af317/bubble-magic-fan-bubs-mickey-and-friends-640x640.jpg' },
    { id: 120, name:'Art 3D Unicorns', price: '₹768', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/668d20ae5e7b1971ba142817/skill769iup-640x640.jpg' },
    { id: 121, name: 'Scavenger Hunt', price: '₹788', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669f3ed69660bedbc8432d4d/grizzly-480x480.jpg' },
    { id: 122, name: 'Squirtle', price: '₹1784', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66a11f0960101038bfa3b300/screenshot-2024-07-24-at-9-03-41-pm-480x480.png' },
    { id: 123, name: 'Fish Parrot', price: '₹1784', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669d5a745a965bc16f7a04a8/27003-640x640.jpg' },
    { id: 124, name: 'Mini Pufferfish', price: '₹1784', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669dfd853a04eb27a8d393ef/2-640x640.jpg' },

   
  ],
  '7-9': [
    { id: 125, name: 'colouring funBook', price: '₹8', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/665f0bb2aa4dec362b696ec9/9789395406758_1-640x640.jpg' },
    { id: 126, name: 'Monkey Black', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/631ccd78144ec7c208dcb618/mp0012a-640x640.jpg' },
    { id: 127, name: 'Monkey Brown', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/631ccbcff329bcc126896a94/mirada-52cm-hanging-monkey-640x640.jpg' },
    { id: 128, name: 'Mirada Husky Dog', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63c19c7e3cc67901952c169a/1-640x640.jpg' },
    { id: 129, name: 'Mirada Miss Bunny Plush', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/659f098b28e3b94b4cfc8545/ldd10001-480x480.jpeg' },
    { id: 130, name: 'Paws Mini Cat', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e35914e71cfa38f6c9f63/1-640x640.jpg' },
    { id: 131, name: 'Coral Reef', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/664737387b5432dd39023461/27000-640x640.jpg' },
    { id: 132, name: 'Mirada Woman Bunny', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662d2150aa1ad925c0d140c9/mp0940-640x640.jpg' },
    { id: 133, name: 'Mirada Pet In A Bag', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65e9804959162c54d4c5f601/dog-in-a-bag-640x640.jpeg' },
    { id: 134, name: ' Cuddlekins Moose ', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65ca1056b1baa6b6fd60b227/toy-store-640x640.jpeg' },
    { id: 135, name: 'Mini Chipmunk', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65c8ac183364495bf840e89f/16492-640x640.jpg' },
    { id: 136, name: 'Lemur', price: '₹14', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/631dd40fa8ccdc172352bcae/1-480x480.jpg' },
    
    
  ]
};

const Age = () => {
  const [ageGroup, setAgeGroup] = useState('0-3');
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [notification, setNotification] = useState({ show: false, productName: '', type: '' });
  const navigate = useNavigate();

  const handleAgeGroupChange = (ageGroup) => {
    setAgeGroup(ageGroup);
  };

  const handleAddToWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);

    if (isAlreadyInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      showNotification(product.name, 'removed from wishlist');
    } else {
      // Add to wishlist
      const updatedWishlist = [...wishlist, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      showNotification(product.name, 'added to wishlist');
    }

    setWishlist((prevWishlist) => {
      return isAlreadyInWishlist ? prevWishlist.filter((item) => item.id !== product.id) : [...prevWishlist, product];
    });
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      showNotification(product.name, 'cart');
      return updatedCart;
    });
  };

  const handleBuy = (product) => {
    if (window.confirm(`Are you sure you want to buy ${product.name}?`)) {
      handleAddToCart(product);
    }
  };

  const showNotification = (productName, type) => {
    setNotification({ show: true, productName, type });
    setTimeout(() => {
      setNotification({ show: false, productName: '', type: '' });
      if (type === 'cart') {
        navigate('/ordersummary');
      }
    }, 2000); // Notification shows for 2 seconds
  };

  const isInWishlist = (productId) => wishlist.some((item) => item.id === productId);

  return (
    <div className="product-page">
      <div className="category-links">
        <button
          className={`category-button ${ageGroup === '0-3' ? 'active' : ''}`}
          onClick={() => handleAgeGroupChange('0-3')}
        >
          0-3 years
        </button>
        <button
          className={`category-button ${ageGroup === '4-6' ? 'active' : ''}`}
          onClick={() => handleAgeGroupChange('4-6')}
        >
          4-6 years
        </button>
        <button
          className={`category-button ${ageGroup === '7-9' ? 'active' : ''}`}
          onClick={() => handleAgeGroupChange('7-9')}
        >
          7-9 years
        </button>
      </div>
      <div className="product-grid">
        {products[ageGroup].map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-actions">
              <FaHeart
                className={`icon ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                onClick={() => handleAddToWishlist(product)}
              />
              <FaShoppingCart className="icon" onClick={() => handleAddToCart(product)} />
              <button className="buy-button" onClick={() => handleBuy(product)}>
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.productName} {notification.type} successfully!
        </div>
      )}
    </div>
  );
};

export default Age;
