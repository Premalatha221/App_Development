import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from './assets/images/logo.avif';
import AdminSidebar from './adminsidebar';

const AdminLayout = () => {
  const styles = {
    layout: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'row',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#c3f7f3',
      color: 'black',
      position: 'fixed',
      width: '100%',
      top: '0',
      zIndex: 1000,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
    },
    logoImage: {
      height: '59px',
    },
    logoText: {
      marginLeft: '10px',
      marginTop: '4px',
      fontSize: '30px',
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
    },
    link: {
      color: 'blue',
      textDecoration: 'none',
      fontSize: '20px',
    },
    icon: {
      fontSize: '30px',
      color: 'white',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '20px',
      position: 'fixed',
      top: '80px',
      height: 'calc(100% - 80px)',
    },
    content: {
      marginLeft: '250px',
      padding: '20px',
      width: 'calc(100% - 250px)',
      marginTop: '80px',
    },
  };

  return (
    <div style={styles.layout}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <img src={logo} alt="Logo" style={styles.logoImage} />
        </div>
        <div style={styles.links}>
          <a href="/navCategory" style={styles.link}>
            <i className="fa fa-home" style={styles.icon}></i>
          </a>
        </div>
      </header>
      <div style={styles.sidebar}>
        <AdminSidebar />
      </div>
      <div style={styles.content}>
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminLayout;
