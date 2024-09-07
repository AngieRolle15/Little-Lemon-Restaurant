import React from "react";
import { Link } from 'react-router-dom';
import Logo from './images/Logo.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-section">
            <div className="footer-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="footer-nav">
                <nav>
                    <ul>
                        <h3 className="footer-head"> Doormat Navigation:</h3>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Log In</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-contact">
            <h3 className="footer-head"> Contact:</h3>
                <address>
                    <p>Address:</p>
                    <p>1234 Little Lemon St.</p>
                    <p>Chicago, IL 60601</p>
                    <br/>
                    <p>Email Address:</p>
                    <p>contact@littlelemon.com</p>
                    <br/>
                    <p>Telephone:</p>
                    <p>(555) 123-4567</p>
                </address>
            </div>
            <div className="footer-socials">
                <ul>
                <h3 className="footer-head"> Social Links:</h3>
                    <li ><a href="https://facebook.com">Facebook</a></li>
                    <li ><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                </ul>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
