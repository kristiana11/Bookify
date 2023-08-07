import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './SearchBar.css';
import axios from 'axios';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchData = (value) => {
    axios
      .get('books.json')
      .then((response) => {
        const filteredResults = response.data.filter((post) => {
          return (
            value &&
            post &&
            post.Title &&
            post.Title.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(filteredResults);
        setSearched(true);
      })
      .catch((error) => {
        console.log(error);
        setResults([]);
        setSearched(true);
      });
  };

  const handleChange = (value) => {
    setInput(value);
  };

  const handleSearch = () => {
    fetchData(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  return (
    <div className="search-container">
      <div className="input-wrapper">
        <div className="input-container">
          <FaSearch id="search-icon" />
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="results-container">
        {searched && results.length === 0 && <div>No results found.</div>}
        {results.map((post) => (
          <div key={post._id} className="book-item">
            <img src={post.url} alt="a Harry Potter Cover" />
            <div className="book-details">
              <div className="title">{post.Title}</div>
              <div className="author">{post.Author}</div>
              <div className="price">{post.Price}</div>
              <button onClick={() => addToCart(post)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
        <FaShoppingCart />
        {cartItems.length > 0 && <span className="cart-items-count">{cartItems.length}</span>}
      </div>
      {showCart && <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} setShowCart={setShowCart} />}
    </div>
  );
};

export default SearchBar;
