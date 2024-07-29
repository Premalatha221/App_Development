

import React from 'react';
import { Link } from 'react-router-dom';
import './navcategory3.css';
import { FaUserPlus, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import logo from '../assets/images/logo.avif'; 
import UserPanel from './userpanel';
import Navbar from './Navbar';
import Age from './age';



const NavCategory3 = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <UserPanel />
        </div>
      </div>
      <div className="navbar-below">
        <Navbar />
      </div>
      <div>
        <Age/>
      </div>
    </div>
  );
};

export default NavCategory3;
