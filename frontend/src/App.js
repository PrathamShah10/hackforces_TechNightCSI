import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom"
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import './App.css';
const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/navbar" element={<NavBar />} />
    </Routes>
  )
}
function App() {
  const [color, setColor] = useState("");
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
