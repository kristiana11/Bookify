import React, { useState } from 'react'
import "./Login.css"

function LoginUser() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:3000/', {
            method: "post",
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setPassword("");
            setUserName("");
        }
    }

  return (
    <div>
      <form action="">
        <div className="login-wrapper">
          <input 
            placeholder="User Name" 
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="login-wrapper">
          <input type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="login-button" onClick={handleOnSubmit}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginUser;
