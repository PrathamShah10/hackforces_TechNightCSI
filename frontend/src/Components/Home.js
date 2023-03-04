import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom"
import NavBar from './NavBar';
function Home() {
    const [color, setColor] = useState("");
    const [title,setTitle] = useState("");
    const [generate, setGenerate] = useState(false);
    return (
        <>
            {
                generate
                    ?
                    <>
                    <NavBar color={color}/>
                    </>
                    :
                    <>
                    <h1>select color:</h1>
                    <button onClick={()=>setColor("black")}>black</button>
                    <button onClick={()=>setColor("green")}>green</button>
                    <button onClick={()=>setColor("blue")}>blue</button>
                    <button onClick={()=>setColor("pink")}>pink</button>
                    <button onClick={()=>setColor("black")}>black</button>
                    add title: <input type="text" setTitle={(e)=>setTitle(e.target.value)}/>
                    <br/>
                    <button onClick={(e)=>setGenerate(true)}>Preview</button>
                    </>
            }
        </>
    )
}

export default Home;
