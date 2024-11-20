import React from "react";
import { Link } from "react-router-dom";

function Depig() {
return (
    <div className="containers dep">
        <h1>Depigmentation and lightning</h1>
        <div className="links">
            <Link to="/depigcleanser">CLEANSER</Link>
            <Link to="/depigmoist">MOISTRIZER</Link>
            <Link to="/depigserum">SERUM</Link>
            <Link to="/depigmands">Mask and Scrub</Link>
        </div>
    </div>
)}

export default Depig;
