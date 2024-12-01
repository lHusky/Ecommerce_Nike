import React, { useState } from 'react';
import './GuestCheckout.css'; 
function guestCheckout() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    shippingOption: 'ship',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="delivery-options">
          <label>
            <input
              type="radio"
              name="shippingOption"
              value="ship"
              checked={formData.shippingOption === 'ship'}
              onChange={(e) => setFormData({ ...formData, shippingOption: e.target.value })}
            />
            Ship
          </label>
          <label>
            <input
              type="radio"
              name="shippingOption"
              value="pickup"
              checked={formData.shippingOption === 'pickup'}
              onChange={(e) => setFormData({ ...formData, shippingOption: e.target.value })}
            />
            Pick Up
          </label>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>  
        {/* Resto de los campos del formulario */}
        <button type="submit">Save & Continue</button>
      </form>
    </div>
  );
}

export default guestCheckout;