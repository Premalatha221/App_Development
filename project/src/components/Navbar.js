import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isShopOpen, setShopOpen] = useState(false);
  const [isBrandsOpen, setBrandsOpen] = useState(false);
  const [isAgeOpen, setAgeOpen] = useState(false);

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>
            <div className="dropdown" onClick={() => setShopOpen(!isShopOpen)}>
              <span>Shop By Category</span>
              {isShopOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/navcategory">Toys</Link></li>
                  <li><Link to="/navcategory">Games</Link></li>
                  <li><Link to="/navcategory">Education</Link></li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown" onClick={() => setBrandsOpen(!isBrandsOpen)}>
              <span>Shop By Brands</span>
              {isBrandsOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/navcategory2">Disney</Link></li>
                  <li><Link to="/navcategory2">Barbie</Link></li>
                  <li><Link to="/navcategory2">Hot wheel</Link></li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown" onClick={() => setAgeOpen(!isAgeOpen)}>
              <span>Shop By Age</span>
              {isAgeOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/navcategory3">0-3 years</Link></li>
                  <li><Link to="/navcategory3">4-6 years</Link></li>
                  <li><Link to="/navcategory3">6-9 years</Link></li>
                  
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown" onClick={() => setAgeOpen(!isAgeOpen)}>
              <span>More</span>
              {isAgeOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/privacy">About Us</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                 
                </ul>
              )}
            </div>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button" className="search-button">Search</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
