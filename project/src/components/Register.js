// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom"; 
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const [error, setError] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//     });

//     const [snackbar, setSnackbar] = useState({ open: false, message: '' });

//     const navigate = useNavigate(); 
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//         setError({ ...error, [name]: "" });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formErrors = {};

//         if (formData.name.trim() === "") {
//             formErrors.name = "Enter Name";
//         }
//         if (formData.email.trim() === "") {
//             formErrors.email = "Enter Email";
//         }
//         if (formData.password.trim() === "") {
//             formErrors.password = "Enter Password";
//         }
//         if (formData.confirmPassword.trim() === "") {
//             formErrors.confirmPassword = "Confirm Password";
//         } else if (formData.password !== formData.confirmPassword) {
//             formErrors.confirmPassword = "Passwords do not match";
//         }

//         setError(formErrors);
        
//         if (Object.keys(formErrors).length === 0) {
//             try {
//                 await axios.post("http://127.0.0.1:8080/api/users/createUser", {
//                     uid: 0,
//                     name: formData.name,
//                     email: formData.email,
//                     password: formData.password,
//                     roles: "USER",
//                 });

//                 setSnackbar({ open: true, message: 'Registered successfully!' });
//                 setTimeout(() => {
//                     navigate('/login'); 
//                 }, 3000);
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//     };

//     const closeSnackbar = () => {
//         setSnackbar({ open: false, message: '' });
//     };

//     const styles = {
//         outerContainer: {
//             backgroundImage: "url('https://t3.ftcdn.net/jpg/04/51/46/84/360_F_451468444_LRzT68YAIx9gxew00UTIdpsJonWeoC7Q.jpg')", 
//             backgroundSize: "cover",
//             minHeight: "100vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             paddingTop: "50px", 
//         },
//         container: {
//             maxWidth: "500px",
//             margin: "0 auto",
//             paddingRight: "80px",
//             paddingLeft: "80px",
//             border: "2px solid #E3E2E2",
//             borderRadius: "8px",
//             backgroundColor:"#B3DFE1",
//             position: "relative",
//             zIndex: 1,
//         },
//         header: {
//             textAlign: "center",
//             marginBottom: "20px",
//         },
//         label: {
//             display: "block",
//             fontWeight: "bold",
//             marginBottom: "8px"
//         },
//         input: {
//             width: "280px",
//             padding: "10px",
//             marginBottom: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "4px"
//         },
//         error: {
//             color: "red",
//             fontSize: "0.875rem",
//             margin: "0"
//         },
//         button: {
//             width: "100%",
//             padding: "10px",
//             border: "none",
//             borderRadius: "4px",
//             backgroundColor: "#007bff",
//             color: "white",
//             fontSize: "1rem",
//             cursor: "pointer",
//             transition: "background-color 0.3s"
//         },
//         buttonHover: {
//             backgroundColor: "#0056b3"
//         },
//         signInContainer: {
//             display: "block",
//             marginTop: "20px",
//             textAlign: "center"
//         },
//         signInText: {
//             color: "black"
//         },
//         signInLink: {
//             color: "#007bff",
//             textDecoration: "none"
//         },
//         snackbar: {
//             visibility: snackbar.open ? 'visible' : 'hidden',
//             minWidth: '250px',
//             backgroundColor: ' #FFDD01',
//             color: 'black',
//             textAlign: 'center',
//             borderRadius: '4px',
//             padding: '10px',
//             position: 'fixed',
//             zIndex: '1',
//             right: '30px',
//             bottom: '30px',
//             fontSize: '17px',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//         },
//         closeBtn: {
//             marginLeft: '20px',
//             cursor: 'pointer',
//             backgroundColor: 'transparent',
//             border: 'none',
//             color: 'black',
//             fontSize: '18px',
//         }
//     };

//     return (
//         <div>
//             <div style={styles.outerContainer}>
//                 <div style={styles.container}>
//                     <h1 style={styles.header}>Register</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label style={styles.label}>Name</label>
//                         <input
//                             type="text"
//                             placeholder="Enter Name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             style={styles.input}
//                         />
//                         {error.name && <p style={styles.error}>{error.name}</p>}
                        
//                         <label style={styles.label}>Email</label>
//                         <input
//                             type="email"
//                             placeholder="Enter Email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             style={styles.input}
//                         />
//                         {error.email && <p style={styles.error}>{error.email}</p>}
                    
//                         <label style={styles.label}>Password</label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             style={styles.input}
//                         />
//                         {error.password && <p style={styles.error}>{error.password}</p>}
                       
