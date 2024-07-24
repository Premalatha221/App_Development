import { useRef, useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: "" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = {};
        
        if (formData.username.trim() === "") {
            formErrors.username = "Enter Username";
        }
        if (formData.email.trim() === "") {
            formErrors.email = "Enter Email";
        }
        if (formData.password.trim() === "") {
            formErrors.password = "Enter Password";
        }
        if (formData.confirmPassword.trim() === "") {
            formErrors.confirmPassword = "Confirm your Password";
        } else if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match";
        }

        setError(formErrors);

        if (Object.keys(formErrors).length === 0) {
            console.log(formData);
            // You can proceed with further actions like API call for registration
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {error.username && <p style={{ color: "red" }}>{error.username}</p>}
                <br /><br />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}
                <br /><br />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {error.password && <p style={{ color: "red" }}>{error.password}</p>}
                <br /><br />

                <label>Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {error.confirmPassword && <p style={{ color: "red" }}>{error.confirmPassword}</p>}
                <br /><br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
