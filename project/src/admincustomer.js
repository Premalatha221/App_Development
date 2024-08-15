import { useEffect, useState } from "react";
import axios from "axios";

const AdminCustomers = () => {
  const [resData, setResData] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          "http://127.0.0.1:8080/api/users/readUsers",
          config
        );
        setResData(response.data);

        setUserEmail(localStorage.getItem("email"));
        setUserPassword(localStorage.getItem("password"));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Inline styles
  const cardStyle = {
    width: "25rem",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    margin: "1.5rem",
    cursor: "pointer",
  };

  const cardBodyStyle = {
    padding: "1.5rem",
  };

  const cardTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#333",
  };

  const cardTextStyle = {
    fontSize: "1rem",
    color: "#555",
  };

  return (
    <div>
      <h3 className="text-center fw-bold">All Users</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {resData.map((item) => (
          <div
            key={item.id}
            style={cardStyle}
            className="card"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={cardBodyStyle} className="card-body">
              <h5 style={cardTitleStyle} className="card-title">Name: {item.name}</h5>
              <p style={cardTextStyle} className="card-text">Email: {item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCustomers;
