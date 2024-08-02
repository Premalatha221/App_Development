// src/components/WishlistPage.js

import React from 'react';

const WishlistPage = ({ wishlist }) => {
  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <ul>
          {wishlist.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="wishlist-image" />
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
