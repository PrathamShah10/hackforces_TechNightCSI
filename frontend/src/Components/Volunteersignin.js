import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';
const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const PostData = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" })
      return
    }
    fetch("/volunteersignin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          console.log("volunteerd",data.volunteer)
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("volunteer", JSON.stringify(data.volunteer));
          M.toast({ html: "signed in sucessfully", classes: "#43a047 green darken-1" })
          navigate('/Vhomepage');
        }
      }).catch(err => console.log(err))
  }
  const changetype = () => {
    if (showPassword) {
      let x = document.getElementById('password');
      x.type = 'text'
      setShowPassword(false)
    }
    else {
      let x = document.getElementById('password');
      x.type = 'password'
      setShowPassword(true)
    }
  }
  return (
    <>
         
      <div className="auth-form-container">
        <h2>SignIn</h2>
        <label for="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter email" id="email" name="email" />
        <label for="password">password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="enter password" id="password" name="password" />
        <i className="large material-icons" style={{fontSize: "2.5em",position:'relative',left:'1300px',bottom:'65px',cursor:'pointer'}} onClick={()=>changetype()}>remove_red_eye</i>
        <button onClick={()=>PostData()}>Log in</button>
      </div>
      <div>
        <Link to="/volunteersignup">New User?</Link>
      </div>
    </>
  )
}

export default Signin