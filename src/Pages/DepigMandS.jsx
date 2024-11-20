import React from "react";
import p1 from "../Assets/Problems/Prob - depigmentation & lightning - mask & scrub/Prob - depigmentation & lightning - mask & scrub 1.jpg";
import p2 from "../Assets/Problems/Prob - depigmentation & lightning - mask & scrub/Prob - depigmentation & lightning - mask & scrub 2.jpg";
import p3 from "../Assets/Problems/Prob - depigmentation & lightning - mask & scrub/Prob - depigmentation & lightning - mask & scrub 3.jpg";
import p4 from "../Assets/Problems/Prob - depigmentation & lightning - mask & scrub/Prob - depigmentation & lightning - mask & scrub 4.jpg";

function DepigMandS() {
return (
    <div>
        <div class="alert alert-warning" role="alert">
        Product prices are subject to increase and decrease  
        </div>
        <h1 style={{margin:"30px 20px"}}>MASK AND SCRUB</h1>
        <div className="card mb-3" style={{ width: "100%" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img
                src={p1}
                className="img-fluid rounded-start p-2"
                alt="Beesline Lifting Mask"
            />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Beesline Lifting Mask</h5>
                <p className="card-text">89 L.E</p>
                <p className="card-text" style={{ paddingBottom: 150 }}>
                Beesline Lifting Mask tightens and firms the skin, reducing fine
                lines and wrinkles. Typically containing peptides and
                antioxidants, it supports skin elasticity for a more youthful
                complexion. Applied to clean skin for a specified time, it
                improves skin texture, tone, and firmness.
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
                alt="Beesline Whitening Mask"
            />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Beesline Whitening Mask</h5>
                <p className="card-text">47 L.E</p>
                <p className="card-text" style={{ paddingBottom: 150 }}>
                Beesline Whitening Mask brightens the complexion and diminishes
                dark spots and hyperpigmentation. With natural ingredients like
                botanical extracts and vitamins, it evens out skin tone for a
                radiant look. Applied and left on for a specified time, it
                reveals smoother, brighter, and more luminous skin.
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
                alt="Drakon Face Whitening Mask"
            />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Drakon Face Whitening Mask</h5>
                <p className="card-text">150 L.E</p>
                <p className="card-text" style={{ paddingBottom: 150 }}>
                Drakon Face Whitening Mask brightens the complexion and reduces
                dark spots and hyperpigmentation. Typically containing
                brightening agents like kojic acid or vitamin C, it evens out
                skin tone for a radiant complexion. Applied for a specified
                time, it aims to promote even skin tone and radiance.
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="card mb-3" style={{ width: "100%" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img
                src={p4}
                className="img-fluid rounded-start"
                alt="Alejon Vit C Peel Off Mask"
            />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Alejon Vit C Peel Off Mask</h5>
                <p className="card-text">150 L.E</p>
                <p className="card-text" style={{ paddingBottom: 150 }}>
                Alejon Vitamin C Peel Off Mask brightens the complexion and
                enhances skin appearance. Typically containing vitamin C and
                other beneficial ingredients like aloe vera or hyaluronic acid,
                it promotes even skin tone and radiance. Applied and left to dry
                before peeling off, it reveals smoother, more radiant skin with
                regular use.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
);
}

export default DepigMandS;
