// import { useEffect, useState } from "react";
// import axios from "axios";
// import { TextField, Button, Box } from "@mui/material";

// const AdminProducts = () => {
//   const [resData, setResData] = useState([]);
//   const [productData, setProductData] = useState({
//     productName: '',
//     productPrice: '',
//     imageUrl: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const response = await axios.get("http://127.0.0.1:8080/api/products", config);
//         setResData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({
//       ...productData,
//       [name]: value,
//     });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const token = localStorage.getItem('token');
//   //   const config = {
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   };

//   //   try {
//   //     if (isEditing) {
//   //       await axios.put(`http://127.0.0.1:8080/api/products/${productId}`, productData, config);
//   //     } else {
//   //       await axios.post('http://127.0.0.1:8080/api/products', productData, config);
//   //     }

//   //     // Refresh the product list after adding/updating a product
//   //     const response = await axios.get("http://127.0.0.1:8080/api/products", config);
//   //     setResData(response.data);

//   //     // Reset form and editing state
//   //     setProductData({
//   //       productName: '',
//   //       productPrice: '',
//   //       imageUrl: ''
//   //     });
//   //     setIsEditing(false);
//   //     setEditProductId(null);

//   //   } catch (error) {
//   //     console.error('Error adding/updating product:', error.message);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     };
  
//     try {
//       if (isEditing && editProductId) {
//         // Update existing product
//         await axios.put(`http://127.0.0.1:8080/api/products/${editProductId}`, productData, config);
//       } else {
//         // Add new product
//         await axios.post('http://127.0.0.1:8080/api/products', productData, config);
//       }
  
//       // Refresh the product list after adding/updating a product
//       const response = await axios.get("http://127.0.0.1:8080/api/products", config);
//       setResData(response.data);
  
//       // Reset form and editing state
//       setProductData({
//         productName: '',
//         productPrice: '',
//         imageUrl: ''
//       });
//       setIsEditing(false);
//       setEditProductId(null);
  
//     } catch (error) {
//       console.error('Error adding/updating product:', error.message);
//     }
//   };
  
//   const handleDelete = async (productId) => {
//     try {
//       const token = localStorage.getItem('token');
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       await axios.delete(`http://127.0.0.1:8080/api/products/${productId}`, config);

//       // Update the product list after deletion
//       setResData(resData.filter((item) => item.productId !== productId));
//     } catch (error) {
//       console.error('Error deleting product:', error.message);
//     }
//   };

//   const handleEdit = (product) => {
//     setProductData({
//       productName: product.productName,
//       productPrice: product.productPrice,
//       imageUrl: product.imageUrl,
//     });
//     setIsEditing(true);
//     setEditProductId(product.productId);
//   };

//   return (
//     <div style={{ background: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <h1 style={{ marginBottom: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
//         {isEditing ? 'Edit Product' : 'Add Product'}
//       </h1>
      
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, mb: 5, width: '100%', maxWidth: '600px' }}>
//         <TextField
//           name="productName"
//           label="Product Name"
//           value={productData.productName}
//           onChange={handleChange}
//           fullWidth
//           required
//           sx={{ mb: 2, maxWidth: '500px' }}
//         />
//         <TextField
//           name="productPrice"
//           label="Product Price"
//           type="number"
//           value={productData.productPrice}
//           onChange={handleChange}
//           fullWidth
//           required
//           sx={{ mb: 2, maxWidth: '500px' }}
//         />
//         <TextField
//           name="imageUrl"
//           label="Product Image URL"
//           value={productData.imageUrl}
//           onChange={handleChange}
//           fullWidth
//           required
//           sx={{ mb: 2, maxWidth: '500px' }}
//         />
//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//           {isEditing ? 'Update Product' : 'Add Product'}
//         </Button>
//       </Box>

//       <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' }}>All Products</h3>
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         gap: '1rem',
//         width: '100%',
//         maxWidth: '1200px'
//       }}>
//         {resData.map((item) => (
//           <div key={item.productId} style={{
//             border: '1px solid #ddd',
//             borderRadius: '8px',
//             overflow: 'hidden',
//             background: '#fff',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             width: '300px'
//           }}>
//             <img src={item.imageUrl} alt={item.productName} style={{
//               width: '100%',
//               height: 'auto',
//               display: 'block'
//             }} />
//             <div style={{ padding: '1rem' }}>
//               <h5 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.productName}</h5>
//               <p style={{ fontSize: '1rem', color: '#333' }}>₹ {item.productPrice}</p>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleEdit(item)}
//                 sx={{ mt: 2, mr: 1 }}
//               >
//                 Edit
//               </Button>
//               <Button
//                 variant="contained"
//                 color="error"
//                 onClick={() => handleDelete(item.productId)}
//                 sx={{ mt: 2 }}
//               >
//                 Delete
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default AdminProducts;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 

const AdminProducts = () => {
  const [resData, setResData] = useState([]);
  const [productData, setProductData] = useState({
    productName: '',
    productPrice: '',
    imageUrl: '',
    category: '' // Include category in the state
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

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
        const response = await axios.get("http://127.0.0.1:8080/api/products", config);
        setResData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      if (isEditing && editProductId) {
        // Update existing product
        await axios.put(`http://127.0.0.1:8080/api/products/${editProductId}`, productData, config);
      } else {
        // Add new product
        await axios.post('http://127.0.0.1:8080/api/products', productData, config);
      }

      // Refresh the product list after adding/updating a product
      const response = await axios.get("http://127.0.0.1:8080/api/products", config);
      setResData(response.data);

      // Reset form and editing state
      setProductData({
        productName: '',
        productPrice: '',
        imageUrl: '',
        category: '' // Reset category as well
      });
      setIsEditing(false);
      setEditProductId(null);

    } catch (error) {
      console.error('Error adding/updating product:', error.message);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`http://127.0.0.1:8080/api/products/${productId}`, config);

      // Update the product list after deletion
      setResData(resData.filter((item) => item.productId !== productId));
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  const handleEdit = (product) => {
    setProductData({
      productName: product.productName,
      productPrice: product.productPrice,
      imageUrl: product.imageUrl,
      category: product.category // Set the category
    });
    setIsEditing(true);
    setEditProductId(product.productId);
    
    // Navigate based on category
    if (product.category === 'games') {
      navigate('/games'); // Replace '/games' with the actual route for games
    }
  };

  return (
    <div style={{ background: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
        {isEditing ? 'Edit Product' : 'Add Product'}
      </h1>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, mb: 5, width: '100%', maxWidth: '600px' }}>
        <TextField
          name="productName"
          label="Product Name"
          value={productData.productName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px' }}
        />
        <TextField
          name="productPrice"
          label="Product Price"
          type="number"
          value={productData.productPrice}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px' }}
        />
        <TextField
          name="imageUrl"
          label="Product Image URL"
          value={productData.imageUrl}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px' }}
        />
        <TextField
          name="category"
          label="Category"
          value={productData.category}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px' }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          {isEditing ? 'Update Product' : 'Add Product'}
        </Button>
      </Box>

      <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' }}>All Products</h3>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {resData.map((item) => (
          <div key={item.productId} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '300px'
          }}>
            <img src={item.imageUrl} alt={item.productName} style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }} />
            <div style={{ padding: '1rem' }}>
              <h5 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.productName}</h5>
              <p style={{ fontSize: '1rem', color: '#333' }}>₹ {item.productPrice}</p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEdit(item)}
                sx={{ mt: 2, mr: 1 }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(item.productId)}
                sx={{ mt: 2 }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;

