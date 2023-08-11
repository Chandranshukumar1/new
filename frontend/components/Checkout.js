// Checkout.js

import React, { useState } from 'react';
import './Checkout.css'; // Import the associated CSS file

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiration: '',
    cvv: '',
  });

  const handleShippingChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement purchase logic here
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>Shipping Information</h3>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={shippingInfo.firstName}
            onChange={handleShippingChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={shippingInfo.lastName}
            onChange={handleShippingChange}
            required
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleShippingChange}
          required
        />
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingInfo.city}
            onChange={handleShippingChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={shippingInfo.state}
            onChange={handleShippingChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP"
            value={shippingInfo.zip}
            onChange={handleShippingChange}
            required
          />
        </div>
        <h3>Payment Information</h3>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handlePaymentChange}
          required
        />
        <input
          type="text"
          name="cardName"
          placeholder="Cardholder Name"
          value={paymentInfo.cardName}
          onChange={handlePaymentChange}
          required
        />
        <div className="form-group">
          <input
            type="text"
            name="expiration"
            placeholder="Expiration (MM/YYYY)"
            value={paymentInfo.expiration}
            onChange={handlePaymentChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={paymentInfo.cvv}
            onChange={handlePaymentChange}
            required
          />
        </div>
        <button type="submit" className="checkout-button">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
