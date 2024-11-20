import React from 'react'
import routine from"../Images/Screenshot 2024-10-15 215020.png";
import routine2 from"../Images/Screenshot 2024-10-15 215035.png";
import routine3 from"../Images/Screenshot 2024-10-15 215042.png";
import routine4 from"../Images/Screenshot 2024-10-15 215056.png";

function Routine() {
  return (
  <>
    <div className="tips" style={{padding: "50px 0"}}>
    <h2 style={{margin: "50px 0", fontWeight: "600"}}> IT'S ALL ABOUT YOUR ROUTINE </h2>
    <p>Be aware of these steps!</p>
    <div className="tipsp">
    <img src={routine} alt=""/>
    <img src={routine2} alt=""/>
    <img src={routine3} alt=""/>
    <img src={routine4} alt=""/>
    </div>
    </div>
    
  </>
  )
}

export default Routine