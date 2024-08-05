import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isShopOpen, setShopOpen] = useState(false);
  const [isBrandsOpen, setBrandsOpen] = useState(false);
  const [isAgeOpen, setAgeOpen] = useState(false);
  const [isMoreOpen, setMoreOpen] = useState(false);

  const shopRef = useRef(null);
  const brandsRef = useRef(null);
  const ageRef = useRef(null);
  const moreRef = useRef(null);

  const handleClickOutside = (event) => {
    if (shopRef.current && !shopRef.current.contains(event.target)) {
      setShopOpen(false);
    }
    if (brandsRef.current && !brandsRef.current.contains(event.target)) {
      setBrandsOpen(false);
    }
    if (ageRef.current && !ageRef.current.contains(event.target)) {
      setAgeOpen(false);
    }
    if (moreRef.current && !moreRef.current.contains(event.target)) {
      setMoreOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li ref={shopRef} className="dropdown-container">
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
          <li ref={brandsRef} className="dropdown-container">
            <div className="dropdown" onClick={() => setBrandsOpen(!isBrandsOpen)}>
              <span>Shop By Brands</span>
              {isBrandsOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/navcategory2">Disney</Link></li>
                  <li><Link to="/navcategory2">Barbie</Link></li>
                  <li><Link to="/navcategory2">Marvel</Link></li>
                </ul>
              )}
            </div>
          </li>
          <li ref={ageRef} className="dropdown-container">
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
          <li ref={moreRef} className="dropdown-container">
            <div className="dropdown" onClick={() => setMoreOpen(!isMoreOpen)}>
              <span>More</span>
              {isMoreOpen && (
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
