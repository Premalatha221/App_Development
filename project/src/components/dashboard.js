import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.avif';
import { Link } from 'react-router-dom';
import SidebarLinks from './sidebar';
import EditProfile from './profile';

const DashBoard = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: #c3f7f3;
            color: black;
          }

          .header-logo {
            display: flex;
            align-items: center;
          }

          .header-logo img {
            height: 59px;
          }

          .header-logo h1 {
            display: inline;
            margin-left: 10px;
            margin-top: 4px;
            font-size: 30px;
          }

          .header-links {
            display: flex;
            align-items: center;
          }

          .header-links a {
            color:#ffff;
            text-decoration: none;
            margin-left: 20px;
            font-size: 20px;
          }

          .header-links i {
            font-size: 30px;
            color: white;
            margin-left: 20px;
          }

          @media (max-width: 768px) {
            .header {
              flex-direction: column;
              align-items: flex-start;
            }

            .header-logo {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .header-logo h1 {
              font-size: 60px;
              margin-top: 10px;
            }

            .header-links {
              margin-top: 10px;
            }
          }

          @media (max-width: 480px) {
            .header-logo h1 {
              font-size: 24px;
            }

            .header-links i {
              font-size: 30px;
            }
          }
        `}
      </style>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
          
        </div>
        <div className="header-links">
          <Link to="/navCategory">
            <i className="fas fa-home" style={{color:'black'}}></i>
          </Link>
        </div>
      </header>
      <SidebarLinks />
      <EditProfile/>
    </>
  );
}

export default DashBoard;