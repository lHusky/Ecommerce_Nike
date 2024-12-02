import React, { useState } from 'react';
import './GuestCheckout.css'; 


const guestCheckout = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-content">
        <div className="delivery-options">
          <h2>Delivery Options</h2>
          <div className="delivery-method">
            <button className="active">Ship</button>
            <button>Pick Up</button>
          </div>

          <div className="address-options">
            <button className="active">Home/Office</button>
            <button>APO/FPO</button>
          </div>

          <form className="delivery-form">
            <label>Email*</label>
            <input type="email" placeholder="Enter your email" />

            <div className="name-fields">
              <div>
                <label>First Name*</label>
                <input type="text" placeholder="Enter your first name"  />
              </div>
              <div>
                <label>Last Name*</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>

            <label>Address*</label>
            <input type="text" placeholder="Start typing address" />
            <a href="#" className="manual-entry">Enter address manually</a>

            <label>Phone Number*</label>
            <input type="tel" placeholder="Enter your phone number" />

            <button className="save-continue" disabled>Save & Continue</button>
          </form>
        </div>

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
                <p>Nike Sportswear Club Fleece Big Kids' Joggers</p>
                <p>Size: M</p>
                <p>Color: Dark Grey Heather</p>
                <p>Qty: 1 @ $0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="additional-sections">
        <h3>Payment</h3>
        <div className="payment-section">
  <h2>Payment</h2>

  <div className="billing-country">
  <label htmlFor="country-select">Billing Country/Region</label>
  <select id="country-select" className="country-select">
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="MX">Mexico</option>
    <option value="GB">United Kingdom</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
    <option value="JP">Japan</option>
    <option value="AU">Australia</option>
    <option value="IN">India</option>
    <option value="CN">China</option>
  </select>
</div>

  <div className="promo-code">
    <input type="checkbox" id="gift-card" />
    <label htmlFor="gift-card">
      Do you have a gift card, product voucher, or promo code?
    </label>
  </div>

  <div className="payment-method">
    <h3>Select payment method</h3>
    <div>
      <input type="radio" id="credit-card" name="payment-method" defaultChecked />
      <label htmlFor="credit-card">Credit or Debit Card</label>
    </div>
    <div>
      <input type="radio" id="paypal" name="payment-method" />
      <label htmlFor="paypal">PayPal</label>
    </div>
    <div>
      <input type="radio" id="klarna" name="payment-method" />
      <label htmlFor="klarna">Klarna. 4 interest-free payments</label>
    </div>
    <div>
      <input type="radio" id="apple-pay" name="payment-method" />
      <label htmlFor="apple-pay">Apple Pay</label>
    </div>
  </div>

  <div className="card-details">
    <h3>Add Card</h3>
    <div className="card-inputs">
      <input type="text" placeholder="Card Number" />
      <input type="text" placeholder="MM/YY" />
      <input type="text" placeholder="CVV" />
    </div>
    <a href="#" className="cvv-help">Where is my CVV?</a>
  </div>

  <div className="billing-details">
    <input type="text" placeholder="First Name*"/>
    <input type="text" placeholder="Last Name*" />
    <input type="text" placeholder="Address*" />
    <input type="text" placeholder="Optional - Company, C/O, Apt, Suite, Unit" />
    <div className="city-state">
      <input type="text" placeholder="City*" />
      <select required>
        <option value="">State*</option>
        <option value="CA">California</option>
        <option value="NY">New York</option>

      </select>
      <input type="text" placeholder="Postal Code*" />
    </div>
    <p className="country-region">Country/Region <span>United States</span></p>
  </div>

        </div>
        <div className="order-overview">
        <h2>Order Overview</h2>
        <div className="overview-item">
        <p>Subtotal:</p>
        <span>$0.00</span>
        </div>
        <div className="overview-item">
        <p>Estimated Shipping:</p>
        <span>$0.00</span>
        </div>
        <div className="overview-item">
        <p>Estimated Tax:</p>
        <span>$0.00</span>
        </div>
        <div className="overview-total">
          <p><strong>Total:</strong></p>
          <span><strong>$0.00</strong></span>
        </div>
        <a href="/gracias" className="place-order-btn">Place Order</a>
        </div>      
      </div>
  </div>
  );
};

export default guestCheckout;