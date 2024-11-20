import React from "react";
import { Link } from "react-router-dom";

function Sensitive() {
return (
    <div className="containers container-sen">
        <h1>SENSITIVE SKIN</h1>
        <h3>
        Healthy, pure, and glowy
        <br /> get them with the perfect routin
        </h3>
        <div className="links">
        <Link to="/sensitiveclean">CLEANSER</Link>       
        <Link to="/sensitivemoist">MOISTURIZER</Link>
        <Link to="/Sensun"> SUN BLOCK </Link>
        </div>
    </div>
)}

export default Sensitive;
