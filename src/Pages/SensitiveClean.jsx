import React from 'react';
import p1 from "../Assets/NORMAL DATA/sen - cleanser/sen-cleanser 1.jpg";
import p2 from "../Assets/NORMAL DATA/sen - cleanser/sen-cleanser 2.jpg";
import p3 from "../Assets/NORMAL DATA/sen - cleanser/sen-cleanser 3.jpg";
import p4 from "../Assets/NORMAL DATA/sen - cleanser/sen-cleanser 4.jpg";
import p5 from "../Assets/NORMAL DATA/sen - cleanser/sen-cleanser 5.jpg";

function SensitiveClean() {
return (
    <div>
    <div className="alert alert-warning" role="alert">
    Product prices are subject to increase and decrease
    </div>
    {/*header bar*/}
    <h1 style={{margin:"30px 20px"}}>CLEANSER</h1>
    <table>
    </table><table>
    <tbody><tr>
        <td>
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={p1} className="img-fluid rounded-start" alt="Infinity for Dry Sensitive Skin Cleanser" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Infinity for Dry Sensitive Skin Cleanser</h5>
                    <p className="card-text">130 L.E</p>
                    <p className="card-text">Infinity for Dry Sensitive Skin Cleanser is specially formulated to gently cleanse and hydrate delicate, dry skin without causing irritation. Its mild formula is free from harsh ingredients, making it suitable for sensitive skin types. Enriched with moisturizing agents, it helps to restore the skin's natural moisture balance while effectively removing impurities and makeup residues. The soothing properties of this cleanser help calm and comfort the skin, leaving it feeling clean, refreshed, and nourished.</p>
                </div>
                </div>
            </div>
            </div>
        </td>
        </tr>
        <tr>
        <td>
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={p2} className="img-fluid rounded-start p-5" alt="Pharmaceris A Facial Wash for Sensitive Skin"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title text-center">Pharmaceris A Facial Wash for Sensitive Skin</h5>
                    <p className="card-text text-center">380 L.E</p>
                    <p className="card-text text-center">Pharmaceris A Facial Wash is a dermatologist-tested cleanser designed specifically for sensitive skin. It features a gentle formula that effectively removes impurities, excess oil, and makeup without causing irritation or dryness. Enriched with soothing ingredients, it helps calm and balance the skin while maintaining its natural moisture barrier. Ideal for daily use, this cleanser leaves the skin feeling clean, refreshed, and comfortable.</p>
                </div>
                </div>
            </div>
            </div>
        </td>
        </tr>
        <tr>
        <td>
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={p3} className="img-fluid rounded-start p-4" alt="Topi Cream DA Facial Wash for Sensitive Skin"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title text-center">Topi Cream DA Facial Wash for Sensitive Skin</h5>
                    <p className="card-text text-center">225 L.E</p>
                    <p className="card-text text-center">Topi Cream DA Facial Wash is a specialized cleanser formulated for sensitive skin. Its gentle formula effectively removes impurities, excess oil, and makeup without causing irritation. Enriched with soothing ingredients, it helps calm and nourish the skin, leaving it feeling clean and refreshed. Ideal for daily use, this facial wash promotes a healthy and balanced complexion without stripping the skin of its natural moisture.</p>
                </div>
                </div>
            </div>
            </div>
        </td>
        </tr>
        <tr>
        <td>
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={p4} className="img-fluid rounded-start p-4" alt="Appe Facial Wash for Sensitive Skin"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title text-center">Appe Facial Wash for Sensitive Skin</h5>
                    <p className="card-text text-center">205 L.E</p>
                    <p className="card-text text-center">Appe Facial Wash for Sensitive Skin is a dermatologist-recommended cleanser specifically formulated for those with delicate skin. Its mild yet effective formula gently removes impurities, excess oil, and makeup without causing irritation or dryness. Enriched with soothing ingredients, such as aloe vera or chamomile extract, it helps calm and hydrate the skin, leaving it feeling clean, refreshed, and comfortable. This hypoallergenic facial</p>
                </div>
                </div>
            </div>
            </div>
        </td>
        </tr>
        <tr>
        <td>
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={p5} className="img-fluid rounded-start p-5" alt="Cetaphil Facial Wash for Sensitive Skin"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title text-center">Cetaphil Facial Wash for Sensitive Skin</h5>
                    <p className="card-text text-center">390 L.E</p>
                    <p className="card-text text-center">Cetaphil Facial Wash for Sensitive Skin is a mild and gentle cleanser specifically designed for sensitive skin types. It effectively removes dirt, oil, and impurities without stripping the skin's natural moisture barrier. The soap-free formula is non-irritating and fragrance-free, making it suitable for even the most sensitive skin. Dermatologist-recommended, it helps maintain the skin's pH balance and leaves the skin feeling clean, refreshed, and</p>
                </div>
                </div>
            </div>
            </div>
        </td>
        </tr>
    </tbody>
    </table>
    </div>
)}

export default SensitiveClean;