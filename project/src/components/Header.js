import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import logo from '../assets/images/logo.avif';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (dropdownOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.account-section')) {
          closeDropdown();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [dropdownOpen]);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        {!isLoggedIn ? (
          <>
            <Link to="/signup"><FaUserPlus className="navbar-ico" />Sign Up</Link>
            <Link to="/login"><FaUser className="navbar-icons" />Login</Link>
          </>
        ) : (
          <div className="account-section">
            <button type="button" className="account-button" onClick={toggleDropdown}>
              <FaUser className="navbar-ico" />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/dashboard">Account</Link>
                
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
        <Link to="/ordersummary"><FaShoppingCart className="navbar-icon" /></Link>
        <Link to="/wishlist"><FaHeart className="navbar-icon" /></Link>
      </div>

      {/* Internal CSS */}
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background-color: 98c3d1;
            height: 75px;
            padding: 0 20px;
            box-sizing: border-box; 
          }

          .navbar-left {
            display: flex;
            align-items: center;
          }

          .navbar-logo {
            height: 50px;
            margin-right: 10px;
          }

          .navbar-name {
            font-size: 24px;
            color: white;
          }

          .navbar-right {
            display: flex;
            align-items: center;
          }

          .navbar-right a {
            display: flex;
            align-items: center;
            margin-left: 20px;
            color: black;
            text-decoration: none;
            font-size: 19px;
          }

          .navbar-iconss {
            font-size: 28px;
          }

          .navbar-icons {
            font-size: 22px;
            color: black;
          }

          .navbar-ico {
            color: black;
            font-size: 27px;
          }

          .navbar-icon {
            margin-right: 8px; 
            font-size: 28px;
            color: black;
          }

          .account-section {
            position: relative;
            color: black;
          }

          .account-button {
            background: none;
            border: none;
            color: black;
            font-size: 19px;
            font-family: Georgia, 'Times New Roman', Times, serif;
            cursor: pointer;
            display: flex;
            align-items: center;
            
          }

          .dropdown-menu {
            position: absolute;
            top: 40px; /* Adjust this based on your button height */
            right: 0;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            padding: 10px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            min-width: 150px; /* Optional: Ensures a minimum width for the dropdown */
            
          }

          .dropdown-menu a,
          .logout-button {
            display: block;
            padding: 8px 22px;
            text-decoration: none;
            color: #333;
           
          }

          .dropdown-menu a:hover,
          .logout-button:hover {
          background: #f1f1f1;
          }

          .logout-button {
           margin-left:20px;
            background: none;
            border: none;
            color: black;
            cursor: pointer;
            font-size: 19px;
            text-align: left;
            width: 110px;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
