import React from 'react'
import { useParams } from 'react-router-dom';
const NavBar = (props) => {
    const color = useParams();
    // console.log("color hai bhai",color);
    return (
        <nav>
            <div class="nav-wrapper" style={{ backgroundColor: props.color }}>
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar