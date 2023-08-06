import React, { useState } from 'react'
import "./Login.css"

function LoginUser() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        let result = await fetch(
        'users.json', {
            method: "post",
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json();
        let length = result.length
        let i = 0;
        let flag = false;
        // console.warn(result);
        while(i < length) {

          if (username === result[i].Username && password === result[i].Password) {
          flag = true;
            break;
          }
          i++;
        }

        if(flag === true){
          alert("Success! You are now logged in");
              setPassword("");
              setUserName("");
        }
        
        else {
          alert('Incorrect Username or Password');
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
