import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom"
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { Landingpage } from './Components/Landingpage';
import Display from './Components/Display';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import Volunteersignup from './Components/Volunteersignup';
import Volunteersignin from './Components/Volunteersignin';
import { Vhomepage } from './Components/Vhomepage';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/landingpage" element={<Landingpage />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/display' element={<Display />} />
      <Route path='/volunteersignup' element={<Volunteersignup />} />
      <Route path='/volunteersignin' element={<Volunteersignin />} />
      <Route path='/Vhomepage' element={<Vhomepage/>} />


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
