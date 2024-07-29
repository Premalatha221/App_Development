import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import baby from '../assets/images/baby.jpg'; 

const EditProfile = () => {
  const [name, setName] = useState('Prema');
  const [email, setEmail] = useState('Prema@gmail.com');
  const [password, setPassword] = useState('*****');

  const handleEditProfile = () => {
    
    console.log('Profile updated:', { name, email, password });
  };

  return (
    <div className="edit-profile-container">
      <style>
        {`
          .edit-profile-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: white;
            color: #333;
            box-shadow: 0 0 10px #c3f7f3;
            max-width: 600px;
            margin: 20px auto;
            margin-top: 90px;
            margin-right: 300px;
          }

          .profile-photo-container {
            position: relative;
            width: 140px;
            height: 140px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 20px;
          }

          .profile-photo {
            width: 100%;
            height: auto;
          }

          .edit-options {
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin-bottom: 20px;
          }

          .edit-options button {
            background-color: white;
            color: black;/*----8*/
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          }

          .edit-options button:hover {
            background-color: #c3f7f3;
            color: black;
          }

          .info-group {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 15px;
          }

          .info-text {
            font-size: 16px;
            color: #333;
            margin-right: 10px; /* Adjusted for less space */
            width: 30%; /* Adjust as needed */
            text-align: left; /* Align text to the left */
          }

          .info-value {
            font-size: 16px;
            color: #333;
            border-bottom: 1px solid #ccc;
            padding: 2px 0;
            width: calc(70% - 10px); /* Adjust for less space */
            margin-left: 0; /* Remove any extra margin */
          }

          .edit-profile-button {
            background-color: #c3f7f3;
            color: black;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          }

          .edit-profile-button:hover {
            background-color: white;
            color:black;/*---*/
          }
        `}
      </style>
      <div className="profile-photo-container">
        <img src={baby} alt="Profile" className="profile-photo" />
      </div>
      <div className="edit-options">
        <button>Edit Photo</button>
      </div>
      <div className="info-group">
        <div className="info-text">Name:</div>
        <div className="info-value">{name}</div>
      </div>
      <div className="info-group">
        <div className="info-text">Email:</div>
        <div className="info-value">{email}</div>
      </div>
      <div className="info-group">
        <div className="info-text">Password:</div>
        <div className="info-value">{password}</div>
      </div>
      <button className="edit-profile-button" onClick={handleEditProfile}>
        Edit Profile
      </button>
    </div>
  );
}

export default EditProfile;