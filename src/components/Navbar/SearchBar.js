import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import axios from 'axios';

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const fetchData = (value) => {
    axios.get('books.json')
      .then(response => {
        const filteredResults = response.data.filter((post) => {
          return (
            value &&
            post &&
            post.Title &&
            post.Title.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(filteredResults);
        setSearchAttempted(true);
      })
      .catch(error => {
        console.log(error);
        setResults([]);
        setSearchAttempted(true);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    setSearchAttempted(false);
  };

  const handleSearch = () => {
    fetchData(input);
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
          />
        </div>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="results-container">
        {searchAttempted && results.length === 0 ? (
          <div>No results found.</div>
        ) : (
          results.map(post => (
            <div key={post._id} className="book-item">
              <img src={post.url} alt="a Harry Potter Cover" />
              <div className="book-details">
                <div className="title">{post.Title}</div>
                <div className="author">{post.Author}</div>
                <div className="price">{post.Price}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;