//                         <label style={styles.label}>Confirm Password</label>
//                         <input
//                             type="password"
//                             placeholder="Confirm Password"
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             style={styles.input}
//                         />
//                         {error.confirmPassword && <p style={styles.error}>{error.confirmPassword}</p>}
//                         <br />
//                         <br />
//                         <button
//                             type="submit"
//                             style={styles.button}
//                             onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
//                             onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
//                         >
//                             Register
//                         </button>
                        
//                         <div style={styles.signInContainer}>
//                             <span style={styles.signInText}>Already have an account? </span>
//                             <Link to="/login" style={styles.signInLink}>Sign In</Link><br /><br />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <div style={styles.snackbar}>
//                 {snackbar.message}
//                 <button onClick={closeSnackbar} style={styles.closeBtn}>X</button>
//             </div>
//         </div>
//     );
// }

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [snackbar, setSnackbar] = useState({ open: false, message: '' });

    const navigate = useNavigate(); 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: "" });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = {};

        if (formData.name.trim() === "") {
            formErrors.name = "Enter Name";
        }
        if (formData.email.trim() === "") {
            formErrors.email = "Enter Email";
        }
        if (formData.password.trim() === "") {
            formErrors.password = "Enter Password";
        }
        if (formData.confirmPassword.trim() === "") {
            formErrors.confirmPassword = "Confirm Password";
        } else if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match";
        }

        setError(formErrors);
        
        if (Object.keys(formErrors).length === 0) {
            try {
                await axios.post("http://127.0.0.1:8080/api/users/createUser", {
                    uid: 0,
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    roles: "USER",
                });

                setSnackbar({ open: true, message: 'Registered successfully!' });
                setTimeout(() => {
                    navigate('/login'); 
                }, 3000);
            } catch (error) {
                console.error('Error during signup:', error); // Log the entire error object
                if (error.response && error.response.data.message === 'Email already registered') {
                    setSnackbar({ open: true, message: 'Email already registered. Please use a different email.' });
                } else {
                    setSnackbar({ open: true, message: 'Email already registered. Please use a different email' });
                }
            }
        }
    };

    const closeSnackbar = () => {
        setSnackbar({ open: false, message: '' });
    };

    const styles = {
        outerContainer: {
            backgroundImage: "url('https://t3.ftcdn.net/jpg/04/51/46/84/360_F_451468444_LRzT68YAIx9gxew00UTIdpsJonWeoC7Q.jpg')", 
            backgroundSize: "cover",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px", 
        },
        container: {
            maxWidth: "500px",
            margin: "0 auto",
            paddingRight: "80px",
            paddingLeft: "80px",
            border: "2px solid #E3E2E2",
            borderRadius: "8px",
            backgroundColor:"#B3DFE1",
            position: "relative",
            zIndex: 1,
        },
        header: {
            textAlign: "center",
            marginBottom: "20px",
        },
        label: {
            display: "block",
            fontWeight: "bold",
            marginBottom: "8px"
        },
        input: {
            width: "280px",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px"
        },
        error: {
            color: "red",
            fontSize: "0.875rem",
            margin: "0"
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
            transition: "background-color 0.3s"
        },
        buttonHover: {
            backgroundColor: "#0056b3"
        },
        signInContainer: {
            display: "block",
            marginTop: "20px",
            textAlign: "center"
        },
        signInText: {
            color: "black"
        },
        signInLink: {
            color: "#007bff",
            textDecoration: "none"
        },
        snackbar: {
            visibility: snackbar.open ? 'visible' : 'hidden',
            minWidth: '250px',
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
        closeBtn: {
            marginLeft: '10px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'black',
            fontSize: '18px',
        }
    };

    return (
        <div>
            <div style={styles.outerContainer}>
                <div style={styles.container}>
                    <h1 style={styles.header}>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label style={styles.label}>Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        {error.name && <p style={styles.error}>{error.name}</p>}
                        
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
                       
                        <label style={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        {error.confirmPassword && <p style={styles.error}>{error.confirmPassword}</p>}
                        <br />
                        <br />
                        <button
                            type="submit"
                            style={styles.button}
                            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                        >
                            Register
                        </button>
                        
                        <div style={styles.signInContainer}>
                            <span style={styles.signInText}>Already have an account? </span>
                            <Link to="/login" style={styles.signInLink}>Sign In</Link><br /><br />
                        </div>
                    </form>
                </div>
            </div>
            {snackbar.open && (
                <div style={styles.snackbar}>
                    {snackbar.message}
                    <button onClick={closeSnackbar} style={styles.closeBtn}>X</button>
                </div>
            )}
        </div>
    );
}

export default Signup;
