import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
    <footer>
        <p>&#169;  2024 Bloomify. All rights reserved.</p>
        <div>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link>Privacy Policy</Link>
        </div>
    </footer>
)}

export default Footer;