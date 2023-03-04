import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';
import './css/signup.css'
const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [desc, setDesc] = useState('');
  const [contact, setContact] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const PostData = () => {
    if (!name || !email || !password) {
      M.toast({ html: "Enter all credentials", classes: "#c62828 red darken-3" })
      return
    }
    if (password.length < 8) {
      M.toast({ html: "Password should be atleast 8 characters", classes: "#c62828 red darken-3" })
      return
    }
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" })
      return
    }
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        goal,
        desc,
        contact,
        password,
      })
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" })
          navigate('/');
        }
      }).catch(err => console.log(err))
  }
  return (
    <div className="auth-form-container">
      <h2>SignUp</h2>
        <label for="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter email" id="email" name="email" />
        <label for="name">NGO Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="string" id="name" name="name" placeholder="enter name"/>
        <label for="goal">NGO Goal</label>
        <input value={goal} onChange={(e) => setGoal(e.target.value)} type="string" id="goal" name="goal" placeholder="enter goal"/>
        <label for="desc">NGO Description</label>
        <input value={desc} onChange={(e) => setDesc(e.target.value)} type="string" id="desc" name="desc" placeholder="enter description"/>
        <label for="contact">NGO Contact</label>
        <input value={contact} onChange={(e) => setContact(e.target.value)} type="string" id="contact" name="contact" placeholder="enter contact"/>
        <label for="password">password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="enter password" id="password" name="password"/>
        <label for="confpassword">confirm password</label>
        <input value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} type="password" placeholder="confirm password" id="password" name="password" />
        <button onClick={() => PostData()}>Sign up</button>
        <div>
        <Link to="/">Already have account?</Link>
      </div>
    </div>
  )
}

export default Signup 