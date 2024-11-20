import React from 'react'
import { Link } from "react-router-dom";

function Dry() {
  return (
  <div>
    <div className="containers container-dry">
    <h1>DRY SKIN</h1> <br /> 
    {/*DRY SKIN SECTION*/}
    <h3><b>Transform dryness with the perfect routine <br /> and an affordable price</b></h3><br />
    <div className="links">
    <Link to="/dryclean">CLEANSER</Link> 
    <Link to="/drysun">SUN BLOCK</Link>
    <Link to="/drymostriser">MOISTURIZER</Link>
    </div>
    </div>
  </div>
)}

export default Dry;