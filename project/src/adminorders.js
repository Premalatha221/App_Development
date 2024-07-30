// src/components/AdminOrders.js
import React, { useState } from 'react';

// Initial data for demonstration purposes
const initialOrders = [
  { id: 1, customerName: 'John Doe', productName: 'Toy Car', quantity: 2, totalPrice: 20 },
  { id: 2, customerName: 'Jane Smith', productName: 'Doll', quantity: 1, totalPrice: 15 },
  { id: 3, customerName: 'Emily Johnson', productName: 'Action Figure', quantity: 3, totalPrice: 60 }
];

const AdminOrders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [newOrder, setNewOrder] = useState({ customerName: '', productName: '', quantity: '', totalPrice: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleAddOrder = () => {
    if (newOrder.customerName && newOrder.productName && newOrder.quantity && newOrder.totalPrice) {
      const newId = orders.length ? orders[orders.length - 1].id + 1 : 1;
      setOrders([...orders, { id: newId, ...newOrder, quantity: parseInt(newOrder.quantity), totalPrice: parseFloat(newOrder.totalPrice) }]);
      setNewOrder({ customerName: '', productName: '', quantity: '', totalPrice: '' });
    }
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  // Inline CSS styles
  const styles = {
    container: {
      padding: '20px',
    },
    addOrder: {
      marginBottom: '20px',
    },
    input: {
      display: 'block',
      margin: '10px 0',
      padding: '10px',
      width: 'calc(100% - 22px)', // Adjust for padding
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
    orderList: {
      marginTop: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      border: '1px solid #ddd',
      padding: '8px',
      backgroundColor: '#f4f4f4',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
    },
    deleteButton: {
      padding: '5px',
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
      <h1>Orders</h1>
      
      <div style={styles.addOrder}>
        <h2>Add New Order</h2>
        <input
          type="text"
          name="customerName"
          value={newOrder.customerName}
          onChange={handleChange}
          placeholder="Customer Name"
          style={styles.input}
        />
        <input
          type="text"
          name="productName"
          value={newOrder.productName}
          onChange={handleChange}
          placeholder="Product Name"
          style={styles.input}
        />
        <input
          type="number"
          name="quantity"
          value={newOrder.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          style={styles.input}
        />
        <input
          type="number"
          name="totalPrice"
          value={newOrder.totalPrice}
          onChange={handleChange}
          placeholder="Total Price"
          style={styles.input}
        />
        <button
          onClick={handleAddOrder}
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          Add Order
        </button>
      </div>

      <div style={styles.orderList}>
        <h2>Order List</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Customer Name</th>
              <th style={styles.th}>Product Name</th>
              <th style={styles.th}>Quantity</th>
              <th style={styles.th}>Total Price</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td style={styles.td}>{order.id}</td>
                <td style={styles.td}>{order.customerName}</td>
                <td style={styles.td}>{order.productName}</td>
                <td style={styles.td}>{order.quantity}</td>
                <td style={styles.td}>${order.totalPrice.toFixed(2)}</td>
                <td style={styles.td}>
                  <button
                    onClick={() => handleDeleteOrder(order.id)}
                    style={styles.deleteButton}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.deleteButtonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.deleteButton.backgroundColor}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
