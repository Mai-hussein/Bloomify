import React from 'react'
import { Link } from 'react-router-dom'


function OIL() {
  return (
  <>
  <div className="containers oily">
    {/* OILY SKIN SECTION */}
    <h1>OILY AND COMBINED SKIN</h1>
    <h3>Handle with gentle care, let it radiate like a brilliant star</h3>
    <p>Choose your need!</p>
    <div className="links">
      <Link to="/Cleanseroil">CLEANSER</Link>
      <Link to="/Sunoil">SUN BLOCK</Link>
      <Link to="/Mostoil">MOISTURIZER</Link>
      <Link to="/Toner">TONER AND MASK</Link>
    </div>
  </div>
  </>
)}

export default OIL;