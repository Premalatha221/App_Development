import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUsers, FaSignOutAlt, FaUser } from 'react-icons/fa';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name'); // Optional: remove other user-related data
    navigate('/login'); // Redirect to login page after logout
  };

  const styles = {
    sidebar: {
      width: '250px',
      height: '100vh',
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
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
    profile: {
      paddingBottom: '20px',
      borderBottom: '1px solid #7f8c8d',
      marginBottom: '20px',
    },
    logoutButton: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
      color: '#ecf0f1',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.sidebar}>
      <ul style={styles.navList}>
        {/* Profile Section */}
        <li style={styles.navItem}>
          <FaUser style={styles.icon} />
          <Link to="/admin/profile" style={styles.link}>Profile</Link>
        </li>
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
          <button style={styles.logoutButton} onClick={handleLogout}>
            <FaSignOutAlt style={styles.icon} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
