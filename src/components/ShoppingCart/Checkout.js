import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, setShowCart }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [optional, setOptional] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [cityState, setCityState] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + parseFloat(item.Price.replace('$', '')), 0);
  };

  const handleCheckout = () => {
    if (!firstName || !lastName || !address || !zipcode || !cityState || !country || !email || !phone) {
      alert('Cannot finalize order. Please fill in all required fields.');
      return;
    }

    const orderDetails = {
      firstName,
      lastName,
      address,
      optional,
      zipcode,
      cityState,
      country,
      email,
      phone,
      paymentMethod,
      cartItems,
      totalPrice: getTotalPrice()
    };
    console.log(orderDetails);
    alert('Ordered Finalized! Total amount: $' + getTotalPrice().toFixed(2));
    setShowCart(false);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content"> 
      <h3>Enter your name and address:</h3>
        <div className="name-inputs">
          <div className="form-input first-name">
            <label htmlFor="firstName"></label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-input last-name">
            <label htmlFor="lastName"></label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-input">
          <label htmlFor="address"></label>
          <input
            type="text"
            id="address"
            placeholder="Street Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="optional"></label>
          <input
            type="text"
            id="optional"
            placeholder="Apt, Suite, Building (Optional)"
            value={optional}
            onChange={(e) => setOptional(e.target.value)}
          />
        </div>

        <div className="form-input">
          <label htmlFor="zipcode"></label>
          <input
            type="text"
            id="zipcode"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="cityState"></label>
          <input
            type="text"
            id="cityState"
            placeholder="City, State"
            value={cityState}
            onChange={(e) => setCityState(e.target.value)}
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="country"></label>
          <input
            type="text"
            id="country"
            placeholder="Country/Region"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <h3>What's your contact information?</h3>
        <div className="form-input">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <h3></h3>
        <div className="form-input">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>
        Finalize Order
      </button>
    </div>
  );
};

export default Checkout;
