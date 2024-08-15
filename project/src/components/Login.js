import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState({
        email: "",
        password: "",
    });
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarType, setSnackbarType] = useState("success");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/navCategory"); 
        }
    }, [navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: "" });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = {};
        if (formData.email.trim() === "") {
            formErrors.email = "Enter Email";
        }
        if (formData.password.trim() === "") {
            formErrors.password = "Enter Password";
        }
        setError(formErrors);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8080/api/auth/authenticate",
                    formData
                );
                
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role); 
                setSnackbarMessage("You have successfully logged in");
                setSnackbarType("success");
                setShowSnackbar(true);

                setTimeout(() => {
                    const userRole = response.data.role;
                    if (userRole === 'ADMIN') {
                        navigate("/admin/profile"); 
                    } else {
                        navigate("/navCategory"); 
                    }
                }, 1000); 
            } catch (error) {
                console.error(error);
                setSnackbarMessage("Incorrect username or password");
                setSnackbarType("danger");
                setShowSnackbar(true);
            }
        }
    };

    const styles = {
        outerContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundImage: "url('https://t4.ftcdn.net/jpg/06/81/45/85/360_F_681458513_QKGi3lGAWX2TGVP6UfQwpS87hZRKpdCl.jpg')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        container: {
            maxWidth: "400px",
            width: "100%",
            padding: "20px",
            border: "3px solid #E3E2E2",
            borderRadius: "8px",
            backgroundColor: "#C9EFF1",
            textAlign: "center",
            position: "relative",
        },
        header: {
            marginBottom: "20px",
        },
        label: {
            display: "block",
            fontWeight: "bold",
            marginBottom: "8px",
        },
        input: {
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
        },
        inputFocus: {
            borderColor: "#007bff",
            outline: "none",
        },
        error: {
            color: "red",
            fontSize: "0.875rem",
            margin: "0",
        },
        button: {
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
        },
        buttonHover: {
            backgroundColor: "#0056b3",
        },
        signupLink: {
            marginTop: "15px",
            fontSize: "0.875rem",
        },
        link: {
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "bold",
        },
        snackbar: {
            width: '300px',
            backgroundColor: '#FFDD01',
            color: 'black',
            textAlign: 'center',
            borderRadius: '4px',
            padding: '10px',
            position: 'fixed',
            zIndex: '1',
            right: '30px',
            bottom: '30px',
            fontSize: '17px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        closeButton: {
            marginLeft: '10px', // Adjust spacing as needed
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'black',
            fontSize: '10px', // Set the font size to 10px for the close button
            lineHeight: '1', // Ensure the button height is aligned with the text
            display: 'flex',
            alignItems: 'center',
        }
    };

    return (
        <div style={styles.outerContainer}>
            {showSnackbar && (
                <div
                    className={`alert alert-${snackbarType} alert-dismissible fade show`}
                    role="alert"
                    style={styles.snackbar}
                >
                    {snackbarMessage}
                    <button
                        type="button"
                        className="btn-close"
                        style={styles.closeButton}
                        onClick={() => setShowSnackbar(false)}
                    >
                        &times;
                    </button>
                </div>
            )}
            <div style={styles.container}>
                <h1 style={styles.header}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label style={styles.label}>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {error.email && <p style={styles.error}>{error.email}</p>}
                    <label style={styles.label}>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {error.password && <p style={styles.error}>{error.password}</p>}
                    <br /><br />
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Login
                    </button>
                </form>
                <div style={styles.signupLink}>
                    <p>Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
