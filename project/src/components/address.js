import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CommonNav from './commonNav'; // Adjust the import path as needed

const AddressPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pincode: '',
    address: '',
    city: '',
    state: '',
    email: ''
  });

  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const apiUrl = "http://127.0.0.1:8080/api/buy";
  const token = localStorage.getItem('token');
  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(`${apiUrl}/get/buy/email/${encodeURIComponent(userEmail)}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setAddresses(response.data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
        setError('Failed to fetch addresses.');
      }
    };

    if (userEmail) {
      fetchAddresses();
    }
  }, [token, userEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`${apiUrl}/put/${editingAddressId}`, formData, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setAddresses(addresses.map(address =>
          address.aid === editingAddressId ? { ...formData, aid: editingAddressId } : address
        ));
      } else {
        await axios.post(apiUrl, formData, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setAddresses([...addresses, { ...formData, aid: addresses.length + 1 }]);
      }
      setFormData({
        name: '',
        mobile: '',
        pincode: '',
        address: '',
        city: '',
        state: '',
        email: ''
      });
      setIsModalOpen(false);
      setEditMode(false);
    } catch (error) {
      console.error('Error saving address:', error);
      setError('Failed to save address.');
    }
  };

  const handleAddNew = () => {
    setFormData({
      name: '',
      mobile: '',
      pincode: '',
      address: '',
      city: '',
      state: '',
      email: ''
    });
    setIsModalOpen(true);
    setEditMode(false);
  };

  const handleEdit = (address) => {
    setFormData(address);
    setEditingAddressId(address.aid);
    setIsModalOpen(true);
    setEditMode(true);
  };

  const handleDeliverHere = (address) => {
    localStorage.setItem('selectedAddress', JSON.stringify(address));
    navigate('/payment');
  };

  const deleteAddress = async (aid) => {
    try {
      await axios.delete(`${apiUrl}/delete/${aid}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setAddresses(addresses.filter(address => address.aid !== aid));
    } catch (error) {
      console.error('Error deleting address:', error);
      setError('Failed to delete address.');
    }
  };

  return (
    <>
      <CommonNav/> {/* Add this line to include the navbar */}

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        // backgroundColor: '#f4f4f4',
        minHeight: '100vh'
      }}>
        <div style={{
          // backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '800px',
          marginBottom: '20px'
        }}>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>Saved Addresses</h2>
          <button
            onClick={handleAddNew}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            Add New Address
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {addresses.length > 0 ? (
            <div>
              {addresses.map(address => (
                <div
                  key={address.aid}
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '15px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    marginBottom: '10px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <p><strong>Name:</strong> {address.name}</p>
                  <p><strong>Mobile:</strong> {address.mobile}</p>
                  <p><strong>Pincode:</strong> {address.pincode}</p>
                  <p><strong>Address:</strong> {address.address}</p>
                  <p><strong>City:</strong> {address.city}</p>
                  <p><strong>State:</strong> {address.state}</p>
                  <p><strong>Email:</strong> {address.email}</p>
                  <div style={{ marginTop: '10px' }}>
                    <button
                      onClick={() => handleDeliverHere(address)}
                      style={{
                        padding: '8px 15px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',
                        marginRight: '10px'
                      }}
                    >
                      Deliver Here
                    </button>
                    <button
                      onClick={() => handleEdit(address)}
                      style={{
                        padding: '8px 15px',
                        backgroundColor: '#ffc107',
                        color: 'white',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',
                        marginRight: '10px'
                      }}
                    >
                      Edit Address
                    </button>
                    <button
                      onClick={() => deleteAddress(address.aid)}
                      style={{
                        padding: '8px 15px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Delete Address
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No addresses found.</p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <>
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '500px',
            zIndex: 1000
          }}>
            <h2>{editMode ? 'Edit Address' : 'Add New Address'}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  width: '100%',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  width: '100%',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  width: '100%',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  boxSizing: 'border-box'
                }}
              />
              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  width: '100%',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  boxSizing: 'border-box',
                  minHeight: '80px'
                }}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  width: '100%',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  width: '100%',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  width: '100%',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  boxSizing: 'border-box'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                {editMode ? 'Update Address' : 'Add Address'}
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '10px'
                }}
              >
                Cancel
              </button>
            </form>
          </div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 999
            }}
            onClick={() => setIsModalOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default AddressPage;
