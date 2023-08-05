import React, { useState } from 'react';
import { FaTimes, FaTrash } from "react-icons/fa"; 
import './ShoppingCart.css';
import Checkout from './Checkout';

const ShoppingCart = ({ cartItems, removeFromCart, setShowCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + parseFloat(item.Price.replace('$', '')), 0);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <FaTimes className="close-cart" onClick={() => setShowCart(false)} />
      </div>
      {cartItems.length === 0 ? (
        <div className="cart-empty">Your cart is empty.</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <div className="title">{item.Title}</div>
              <div className="price">${item.Price}</div>
              <button className="delete-button" onClick={() => removeFromCart(item._id)}>
                <FaTrash />
              </button>
            </div>
          ))}
          <div className="cart-total">Total: ${getTotalPrice().toFixed(2)}</div>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </>
      )}
      {showCheckout && <Checkout cartItems={cartItems} setShowCart={setShowCart} />}
    </div>
  );
};

export default ShoppingCart;
