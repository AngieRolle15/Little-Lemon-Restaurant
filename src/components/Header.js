import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';
import restaurantfood from '../components/images/restaurantfood.jpg';
import Logo from './Logo';

function Header(){
    return(
        <>
        <header className="hero-section">
            <div className="hero-container">
            <div className="hero-intro">
         <div className="logo"><Logo/></div> 
            <p className="hero-desc">The Little Lemon Restaurant serves the best Mediterranean meals. Whether
                you are dining alone or with family, this restaurant will waw your experience.
            </p>
            <Link to="/booking" className="cta-button">Reserve A Table</Link>
            </div>
            <div className="image-item">
            <img src={restaurantfood} alt="restaurantfood"/>
            </div>
            </div>
        </header>
        </>
    )
}

export default Header;