import React, { useState } from "react"
import './App.css';
import SearchBar from "./components/Navbar/SearchBar";
import SearchResultsList from "./components/Navbar/SearchResultsList";
import LoginUser from "./components/UserLogin/Login";
import { FaSign } from "react-icons/fa";
import SignUpUser from "./components/UserLogin/SignUp";

function App() {

  const [results, setResults] = useState([])

  return (
    <div className="App">

      <div className="login-bar">
        <h2>Login/Sign Up</h2>
        <LoginUser />
        <SignUpUser />
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
