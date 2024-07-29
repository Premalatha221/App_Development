import React from 'react';
import { Link } from 'react-router-dom';
import NavCategory from './navCategory';


const ProfilePage = () => {
    const user = {
        name: "Prema",
        email: "Prema@gmail.com",
        joined: "April 13, 2024",
        photo: "https://cdn4.sharechat.com/sc_compressed_gm_40_j8ghfMzY2MDE0MDY2NQ.jpg?tenant=sc&referrer=pwa-sharechat-service&f=MDY2NQ.jpg" // Placeholder image URL, replace with actual photo URL
    };

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "0 auto",
            padding: "40px",
            backgroundColor: "#c3f7f3",
            borderRadius: "10px",
            
        },
        header: {
            marginBottom: "30px",
            color: "#333",
            fontSize: "2rem",
            fontWeight: "bold",
        },
        userInfo: {
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // marginBottom: "30px",
            padding: "20px",
            // backgroundColor: "#fff",
            // borderRadius: "10px",
            // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        profilePhoto: {
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginBottom: "20px",
        },
        userDetail: {
            marginBottom: "15px",
            fontSize: "1.2rem",
            color: "#555",
        },
        button: {
            padding: "12px 25px",
            margin: "15px",
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "#007bff",
            borderRadius: "5px",
            fontSize: "1rem",
        },
        linkContainer: {
            textAlign: "center",
        },
        background: {
            backgroundColor: "#c3f7f3",
            
        },
    };

    return (
        <div>
            <NavCategory/>
            <br></br><br></br>
            <div style={styles.background}></div>
            <div style={styles.container}>
                <h1 style={styles.header}>Personal Information</h1>
                <div style={styles.userInfo}>
                    <img src={user.photo} alt="Profile" style={styles.profilePhoto} />
                    <div style={styles.userDetail}><strong>Name:</strong> {user.name}</div>
                    <div style={styles.userDetail}><strong>Email:</strong> {user.email}</div>
                    <div style={styles.userDetail}><strong>Joined:</strong> {user.joined}</div>
                </div>
                <div style={styles.linkContainer}>
                    <Link to="/edit-profile" style={styles.button}>Edit Profile</Link>
                    <Link to="/change-password" style={styles.button}>Change Password</Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
