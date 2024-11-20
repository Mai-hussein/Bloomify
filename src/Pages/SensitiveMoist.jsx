import React from "react";
import p1 from "../Assets/NORMAL DATA/sen - moistrizer/sen - moistrizer 1.jpg";
import p2 from "../Assets/NORMAL DATA/sen - moistrizer/sen - moistrizer 2.jpg";
import p3 from "../Assets/NORMAL DATA/sen - moistrizer/sen - moistrizer 3.jpg";

function SensitiveMoist() {
return (
    <div>
        <div class="alert alert-warning" role="alert">
        Product prices are subject to increase and decrease  
        </div>
        <h1 style={{margin:"30px 20px"}}> MOISTURIZER </h1>
        <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={p1} className="img-fluid rounded-start" alt="infinity soothing &amp; moisturizing gel"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title text-center">
                infinity soothing &amp; moisturizing gel
                </h5>
                <p className="card-text text-center">225 L.E</p>
                <p className="card-text text-center">
                Topi Gent Facial Wash: Specifically formulated for sensitive
                skin, this gentle cleanser effectively removes impurities
                without causing irritation.
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="card mb-3 custom-card">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={p2} className="img-fluid rounded-start" alt="dermactive acti repair cca soothing"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title text-center">
                dermactive acti repair cca soothing
                </h5>
                <p className="card-text text-center">205 L.E</p>
                <p className="card-text text-center">
                Appe Facial Wash for Sensitive Skin is a
                dermatologist-recommended cleanser specifically formulated for
                those with delicate skin. Its mild yet effective formula gently
                removes impurities, excess oil, and makeup without causing
                irritation or dryness. Enriched with soothing ingredients, such
                as aloe vera or chamomile extract, it helps calm and hydrate the
                skin, leaving it feeling clean, refreshed, and comfortable. This
                hypoallergenic facial
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="card mb-3 custom-card">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={p3} className="img-fluid rounded-start" alt="dermactive acti repair emollient extreme soothing"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title text-center">
                dermactive acti repair emollient extreme soothing
                </h5>
                <p className="card-text text-center">390 L.E</p>
                <p className="card-text text-center">
                Cetaphil Facial Wash for Sensitive Skin is a mild and gentle
                cleanser specifically designed for sensitive skin types. It
                effectively removes dirt, oil, and impurities without stripping
                the skin's natural moisture barrier. The soap-free formula is
                non-irritating and fragrance-free, making it suitable for even
                the most sensitive skin. Dermatologist-recommended, it helps
                maintain the skin's pH balance and leaves the skin feeling
                clean, refreshed, and
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
)}

export default SensitiveMoist;
