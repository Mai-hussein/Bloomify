import React from "react";
import p1 from "../Assets/Problems/Prob - acne/Prob - acne 1.jpg";
import p2 from "../Assets/Problems/Prob - acne/Prob - acne 2.jpg";
import p3 from "../Assets/Problems/Prob - acne/Prob - acne 3.jpg";

function Acne() {
return (
    <div>
        <div class="alert alert-warning" role="alert">
        Product prices are subject to increase and decrease  
        </div>
        <h1 style={{margin:"30px 20px"}}>ACNE</h1>
        <div className="card mb-3" style={{ width: "100%" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img
                src={p1}
                className="img-fluid rounded-start"
                alt="Starville Acne Prone Skin Soap"
            />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Starville Acne Prone Skin Soap</h5>
                <p className="card-text">50 L.E</p>
                <p className="card-text" style={{ paddingBottom: 150 }}>
                Starville Acne Soap is a specialized skincare product designed
                to combat acne. Formulated with ingredients known for their
                acne-fighting properties, it cleanses the skin, reduces excess
                oil, and unclogs pores to prevent breakouts. Suitable for daily
                use, this soap helps promote clearer, healthier-looking skin.
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="card mb-3" style={{ width: "100%" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img
                src={p2}
                className="img-fluid rounded-start"
                alt="infinity Facial Cleanser Gel"
            />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">infinity Facial Cleanser Gel</h5>
                <p className="card-text">125 L.E</p>
                <p className="card-text" style={{ paddingBottom: 150 }}>
                infinity Facial Cleanser Gel is a gentle cleanser that removes
                impurities without drying the skin, leaving it refreshed and
                revitalized.
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="card mb-3" style={{ width: "100%" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img
                src={p3}
                className="img-fluid rounded-start"
                alt="Melano Acne Soap"
            />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Melano Acne Soap</h5>
                <p className="card-text">60 L.E</p>
                <p className="card-text" style={{ paddingBottom: 150 }}>
                Melano Acne Soap is a targeted skincare solution for acne-prone
                skin, known for its cleansing and pore-clearing abilities. With
                antibacterial properties, it helps reduce breakouts and leaves
                skin feeling refreshed.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
);
}

export default Acne;
