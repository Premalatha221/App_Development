// src/components/AdminSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUsers, FaChartBar, FaCog } from 'react-icons/fa';

const AdminSidebar = () => {
  const styles = {
    sidebar: {
      width: '250px',
      height: '100vh',
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      position: 'fixed',
    },
    logo: {
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    navList: {
      listStyleType: 'none',
      padding: '0',
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
    },
    icon: {
      marginRight: '10px',
    },
    link: {
      color: '#ecf0f1',
      textDecoration: 'none',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.sidebar}>
      
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <FaTachometerAlt style={styles.icon} />
          <Link to="/admin/dashboard" style={styles.link}>Dashboard</Link>
        </li>
        <li style={styles.navItem}>
          <FaBox style={styles.icon} />
          <Link to="/admin/products" style={styles.link}>Products</Link>
        </li>
        <li style={styles.navItem}>
          <FaShoppingCart style={styles.icon} />
          <Link to="/admin/orders" style={styles.link}>Orders</Link>
        </li>
        <li style={styles.navItem}>
          <FaUsers style={styles.icon} />
          <Link to="/admin/customers" style={styles.link}>Customers</Link>
        </li>
        
        <li style={styles.navItem}>
          <FaCog style={styles.icon} />
          <Link to="/admin/settings" style={styles.link}>Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
