// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Trader John's || All rights reserved.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <li>
                        <Link to="/">Privacy Policy</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
