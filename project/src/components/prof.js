import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [resData, setResData] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login", { replace: true });
    window.history.pushState(null, "", window.location.origin);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, "", window.location.origin);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Fixed this line
          },
        };
        const response = await axios.get(
          "http://127.0.0.1:8080/api/users/readUsers",
          config
        );
        setResData(response.data);

        // Retrieve the email and password from localStorage
        setUserEmail(localStorage.getItem("email"));
        setUserPassword(localStorage.getItem("password"));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mb-5 fw-bold display-1">Welcome Mr. John</h1>
      <p>Email: {userEmail}</p>
      <p>Password: {userPassword}</p>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
      <h3 className="text-center fw-bold">All Users</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {resData.map((item) => (
          <div key={item.id} className="card m-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Name: {item.name}</h5>
              <p className="card-text">Email: {item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
