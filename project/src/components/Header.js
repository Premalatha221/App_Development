
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUserPlus, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import logo from '../assets/images/logo.avif';

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
       
      </div>
      <div className="navbar-right">
        <Link to="/signup"><FaUserPlus className="navbar-icon" />Sign Up</Link>
        <Link to="/login"><FaUser className="navbar-icon" />Login</Link>
        <Link to=""><FaShoppingCart className="navbar-icon" /></Link>
        <Link to="/profilewish"><FaHeart className="navbar-icon" /></Link>
      </div>
        
    </div>
  );
};

export default Header;

