import React, { useState } from 'react';
import UserPanel from './userpanel';
import NavCategory from './navCategory';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        { id: 1, name: 'Item 1', description: 'Disney Frozen Elsa Fashion Doll', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66607086e5690abc29a3492d/screenshot-2024-06-05-at-7-33-19-pm-480x480.png' },
        { id: 2, name: 'Item 2', description: 'Mirada Tom 25cm', image: 'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/61e9a39cd6c688326a49752a/copy-of-toy-store-62--640x640.png' },
        
    ]);

    const removeItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

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
        item: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        itemImage: {
            width: '100px',
            height: '100px',
            marginRight: '20px',
        },
        itemDetails: {
            flex: 1,
        },
        itemName: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
        },
        itemDescription: {
            fontSize: '1rem',
            color: '#555',
        },
        button: {
            padding: '10px 20px',
            textDecoration: 'none',
            color: 'white',
            backgroundColor: '#007bff',
            borderRadius: '5px',
            cursor: 'pointer',
        }
    };

    return (
        <div>
            <NavCategory/>
            <br></br><br></br>
        <div style={styles.container}>
            <h1 style={styles.header}>Wishlist</h1>
            {wishlistItems.map(item => (
                <div key={item.id} style={styles.item}>
                    <img src={item.image} alt={item.name} style={styles.itemImage} />
                    <div style={styles.itemDetails}>
                        <div style={styles.itemName}>{item.name}</div>
                        <div style={styles.itemDescription}>{item.description}</div>
                    </div>
                    <button style={styles.button} onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Wishlist;
