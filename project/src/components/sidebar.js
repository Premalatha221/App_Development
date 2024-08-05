import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import baby from '../assets/images/baby.jpg'; 

const SidebarLinks = () => {
  return (
    <div className="sidebar-container">
      <style>
        {`
          .sidebar-container {
            position: fixed;
            left: 0;
            top: 99px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: white; 
            color: white; 
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

          .sidebar-link {
            position: relative;
            margin-bottom: 20px; /* Increased margin below each link */
            font-size: 18px;
            color: black; /* Default text color -------*/
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px;
            transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
          }

          .sidebar-link i {
            font-size: 24px; /* Adjust icon size as needed */
            margin-right: 10px; /* Space between icon and text */
            transition: color 0.3s; /* Smooth transition for hover effect */
          }

          .link-text {
            transition: color 0.3s; /* Smooth transition for hover effect */
          }

          .sidebar-link:hover {
            background-color: #c3f7f3; /* Background color on hover---- */
            color: black; /* Text color on hover */
          }

          .sidebar-link:hover i {
            color: black; /* Icon color on hover */
          }

          .sidebar-link:hover .link-text {
            color: black; /* Text color on hover */
          }

          .side-link {
            position: relative;
            margin-bottom: 20px; /* Increased margin below each link */
            font-size: 18px;
            color: black; /* Text color */
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px;
            background-color: #c3f7f3; /* Background color */
            transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
          }

          .side-link i {
            font-size: 24px; /* Adjust icon size as needed */
            margin-right: 10px; /* Space between icon and text */
            color: black; /* Icon color */
            transition: color 0.3s; /* Smooth transition for hover effect */
          }

          .side-link:hover {
            background-color: #c3f7f3; /* Darker background color on hover */
            color: black; /* Text color on hover */
          }

          .side-link:hover i {
            color: black; /* Icon color on hover */
          }

          .side-link:hover .link-text {
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

            .sidebar-link i, .side-link i {
              font-size: 20px;
            }

            .sidebar-link, .side-link {
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

            .sidebar-link i, .side-link i {
              font-size: 18px;
            }

            .sidebar-link, .side-link {
              font-size: 14px;
              margin-bottom: 12px; /* Increased margin below each link for smaller screens */
            }
          }
        `}
      </style>
      <div className="profile-photo-container">
        <img src={baby} alt="Profile" className="profile-photo" />
      </div>
      <Link to="/dashboard" className="side-link">
        <i className="fas fa-user"></i>
        <span className="link-text">Profile</span>
      </Link>
      <Link to="/board" className="sidebar-link">
        <i className="fas fa-tachometer-alt"></i>
        <span className="link-text">Dashboard</span>
      </Link>
      <Link to="/wishlist" className="sidebar-link">
        <i className="fas fa-heart"></i>
        <span className="link-text">Wishlist</span>
      </Link>
      <Link to="/orders" className="sidebar-link">
        <i className="fas fa-box"></i>
        <span className="link-text">Orders</span>
      </Link>
    </div>
  );
}

export default SidebarLinks;