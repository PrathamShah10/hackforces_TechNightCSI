import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom"
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { Landingpage } from './Components/Landingpage';
import './App.css';
const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/landingpage" element={<Landingpage />} />
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
