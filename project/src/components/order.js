import React from 'react';
import NavCategory from './navCategory';

const Orders = () => {
    const orders = [
        { id: 1, orderNumber: '123456', date: '2024-07-01', status: 'Delivered', total: '$59.99' },
        { id: 2, orderNumber: '789012', date: '2024-06-15', status: 'Shipped', total: '$89.99' },
        
        
    ];

    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px',
            backgroundColor: '#c3f7f3',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        header: {
            marginBottom: '30px',
            color: '#333',
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        order: {
            marginBottom: '20px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        orderDetail: {
            marginBottom: '10px',
            fontSize: '1rem',
            color: '#555',
        }
    };

    return (
        <div>
            <NavCategory/>
            <br></br><br></br>
        <div style={styles.container}>
            <h1 style={styles.header}>Orders</h1>
            {orders.map(order => (
                <div key={order.id} style={styles.order}>
                    <div style={styles.orderDetail}><strong>Order Number:</strong> {order.orderNumber}</div>
                    <div style={styles.orderDetail}><strong>Date:</strong> {order.date}</div>
                    <div style={styles.orderDetail}><strong>Status:</strong> {order.status}</div>
                    <div style={styles.orderDetail}><strong>Total:</strong> {order.total}</div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Orders;
