import React, { useState } from 'react';

const initialCustomers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
];

const AdminCustomers = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });
  const [viewCustomer, setViewCustomer] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email) {
      const newId = customers.length ? customers[customers.length - 1].id + 1 : 1;
      setCustomers([...customers, { id: newId, ...newCustomer }]);
      setNewCustomer({ name: '', email: '' });
    }
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  const handleViewCustomer = (id) => {
    const customer = customers.find(c => c.id === id);
    setViewCustomer(customer);
  };

  const handleCloseView = () => {
    setViewCustomer(null);
  };

  // Inline CSS styles
  const styles = {
    container: {
      padding: '20px',
    },
    addCustomer: {
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
      marginRight: '10px', // Add space between buttons
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    customerList: {
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
    cardContent: {
      padding: '10px',
      textAlign: 'center',
    },
    cardTitle: {
      margin: '10px 0',
      fontSize: '1.2rem',
    },
    cardEmail: {
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
    viewCustomer: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      zIndex: 1000,
    },
    closeButton: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    closeButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Customers</h1>
      
      <div style={styles.addCustomer}>
        <h2>Add New Customer</h2>
        <input
          type="text"
          name="name"
          value={newCustomer.name}
          onChange={handleChange}
          placeholder="Customer Name"
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          value={newCustomer.email}
          onChange={handleChange}
          placeholder="Customer Email"
          style={styles.input}
        />
        <button
          onClick={handleAddCustomer}
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          Add Customer
        </button>
      </div>

      <div style={styles.customerList}>
        <h2>Customer List</h2>
        <div style={styles.cardContainer}>
          {customers.map(customer => (
            <div key={customer.id} style={styles.card}>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{customer.name}</h3>
                <p style={styles.cardEmail}>{customer.email}</p>
                <div>
                  <button
                    onClick={() => handleViewCustomer(customer.id)}
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDeleteCustomer(customer.id)}
                    style={styles.deleteButton}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.deleteButtonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.deleteButton.backgroundColor}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {viewCustomer && (
        <div style={styles.viewCustomer}>
          <h2>Customer Details</h2>
          <p><strong>Name:</strong> {viewCustomer.name}</p>
          <p><strong>Email:</strong> {viewCustomer.email}</p>
          <button
            onClick={handleCloseView}
            style={styles.closeButton}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.closeButtonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.closeButton.backgroundColor}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminCustomers;
