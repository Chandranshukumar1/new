// ProductCard.js

import React from 'react';
import './ProductCard.css'; // Import the associated CSS file

const ProductCard = ({ title, imageSrc, price }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={imageSrc} alt={title} />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
