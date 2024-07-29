import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.avif';
import baby from '../assets/images/baby.jpg'; // Ensure the correct path to your profile photo

const ProfileOrder = () => {
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
            color: black;
            text-decoration: none;
            margin-left: 20px;
            font-size: 20px;
          }

          .header-links i {
            font-size: 30px;
            color: black;
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

          .sidebar-container {
            position: fixed;
            left: 0;
            top: 99px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: white; 
            color: black; 
            height: 100vh;
            width: 300px; 
            box-shadow: -2px 0 10px #c3f7f3;
          }

          .profile-photo-container {
            width: 140px; /* Adjust size as needed */
            height: 140px; /* Adjust size as needed */
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%; /* Makes the container circular */
            margin-top: 18px; /* Increased space from the top */
            margin-bottom: 40px; /* Increased space below the icon */
            overflow: hidden; /* Ensures the photo fits within the circle */
          }

          .profile-photo {
            width: 100%; /* Ensures the photo covers the container */
            height: auto; /* Maintains the aspect ratio */
          }

          .sidebar-link,.side-link {
            position: relative;
            margin-bottom: 20px; /* Increased margin below each link */
            font-size: 18px;
            color: #c3f7f3;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px;
            transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
          }

          .sidebar-link:hover {
            background-color: #c3f7f3; /* Background color on hover */
            color:black; /* Text color on hover */
          }

          .sidebar-link i,.side-link i {
            font-size: 24px; /* Adjust icon size as needed */
            margin-right: 10px; /* Space between icon and text */
            transition: color 0.3s; /* Smooth transition for hover effect */
          }

          .sidebar-link:hover i {
            color: black; /* Icon color on hover */
          }

          .link-text {
            color: black;
            transition: color 0.3s; /* Smooth transition for hover effect */
          }

          .sidebar-link:hover .link-text {
            color: black; /* Text color on hover */
          }

          @media (max-width: 768px) {
            .sidebar-container {
              padding: 10px;
              width: 150px; /* Adjust width for smaller screens */
            }

            .profile-photo-container {
              width: 60px;
              height: 60px;
              margin-top: 60px; /* Increased space from the top for smaller screens */
            }

            .sidebar-link i,.side-link i {
              font-size: 20px;
            }

            .sidebar-link,.side-link {
              font-size: 16px;
              margin-bottom: 15px; /* Increased margin below each link */
            }
          }

          @media (max-width: 480px) {
            .sidebar-container {
              width: 120px; /* Adjust width for smaller screens */
            }

            .profile-photo-container {
              width: 50px;
              height: 50px;
              margin-top: 40px; /* Increased space from the top for smaller screens */
            }

            .profile-photo {
              font-size: 25px;
            }

            .sidebar-link i {
              font-size: 18px;
            }

            .sidebar-link,.side-link {
              font-size: 14px;
              margin-bottom: 12px; /* Increased margin below each link for smaller screens */
            }
          }

          .wishlist-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: white;
            color: #333;
            max-width: 600px;
            margin: 20px auto;
            box-shadow: 0 0 10px #c3f7f3;
            text-align: center;
            margin-top:200px;
            margin-left:600px;
            
          }

          .wishlist-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .empty-message {
            font-size: 18px;
            color: #888;
            margin-bottom: 20px;
          }

          .continue-shopping-button {
            background-color: #c3f7f3;
            color: black;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          }

          .continue-shopping-button:hover {
            background-color: white;
            color:black;
          }
        `}
      </style>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
          
        </div>
        <div className="header-links">
          <Link to="/navCategory">
            <i className="fas fa-home"></i>
          </Link>
        </div>
      </header>
      <div className="sidebar-container">
        <div className="profile-photo-container">
          <img src={baby} alt="Profile" className="profile-photo" />
        </div>
        <Link to="/dashboard" className="sidebar-link"style={{ color: 'black'}}>
          <i className="fas fa-user"></i>
          <span className="link-text">Profile</span>
        </Link>
        <Link to="/dashboard" className="sidebar-link" style={{ color: 'black'}}>
          <i className="fas fa-tachometer-alt"></i>
          <span className="link-text">Dashboard</span>
        </Link>
        <Link to="/profilewish" className="sidebar-link" style={{ color: 'black'}}>
          <i className="fas fa-heart"></i>
          <span className="link-text">Wishlist</span>
        </Link>
        <Link to="/orders" className="side-link" style={{ color: 'black', backgroundColor: '#c3f7f3' }}>
          <i className="fas fa-box"></i>
          <span className="link-text" style={{ color: 'black' }}>Orders</span>
        </Link>
      </div>
      <div className="wishlist-container">
        <div className="wishlist-title">Your Orders</div>
        <div className="empty-message">No Orders Yet!</div>
        <button className="continue-shopping-button" onClick={() => console.log('Continue shopping')}>
          Continue Shopping
        </button>
      </div>
    </>
  );
}

export default ProfileOrder;