// 

import React, { useState } from 'react';
import './Cart.css'; // Import the associated CSS file

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (index, newQuantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = newQuantity;
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map((item, index) => (
        <div key={index} className="cart-item">
          <img className="product-image" src={item.imageSrc} alt={item.title} />
          <div className="item-details">
            <h3 className="product-title">{item.title}</h3>
            <p className="product-price">${item.price}</p>
            <div className="quantity-controls">
              <button
                className="quantity-button"
                onClick={() => updateQuantity(index, item.quantity - 1)}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                className="quantity-button"
                onClick={() => updateQuantity(index, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="remove-button" onClick={() => removeItem(index)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">Total: ${calculateTotal()}</div>
    </div>
  );
};

export default Cart;
