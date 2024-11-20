import React from 'react'
import P1 from "../Assets/DRY DATA/Dry - sun block/dry - sun block 1.jpg";
import P2 from "../Assets/DRY DATA/Dry - sun block/dry - sun block 2.jpg";
import P3 from "../Assets/DRY DATA/Dry - sun block/dry - sun block 3.jpg";
import P4 from "../Assets/DRY DATA/Dry - sun block/dry - sun block 4.jpg";
import P5 from "../Assets/DRY DATA/Dry - sun block/dry - sun block 5.jpg";
import P6 from "../Assets/DRY DATA/Dry - sun block/dry - sun block  6.jpeg";



function Drysun() {
  return (
    <div>
    <div className="alert alert-warning" role="alert">
      Product prices are subject to increase and decrease 
    </div>
    <h1 style={{margin:"30px 20px"}}>SUN BLOCK</h1>
    <div className="card mb-3" style={{width: '100%'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={P1} className='img-fluid rounded-start' alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Cleo Sun Hydrating Sunscreen</h5>
            <p className="card-text">360 L.E</p>
            <p className="card-text" style={{paddingBottom: 150}}>Cleo Sun Hydrating Sunscreen Moisturizer: Provides sun protection with added hydration for soft, supple skin.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3" style={{width: '100%'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={P2} className='img-fluid rounded-start' alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Tetra Glow Sunscreen</h5>
            <p className="card-text">360 L.E</p>
            <p className="card-text" style={{paddingBottom: 150}}>Tetra Glow Sunscreen Moisturizer: Protects and hydrates for a luminous complexion.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3" style={{width: '100%'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={P3} className='img-fluid rounded-start' alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Infinity Care Sunscreen Lotion</h5>
            <p className="card-text">250 L.E</p>
            <p className="card-text" style={{paddingBottom: 150}}>Infinity Care Sunscreen Lotion: Provides broad-spectrum sun protection while moisturizing the skin.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3" style={{width: '100%'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={P4} className='img-fluid rounded-start' alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Beesline Ultrascreen Cream Invisible Sunfilter SPF 50</h5>
            <p className="card-text">510 L.E</p>
            <p className="card-text" style={{paddingBottom: 150}}>Beesline Ultrascreen Cream: SPF 50 invisible sun filter moisturizer for effective sun protection and hydration.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3" style={{width: '100%'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={P5} className='img-fluid rounded-start' alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Alejon Sunscreen Cream</h5>
            <p className="card-text">260 L.E</p>
            <p className="card-text" style={{paddingBottom: 150}}>Alejon Sunscreen Cream Moisturizer: Provides sun protection while hydrating the skin for a healthy glow.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3" style={{width: '100%'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={P6} className='img-fluid rounded-start' alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Kolagra Sun Screen Lotion 120ml</h5>
            <p className="card-text">310 L.E</p>
            <p className="card-text" style={{paddingBottom: 150}}>Kolagra Sun Screen Lotion 120ml: Protects and moisturizes for healthy, sun-safe skin.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default Drysun;