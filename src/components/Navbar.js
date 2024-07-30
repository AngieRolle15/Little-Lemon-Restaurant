import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from './images/Logo.svg';


function Navbar (){
return (
<>
<nav className="navbar">
     <ul>
     <img src={Logo} alt="logoforlittlelemon"></img>
        <li><Link to="/">Home</Link>
        </li>
        <li><Link to="/">Menu</Link>
        </li>
        <li><Link to="/booking">Reservations</Link>
        </li>
        <li><Link to="/">Order Online</Link>
        </li>
        <li><Link to="/">Log In</Link></li>
    </ul>
    </nav>
    </>
)
}
export default Navbar;