import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom"
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import './App.css';
const Routing = () => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      Navigate('/signin')
    }
  }, [])
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
function App() {
  return (
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      );

}

export default App;
