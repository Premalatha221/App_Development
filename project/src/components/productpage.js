
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './productpage.css';

const ProductPage = () => {
  const [resData, setResData] = useState([]);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [likedItems, setLikedItems] = useState(new Set());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State to track if user is an admin
  const [snackbar, setSnackbar] = useState({ show: false, message: '' });
  const navigate = useNavigate();
  const category = "toys"; // Hardcoded category to "toys"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userRole = localStorage.getItem("role"); // Assuming role is stored in localStorage
        setIsAdmin(userRole === "ADMIN"); 

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

        const filteredData = response.data.filter(product => product.category === "toys");
        setResData(filteredData);
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.productId === product.productId);
    
    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart(cart); // Update state to reflect changes
  };

  const handleAddToWishlist = (product) => {
    if (isAdmin) {
      showSnackbar("You don't have permission to add to wishlist");
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
      showSnackbar("You don't have permission to add to cart");
      return;
    }

    addToCart(product); // Use the addToCart function
    showSnackbar('Added to Cart');
  };

  const handleBuy = (product) => {
    if (isAdmin) {
      showSnackbar("You don't have permission to buy");
      return;
    }

    if (isLoggedIn) {
      addToCart(product); // Use the addToCart function
      // Pass cart data to the OrderSummaryPage
      navigate('/ordersummary', { state: { cart: [...cart, product] } });
    } else {
      navigate('/login');
    }
  };

  const showSnackbar = (message) => {
    setSnackbar({ show: true, message });
    setTimeout(() => setSnackbar({ show: false, message: '' }), 3000);
  };

  return (
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
  );
};

export default ProductPage;
