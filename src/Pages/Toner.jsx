import React from "react";
import p1 from "../Assets/OILY DATA/Oily - Toner&mask/Oily - Toner&mask 1.jpg";
import p2 from "../Assets/OILY DATA/Oily - Toner&mask/Oily - Toner&mask 2.jpg";
import p3 from "../Assets/OILY DATA/Oily - Toner&mask/Oily - Toner&mask 3.jpg";

function Toner() {
  return (
    <>
      <div>
        <div className="alert alert-warning" role="alert">
          Product prices are subject to increase and decrease
        </div>
        <h1 style={{ margin: "30px 20px" }}>Toner and mask</h1>
        <div className="card mb-3 mt-5" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={p1}
                className='img-fluid rounded-start'
                alt="Cleo Clear Clarifying Toner"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cleo Clear Clarifying Toner</h5>
                <br />
                <p className="card-text">
                  Cleo Toner is a skincare product designed to balance and
                  refresh the skin after cleansing. With its gentle formula, it
                  helps to remove any remaining traces of dirt or makeup while
                  restoring the skin's pH balance. Cleo Toner also hydrates and
                  prepares the skin for better absorption of moisturizers or
                  serums. Ideal for all skin types, it leaves the skin feeling
                  clean, toned, and revitalized.
                </p>
                <p className="card-text">240 L.E</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={p2}
                className='img-fluid rounded-start'
                alt="Beesline Anti Shine Mask"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Beesline Anti Shine Mask</h5>
                <br />
                <p className="card-text">
                  Beesline Shine Mask is a skincare product formulated to
                  rejuvenate and brighten the skin. Enriched with natural
                  ingredients like honey and botanical extracts, it helps to
                  hydrate and nourish the skin while reducing excess oil and
                  minimizing the appearance of pores. Beesline Shine Mask is
                  ideal for those looking to achieve a radiant complexion with a
                  healthy glow.
                </p>
                <p className="card-text">133.5 L.E</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={p3}
                className='img-fluid rounded-start'
                alt="Avuva Facial Clay Mask"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Avuva Facial Clay Mask</h5>
                <br />
                <p className="card-text">
                  Avuva Clay Mask purifies and detoxifies the skin with natural
                  clay and botanical extracts. It minimizes pores and improves
                  skin texture for a clearer complexion.
                </p>
                <p className="card-text">50 L.E</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
)}

export default Toner;
