
import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Toy Car', price: 10, image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fc77504a4241b40119e3e6a/9780723297055-640x640.jpg' },
  { id: 2, name: 'Doll', price: 15, image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a5880b35f70da790bb0ac/9789388416399_01-1-640x640.jpg' },
  { id: 3, name: 'Action Figure', price: 20, image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fd0a5327d0fba4d011307fa/9780241361207-640x640.jpg' }
];

const AdminProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      const newId = products.length ? products[products.length - 1].id + 1 : 1;
      setProducts([...products, { id: newId, ...newProduct }]);
      setNewProduct({ name: '', price: '', image: '' });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Inline CSS styles
  const styles = {
    container: {
      padding: '20px',
    },
    addProduct: {
      marginBottom: '20px',
    },
    input: {
      display: 'block',
      margin: '10px 0',
      padding: '10px',
      width: 'calc(100% - 22px)', 
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    productList: {
      marginTop: '20px',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: 'calc(33% - 20px)', // 3 cards per row with gap
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    },
    cardImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '10px',
      textAlign: 'center',
    },
    cardTitle: {
      margin: '10px 0',
      fontSize: '1.2rem',
    },
    cardPrice: {
      color: '#007bff',
      fontSize: '1.1rem',
    },
    deleteButton: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    deleteButtonHover: {
      backgroundColor: '#c82333',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Products</h1>
      
      <div style={styles.addProduct}>
        <h2>Add New Product</h2>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
          style={styles.input}
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Product Price"
          style={styles.input}
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleChange}
          placeholder="Product Image URL"
          style={styles.input}
        />
        <button
          onClick={handleAddProduct}
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          Add Product
        </button>
      </div>

      <div style={styles.productList}>
        <h2>Product List</h2>
        <div style={styles.cardContainer}>
          {products.map(product => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.cardImage} />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{product.name}</h3>
                <p style={styles.cardPrice}>${product.price}</p>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  style={styles.deleteButton}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.deleteButtonHover.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.deleteButton.backgroundColor}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
