
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaHeart, FaShoppingCart } from "react-icons/fa";

const UserPanel = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = () => {
        console.log("User logged out");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login"); // Redirect to the login page
    };

    const styles = {
        userPanel: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "200px",
        },
        icon: {
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "black",
            margin: "1px 1px",
        },
        profileIcon: {
            fontSize: "2.5rem",
        },
        dropdown: {
            display: dropdownVisible ? "block" : "none",
            position: "absolute",
            top: "100%",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            overflow: "hidden",
            zIndex: 1000,
            transition: "opacity 0.3s ease",
            opacity: dropdownVisible ? 1 : 0,
            whiteSpace: "nowrap",
            width: "200px",
        },
        dropdownItem: {
            padding: "12px 20px",
            textDecoration: "none",
            color: "#333",
            display: "block",
            cursor: "pointer",
        },
        hoveredDropdownItem: {
            backgroundColor: "#f9f9f9",
            color: "#327ffa",
        },
        largeIcon: {
            fontSize: "2rem",
            marginRight: "15px",
        },
        largesIcon: {
            fontSize: "2rem",
            marginLeft: "50px",
        },
    };

    if (!isLoggedIn) {
        return null; // If not logged in, do not render the UserPanel
    }

    return (
        <div style={styles.userPanel}>
            <Link to="/ordersummary">
                <FaShoppingCart style={{ ...styles.icon, ...styles.largesIcon }} />
            </Link>
            <Link to="/wishlist">
                <FaHeart style={{ ...styles.icon, ...styles.largeIcon }} />
            </Link>
            <FaUserCircle style={{ ...styles.icon, ...styles.profileIcon }} onClick={toggleDropdown} />
            <div style={styles.dropdown}>
                <Link
                    to="/dashboard"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'profile' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('profile')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    Profile
                </Link>

                <Link
                    to="/settings"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'settings' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('settings')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    Settings
                </Link>

                <Link
                    to="/"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'logout' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('logout')}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={handleLogout}
                >
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default UserPanel;


 