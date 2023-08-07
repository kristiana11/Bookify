import React, { useState } from 'react'
import "./Login.css"


function SignUpUser() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        let result = await fetch(
        'users.json', {
            method: "post",
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json();
        let length = result.length;
        console.log("Before Adding data",JSON.stringify(result, null, 4));
        let id = length + 1;
        result.push({
          _id: id,
          Username: username,
          Email: email,
          Password: password
        })
        console.log("After Adding data",JSON.stringify(result, null, 4));

        let i = 0;
        let flag = false;
        // console.warn(result);
        while(i < length) {

          if (username === result[i].Username 
            && password === result[i].Password
            && email === result[i].Email) {
          flag = true;
            break;
          }
          i++;
        }
        
        if(flag === false){

          alert("Account Successfully Added!");
          setUserName("");
          setEmail("");
          setPassword("");
        }
        
        else {
          alert('Account Already Exists!');
          // setUserName("");
          // setEmail("");
          // setPassword("");
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
          <input 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button className="login-button" onClick={handleOnSubmit}>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpUser;
