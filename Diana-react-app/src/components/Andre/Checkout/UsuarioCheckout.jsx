import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const UsuarioCheckout = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    paymentMethod: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const [country, setCountry] = useState('United States');
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setFormData({
      ...formData,
      paymentMethod: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/gracias');
  };

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit}>
        <section className="delivery-options">
          <h3>Delivery Options</h3>
          <div className="delivery-type">
            <label>
              <input type="radio" name="delivery" value="ship" checked /> Ship
            </label>
            <label>
              <input type="radio" name="delivery" value="pick-up" /> Pick Up
            </label>
          </div>
          <label>Country/Region:</label>
          <select value={country} onChange={handleCountryChange}>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
          </select>
        </section>

        <section className="user-info">
          <h3>Contact Information</h3>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="text" 
            name="address" 
            placeholder="Address" 
            value={formData.address} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="text" 
            name="phoneNumber" 
            placeholder="Phone Number" 
            value={formData.phoneNumber} 
            onChange={handleInputChange} 
            required 
          />
        </section>
        <div className="cart-summary">
          <h2>In Your Bag</h2>
          <a href="/carrito" className="edit-link">Edit</a>
          <ul>
            <li>Subtotal <span>$0.00</span></li>
            <li>Estimated Shipping <span>$0.00</span></li>
            <li>Estimated Tax <span>$0.00</span></li>
            <li className="total">Total <span>$0.00</span></li>
          </ul>

          <div className="product-summary">
            <p>Arrives by Fri, Dec 20</p>
            <div className="product">
              <img
                src=""
                alt="Product Image"
              />
              <div className="product-details">
                <p>Product: Nike Sportswear Club Fleece Big Kids' Joggers</p>
                <p>Size: </p>
                <p>Color: Dark Grey Heather</p>
                <p>Qty: 1 @ $0.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <section className="payment-info">
          <h3>Payment</h3>
          <label>Do you have a gift card, product voucher, or promo code?</label>
          <div className="payment-methods">
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="credit" 
                checked={formData.paymentMethod === 'credit'} 
                onChange={handlePaymentMethodChange} 
              /> Credit or Debit Card
            </label>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="paypal" 
                checked={formData.paymentMethod === 'paypal'} 
                onChange={handlePaymentMethodChange} 
              /> PayPal
            </label>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="klarna" 
                checked={formData.paymentMethod === 'klarna'} 
                onChange={handlePaymentMethodChange} 
              /> Klarna (4 interest-free payments)
            </label>
          </div>

          {formData.paymentMethod === 'credit' && (
            <div className="credit-card-info">
              <input 
                type="text" 
                name="cardNumber" 
                placeholder="Card Number" 
                value={formData.cardNumber} 
                onChange={handleInputChange} 
                required 
              />
              <input 
                type="text" 
                name="expiryDate" 
                placeholder="MM/YY" 
                value={formData.expiryDate} 
                onChange={handleInputChange} 
                required 
              />
              <input 
                type="text" 
                name="cvv" 
                placeholder="CVV" 
                value={formData.cvv} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          )}
        </section>

        <section className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-summary-details">
            <p>Subtotal: $0.00</p>
            <p>Estimated Shipping: $0.00</p>
            <p>Estimated Tax: $0.00</p>
            <p>Total: $0.00</p>
          </div>
        </section>

        <a href="/gracias" className="place-order-btn">Place Order</a>
      </form>
    </div>
  );
};

export default UsuarioCheckout;
