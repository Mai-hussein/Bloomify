    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import Logo from "../Images/logo.png";

    function Navbar() {
    // State to handle dropdown visibility
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <header>
        <Link to="/">
            <img src={Logo} alt="Logo" />
        </Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/about">About Us</Link>
            <Link to="/Rate">Review</Link>
            <Link to="/routine">Routine Tips</Link>

            {/* Dropdown Menu */}
            <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        types
      </button>
      {dropdownVisible && (
        <div className="dropdown-content">
          <Link to="/sensitive">SENSITIVE SKIN <br /></Link>
          <Link to="/dry">DRY SKIN <br /></Link>
          <Link to="/OIL">OILY & COMBINED <br /></Link>
          <Link to="/problems">PROBLEMS & SOLUTIONS</Link>
        </div>
      )}
    </div>

            <Link
            style={{
                backgroundColor: "white",
                borderRadius: "50px",
                padding: "10px 15px",
                marginLeft: "50px",
            }}
            to="/signup"
            className="signup-navlink"
            >
            Sign Up
            </Link>
        </nav>
        </header>
    );
    }

    export default Navbar;
