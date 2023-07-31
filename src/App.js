import React, { useState } from "react"
import './App.css';
import SearchBar from "./components/Navbar/SearchBar";
import SearchResultsList from "./components/Navbar/SearchResultsList";
import LoginUser from "./components/UserLogin/Login";

function App() {

  const [results, setResults] = useState([])
  const [setLogin] = useState([])

  return (
    <div className="App">

      <div className="login-bar">
        <h2>Login</h2>
        <LoginUser setLogin={setLogin}/>
      </div>

      <div className="search-bar">
        <h1>Bookify</h1>
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results}/>
      </div>
    </div>
  )
}

export default App;
