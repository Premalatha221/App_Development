import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.avif';
import UserPanel from './userpanel';

const CommonNavbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 50px',
      backgroundColor: '#c3f7f3',
      color: 'white',
      
    },
    logo: {
      height: '50px',
      width: 'auto', 
    },
    userPanel: {
      display: 'flex',
      alignItems: 'center',
      
    },
  };

  return (
    <div style={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="Logo" style={styles.logo} />
      </Link>
      <div style={styles.userPanel}>
        <UserPanel/>
      </div>
    </div>
  );
};

export default CommonNavbar;
