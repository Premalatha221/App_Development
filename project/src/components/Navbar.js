import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [isShopOpen, setShopOpen] = useState(false);
  const [isMoreOpen, setMoreOpen] = useState(false);

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
                  <li><Link to="/category/toys">Toys</Link></li>
                  <li><Link to="/category/games">Games</Link></li>
                  <li><Link to="/category/education">Education</Link></li>
                </ul>
              )}
            </div>
          </li>
          <li><Link to="/">Shop By Brands</Link></li>
          <li>

          </li>
          <li><Link to="/">Gifts</Link></li>
          <li></li>
          <li>
            <div className="dropdown" onClick={() => setMoreOpen(!isMoreOpen)}>
              <span>More</span>
              {isMoreOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
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
