import React from 'react';
import { FaTimes } from "react-icons/fa";
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, removeFromCart, setShowCart }) => {
  const getTotalPrice = () => {
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.Price.replace('$', '')), 0);
    return total.toFixed(2);
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
                <FaTimes />
              </button>
            </div>
          ))}
          <div className="cart-total">Total: ${getTotalPrice()}</div>
          <button className="checkout-button">Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
