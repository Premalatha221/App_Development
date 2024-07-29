// BrandPage.js
import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './brand.css';
import { Link } from 'react-router-dom';

const brandItems = {
  disney: [
    { id: 1, name: 'Disney Frozen Toys', price: '1899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6674593173e090cd4f7474ae/2-480x480.jpg' },
    { id: 2, name: 'Disney Frozen Elsa', price: ' ₹1548', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/666df1467e1f3ffd69e6aa0a/htg24-480x480.jpg' },
    { id: 4, name: 'Disney FAshion Fan', price: ' ₹1500', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65a112bc35017b07f222c464/fb50040-1-480x480.jpeg' },
    { id: 5, name: 'Lego Disney Encanto Isabela’s Flowerpot 43237', price: ' ₹1509', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6633cdf33225b2c6c662558e/43237-640x640.jpg' },
    { id: 6, name: 'Disney Frozen 2 Brush & Mirror', price: ' ₹399', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/61c4cc0c84766183d3346441/fz2470ga-640x640.jpeg' },
    { id: 7, name: 'Disney Princess Ariel 2-In-1 Mermaid To Princess Doll', price: ' ₹1899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6438faee1f8d616095b9f951/hmg49-640x640.jpeg' },
    { id: 3, name: 'Disney Frozen Elsa Fashion Doll', price: ' ₹1985', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66607086e5690abc29a3492d/screenshot-2024-06-05-at-7-33-19-pm-480x480.png' },
    { id: 8, name: 'Frozen II Olaf Night Light 25 cm', price: ' ₹1999', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fd34a9abb16b62de557f897/37157_2-640x640.jpg' },
    { id: 9, name: 'Disney Frozen 2 Believe In The Journey School Bag 41 Cm Turquoise', price: ' ₹1868', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6245f7eb0aa46fa67cfe4039/1-640x640.jpg' },
    { id: 10, name: 'Disney Frozen 2 Mini Capsule Plush', price: ' ₹680', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fd339047dedeca69bc17e60/32520-640x640.jpg' },
     { id: 11, name: 'Blue Headband', price: ' ₹987', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/630a6a935b56ae4beb0c83ce/ld80012-1-1-640x640.jpeg' },
     { id: 12, name: 'Disney Item 2', price: ' ₹678', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/641af206043e98f58ca6282e/1-1647241980-480x480.jpeg' },
   
  ],
  barbie: [
    { id: 1, name: 'Barbie Doll and Accessories,', price: ' ₹799', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66744cb5de3e04d1e7b28bb7/hjy17-640x640.jpg' },
    { id: 2, name: 'Barbie Skipper Babysitters Dolls', price: ' ₹899', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/667449d173e090cd4f72d1b5/2-640x640.jpg' },
    { id: 3, name: 'Barbie ', price: ' ₹789', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/667449d1358ce1a5ae2c3291/3-640x640.jpg' },
    { id: 4, name: 'Barbie Doll With Pink Butterfly', price: ' ₹188', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/638deb7a14d12cab72112850/hbv05-pink-3-640x640.jpg' },
    { id: 5, name: 'Barbie Babysitter', price: ' ₹318', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63f22dc1d4412a9215605e8e/barbie-skipper-480x480.jpeg' },
    { id: 6, name: 'Barbie Made To Move Doll', price: ' ₹4518', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63f3606cb7560b322927c089/barbie-made-to-move-doll-purple-4-640x640.jpeg' },
    { id: 7, name: 'Barbie Dreamtopia Mermaid Doll', price: ' ₹1568', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/638dee5814d12cab7211a5fd/gtf39-4-640x640.jpeg' },
    { id: 8, name: 'Barbie Chelsea Doll and Car', price: ' ₹1678', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63c9484160916804a52fbfdf/chelsea-car-2-640x640.jpg' },
    { id: 9, name: 'Barbie Skipper', price: ' ₹1468', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63f2305f557c2a91dbabf7f2/wellness-barbie-480x480.jpg' },
    { id: 10, name: 'Barbie Doll', price: ' ₹1689', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/638ded8b14d12cab72117fdc/hbv06-2-640x640.jpg' },
    { id: 11, name: 'Barbie Skipper', price: ' ₹1468', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63f2305f557c2a91dbabf7f2/wellness-barbie-480x480.jpg' },
    { id: 12, name: 'Barbie Doll', price: ' ₹1689', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/666aa32d4e4a935a09471cd7/hrh29-2-640x640.jpg' },
   
  ],
  hotwheels: [
    { id: 1, name: 'Hulk Mask', price: ' ₹845', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6631ef89a6474b73bc62658a/nerf-combo-hulk-480x480.jpeg' },
    { id: 2, name: ' Marvel Action Figure 5-Pack', price: ' ₹1504', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63bb021a05ef910197f5b300/f1395-1-640x640.jpeg' },
    { id: 3, name: 'Marvel Spider', price: ' ₹674', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63dd52c0c344b0021d14a117/f3987-marvel-spidey-and-his-amazing-friends-supersized-ghost-spider-4-640x640.jpg' },
    { id: 4, name: 'Marvel Spiders', price: ' ₹684', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63dd594fc1ac0a0279195e94/f3986-3-640x640.jpg' },
    { id: 5, name: ' Marvel Thor Hammer Strike', price: ' ₹400', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/636823c5f78a4e2f36206a19/thor-640x640.jpg' },
    { id: 6, name: 'Captain America Mask', price: ' ₹790', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6631ee9d5ca6bdb6b00bb32f/nerf-combo-captain-america-640x640.jpeg' },
    { id: 7, name: 'Marvel Wolverine Construction ', price: ' ₹567', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662e456befc4edca7375f044/76257-640x640.jpg' },
    { id: 8, name: 'Marvel Spiderman Square Backpack', price: ' ₹909', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6571f2020b09299eeefcfa94/vhf20295-s-640x640.jpeg' },
    { id: 9, name: 'Marvel spiderman', price: ' ₹1904', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6625197822079c73da2096cd/spiderman-combo-640x640.jpeg' },
    { id: 10, name: 'Spiderman', price: ' ₹1904', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/61a79d187363285f945d7bcd/marvel-legends-spiderman-640x640.jpg' },
    { id: 11, name: 'Marvel Spidey', price: ' ₹1904', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65cefc08da1d357383b1ce9b/m34007-20-19133-1-640x640.jpg' },
    { id: 12, name: 'Marvel Crack', price: ' ₹1974', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662e456befc4edca7375f044/76257-640x640.jpg' },
   
  

  ],
};

const Brand = () => {
  const [selectedBrand, setSelectedBrand] = useState('disney');

  return (
    <div className="product-page" style={{backgroundColor:"#c3f7f3"}}>
      <h1>Filter by Brand</h1>
      <div className="category-links">
        <button
          className={`category-button ${selectedBrand === 'disney' ? 'active' : ''}`}
          onClick={() => setSelectedBrand('disney')}
        >
          Disney
        </button>
        <button
          className={`category-button ${selectedBrand === 'barbie' ? 'active' : ''}`}
          onClick={() => setSelectedBrand('barbie')}
        >
          Barbie
        </button>
        <button
          className={`category-button ${selectedBrand === 'hotwheels' ? 'active' : ''}`}
          onClick={() => setSelectedBrand('hotwheels')}
        >
          Marvel
        </button>
      </div>
      <div className="product-grid">
        {brandItems[selectedBrand].map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-name">{item.name}</div>
            <div className="product-price">{item.price}</div>
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

export default Brand;
