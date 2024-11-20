import React from 'react'
import { Link } from 'react-router-dom';

function Problems() {
    return (
    <div className="containers prob">
        <h1>SOLUTIONS YOU NEED</h1>
        <h3> for the smallest details we give you the bigest changes </h3>
        <div className="links">
            <Link to="/depig">Depigmentation and Lightning</Link>
            <Link to="/darkcircles">Dark Circles</Link>
            <Link to="/antiaging">Anti-Aging</Link>
            <Link to="/acne">Acne</Link>
        </div>
    </div>
)
}

export default Problems;