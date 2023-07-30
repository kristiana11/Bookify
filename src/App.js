import React, { useState } from "react"
import './App.css';
import SearchBar from "./components/Navbar/SearchBar";
import SearchResultsList from "./components/Navbar/SearchResultsList";

function App() {

  const [results, setResults] = useState([])

  return (
    <div className="App">
      <div className="search-bar">
        <h1>Bookify</h1>
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results}/>
      </div>
    </div>
  )
}

export default App;
