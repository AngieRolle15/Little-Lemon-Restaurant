import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from './images/Logo.svg';
import { Router } from "react-router-dom";

function Navbar (){
return (
<>
<nav className="navbar">
     <ul>
     <img src={Logo} alt="logoforlittlelemon"></img>
        <li><Link to="/">Homepage</Link>
        </li>
        <li><Link to="/">Menu</Link>
        </li>
        <li><Link to="BookingPage">Reservations</Link>
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