import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './productpage.css';
import CommonNav from './commonNav'; // Adjust the path if needed
import Navbar from './Navbar';       // Adjust the path if needed

const BarbiePage = () => { 
  const [resData, setResData] = useState([]);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [likedItems, setLikedItems] = useState(new Set());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // New state for admin check
  const [snackbar, setSnackbar] = useState({ show: false, message: '' });
  const navigate = useNavigate();
  const category = "barbie"; // Change category to "barbie"

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

        const url = `http://127.0.0.1:8080/api/products?category=${category}`;
        console.log("Fetching from URL:", url); 

        const response = await axios.get(url, config);
        console.log("Response data:", response.data); 

        const filteredData = response.data.filter(product => product.category === "barbie");
        setResData(filteredData);
        setIsLoggedIn(!!token);

        // Fetch user details to check if they are an admin
        const userResponse = await axios.get('http://127.0.0.1:8080/api/user', config);
        setIsAdmin(userResponse.data.role === 'ADMIN'); // Assuming the user role is stored in 'role'
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []); 

  const handleAddToWishlist = (product) => {
    if (isAdmin) {
      showSnackbar("You don't have permission");
      return;
    }
    setWishlist((prevWishlist) => {
      const isItemInWishlist = likedItems.has(product.productId);
      const updatedWishlist = isItemInWishlist
        ? prevWishlist.filter(item => item.productId !== product.productId)
        : [...prevWishlist, product];

      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setLikedItems((prevLiked) => {
        const updatedLiked = new Set(prevLiked);
        isItemInWishlist ? updatedLiked.delete(product.productId) : updatedLiked.add(product.productId);
        return updatedLiked;
      });

      showSnackbar(isItemInWishlist ? 'Removed from Wishlist' : 'Added to Wishlist');
      return updatedWishlist;
    });
  };

  const handleAddToCart = (product) => {
    if (isAdmin) {
      showSnackbar("You don't have permission");
      return;
    }
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      showSnackbar('Added to Cart');
      return updatedCart;
    });
  };

  const handleBuy = (product) => {
    if (isAdmin) {
      showSnackbar("You don't have permission");
      return;
    }
    if (isLoggedIn) {
      handleAddToCart(product);
      navigate('/ordersummary');
    } else {
      navigate('/login');
    }
  };

  const showSnackbar = (message) => {
    setSnackbar({ show: true, message });
    setTimeout(() => setSnackbar({ show: false, message: '' }), 3000);
  };

  return (
    <div>
      <CommonNav /> {/* CommonNav component */}
      <Navbar />    {/* Navbar component */}
      <div className="product-page">
        <div className="product-grid">
          {resData.map((item) => (
            <div key={item.productId} className="product-card">
              <img src={item.imageUrl} alt={item.productName} className="product-image" />
              <div className="product-info">
                <h5 className="product-name">{item.productName}</h5>
                <p className="product-description">₹ {item.productPrice}</p>
                <div className="product-actions">
                  <FaHeart
                    className={`icon ${likedItems.has(item.productId) ? 'liked' : ''}`}
                    onClick={() => handleAddToWishlist(item)}
                  />
                  <FaShoppingCart className="icon" onClick={() => handleAddToCart(item)} />
                  <button className="buy-button" onClick={() => handleBuy(item)}>
                    {isLoggedIn ? 'Buy Now' : 'Login to Buy'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {snackbar.show && (
          <div className="snackbar">
            {snackbar.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default BarbiePage;
