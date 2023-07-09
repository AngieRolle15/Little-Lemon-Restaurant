import React from "react";
import './Navbar.css';
import Logo from './images/Logo.svg';

function Navbar (){
return (
<>
<nav className="navbar">
     <ul>
     <img src={Logo} alt="logoforlittlelemon"></img>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Log In</a></li>
    </ul>
    </nav>
    </>
)
}
export default Navbar;