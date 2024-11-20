import React from 'react';
import { Link } from 'react-router-dom';

function Type() {
    return (
    <div>
    <div className="containers">
        <h1>Does it make any difference?</h1>
        <h3>Getting your dream skin depends on choosing the right product. Choosing the right products varies from one skin type to another.</h3>
        <p>Choose yours!</p>
        <div className="links">
        <Link to="/sensitive">SENSITVE SKIN <br /></Link>
        <Link to="/dry">DRY SKIN <br /></Link>
        <Link to="/OIL">OILY AND COMBINED SKIN</Link>
        <Link to="/problems">PROBLEMS AND SOLUTIONS</Link>
        </div>
    </div>
    </div>
)}

export default Type;