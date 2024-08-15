import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './brand.css';

const products = {
  
  disney: [
    { id: 201, name: 'Disney Frozen Toys', price: '1899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6674593173e090cd4f7474ae/2-480x480.jpg' },
    { id: 202, name: 'Disney Frozen Elsa', price: ' ₹1548', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/666df1467e1f3ffd69e6aa0a/htg24-480x480.jpg' },
    { id: 203, name: 'Disney Fashion Fan', price: ' ₹1500', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65a112bc35017b07f222c464/fb50040-1-480x480.jpeg' },
    { id: 204, name: 'Lego Disney Encanto Isabela’s Flowerpot 43237', price: ' ₹1509', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6633cdf33225b2c6c662558e/43237-640x640.jpg' },
    { id: 205, name: 'Disney Frozen 2 Brush & Mirror', price: ' ₹399', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/61c4cc0c84766183d3346441/fz2470ga-640x640.jpeg' },
    { id: 206, name: 'Disney Princess Ariel 2-In-1 Mermaid To Princess Doll', price: ' ₹1899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6438faee1f8d616095b9f951/hmg49-640x640.jpeg' },
    { id: 207, name: 'Disney Frozen Elsa Fashion Doll', price: ' ₹1985', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66607086e5690abc29a3492d/screenshot-2024-06-05-at-7-33-19-pm-480x480.png' },
    { id: 208, name: 'Frozen II Olaf Night Light 25 cm', price: ' ₹1999', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64491d6cd43eb0c6975c72a3/hlw20-4-480x480.jpeg' },
    { id: 209, name: 'Disney Frozen 2 Believe In The Journey School Bag 41 Cm Turquoise', price: ' ₹1868', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6245f7eb0aa46fa67cfe4039/1-640x640.jpg' },
    { id: 210, name: 'Disney Frozen 2 Mini Capsule Plush', price: ' ₹680', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fd339047dedeca69bc17e60/32520-640x640.jpg' },
     { id: 211, name: 'Blue Headband', price: ' ₹987', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/630a6a935b56ae4beb0c83ce/ld80012-1-1-640x640.jpeg' },
     { id: 212, name: 'Disney Item 2', price: ' ₹678', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/630a6d718e62bb4bb44a636c/ld80009-1-1-480x480.jpeg' },
   
  ],
  barbie: [
    { id: 213, name: 'Barbie Doll and Accessories,', price: ' ₹799', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66744cb5de3e04d1e7b28bb7/hjy17-640x640.jpg' },
    { id: 214, name: 'Barbie Skipper Babysitters Dolls', price: ' ₹899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/667449d173e090cd4f72d1b5/2-640x640.jpg' },
    { id: 215, name: 'Barbie ', price: ' ₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/667449d1358ce1a5ae2c3291/3-640x640.jpg' },
    { id: 216, name: 'Barbie Doll With Pink Butterfly', price: ' ₹188', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63d80a2a123c9401369bd545/3-480x480.png' },
    { id: 217, name: 'Barbie Babysitter', price: ' ₹318', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63f22dc1d4412a9215605e8e/barbie-skipper-480x480.jpeg' },
    { id: 218, name: 'Barbie Made To Move Doll', price: ' ₹4518', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63f3606cb7560b322927c089/barbie-made-to-move-doll-purple-4-640x640.jpeg' },
    { id: 219, name: 'Barbie Dreamtopia Mermaid Doll', price: ' ₹1568', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/638dee5814d12cab7211a5fd/gtf39-4-640x640.jpeg' },
    { id: 220, name: 'Barbie Chelsea Doll and Car', price: ' ₹1678', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63c9484160916804a52fbfdf/chelsea-car-2-640x640.jpg' },
    { id: 221, name: 'Barbie Skipper', price: ' ₹1468', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63f2305f557c2a91dbabf7f2/wellness-barbie-480x480.jpg' },
    { id: 222, name: 'Barbie Doll', price: ' ₹1689', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/644682d73edb25d5ec1d4e4a/hnj05-480x480.jpeg' },
    { id: 223, name: 'Barbie Skipper', price: ' ₹1468', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63f2305f557c2a91dbabf7f2/wellness-barbie-480x480.jpg' },
    { id: 224, name: 'Barbie Doll', price: ' ₹1689', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6674579848492ea61a11aa7a/1-480x480.jpg' },
   
  ],
  marvel: [
    { id: 225, name: 'Hulk Mask', price: ' ₹845', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6631ef89a6474b73bc62658a/nerf-combo-hulk-480x480.jpeg' },
    { id: 226, name: ' Marvel Action Figure 5-Pack', price: ' ₹1504', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63bb021a05ef910197f5b300/f1395-1-640x640.jpeg' },
    { id: 227, name: 'Marvel Spider', price: ' ₹674', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63dd52c0c344b0021d14a117/f3987-marvel-spidey-and-his-amazing-friends-supersized-ghost-spider-4-640x640.jpg' },
    { id: 228, name: 'Marvel Spiders', price: ' ₹684', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63bc6e3127fbcc01950d99dd/3-480x480.jpg' },
    { id: 229, name: ' Marvel Thor Hammer Strike', price: ' ₹400', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/636823c5f78a4e2f36206a19/thor-640x640.jpg' },
    { id: 230, name: 'Captain America Mask', price: ' ₹790', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6631ee9d5ca6bdb6b00bb32f/nerf-combo-captain-america-640x640.jpeg' },
    { id: 231, name: 'Marvel Wolverine Construction ', price: ' ₹567', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662e456befc4edca7375f044/76257-640x640.jpg' },
    { id: 232, name: 'Marvel Spiderman Square Backpack', price: ' ₹909', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6571f2020b09299eeefcfa94/vhf20295-s-640x640.jpeg' },
    { id: 233, name: 'Marvel spiderman', price: ' ₹1904', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6625197822079c73da2096cd/spiderman-combo-640x640.jpeg' },
    { id: 234, name: 'Spiderman', price: ' ₹1904', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/646a614ab7426783c1f2179b/3-480x480.jpg' },
    { id: 235, name: 'Marvel Spidey', price: ' ₹1904', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65cefc08da1d357383b1ce9b/m34007-20-19133-1-640x640.jpg' },
    { id: 236, name: 'Marvel Crack', price: ' ₹1974', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662e456befc4edca7375f044/76257-640x640.jpg' },
   
  

  ],
};

const Brand = () => {
  const [brand, setBrand] = useState('disney');
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const navigate = useNavigate();

  const handleBrandChange = (brand) => {
    setBrand(brand);
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      let updatedWishlist;
      let message;
      
      if (isProductInWishlist(product)) {
        // Remove from wishlist if it already exists
        updatedWishlist = prevWishlist.filter(item => item.id !== product.id);
        message = `${product.name} removed from wishlist`;
      } else {
        // Add to wishlist if it doesn't exist
        updatedWishlist = [...prevWishlist, product];
        message = `${product.name} added to wishlist`;
      }

      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      showNotification(message, 'wishlist');
      return updatedWishlist;
    });
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      showNotification(`${product.name} added to cart`, 'cart');
      return updatedCart;
    });
  };

  const handleBuy = (product) => {
    if (window.confirm(`Are you sure you want to buy ${product.name}?`)) {
      handleAddToCart(product);
    }
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
      if (type === 'cart') {
        navigate('/ordersummary');
      }
    }, 2000);
  };

  const isProductInWishlist = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const currentProducts = products[brand] || [];

  return (
    <div className="product-page">
      <div className="brand-links">
        <button
          className={`brand-button ${brand === 'disney' ? 'active' : ''}`}
          onClick={() => handleBrandChange('disney')}
        >
          Disney
        </button>
        <button
          className={`brand-button ${brand === 'barbie' ? 'active' : ''}`}
          onClick={() => handleBrandChange('barbie')}
        >
          Barbie
        </button>
        <button
          className={`brand-button ${brand === 'marvel' ? 'active' : ''}`}
          onClick={() => handleBrandChange('marvel')}
        >
          Marvel
        </button>
      </div>
      <div className="product-grid">
        {currentProducts.length ? (
          currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <div className="product-actions">
                <FaHeart
                  className={`icon ${isProductInWishlist(product) ? 'active' : ''}`}
                  onClick={() => handleAddToWishlist(product)}
                />
                <FaShoppingCart className="icon" onClick={() => handleAddToCart(product)} />
                <button className="buy-button" onClick={() => handleBuy(product)}>
                  Buy
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default Brand;
