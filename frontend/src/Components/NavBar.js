import React from 'react'
import { useParams } from 'react-router-dom';
import "./css/Navbar.css"
const NavBar = (props) => {
    return (
        <nav>
            <div class="nav-wrapper" style={{ backgroundColor: props.color }}>
                <a href="#" class="brand-logo" style={{color:'white'}}>{props.title}</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li style={{cursor:'pointer'}}>About Us</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar