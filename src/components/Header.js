import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';
import restaurantChefB from '../components/images/restaurantchefB.jpg';

function Header(){
    return(
        <>
        <header className="hero-section">
            <div className="hero-intro">
            <h1 className="hero-header">Little Lemon</h1>
            <h2 className="hero-subheading">Chicago</h2>
            <p>Little Lemon has</p>
            <Link to="/BookingPage" className="cta-button">Reserve A Table</Link>
            </div>
            <div className="image-item">
            <img src={restaurantChefB} alt="restaurantfood"/>
            </div>
        </header>
        </>
    )
}

export default Header;