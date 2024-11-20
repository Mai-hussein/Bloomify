import React from "react";
import p1 from "../Assets/NORMAL DATA/sen - sunblock/sen - sunblock 1.jpg";
import p2 from "../Assets/NORMAL DATA/sen - sunblock/sen - sunblock 2.jpg";
import p3 from "../Assets/NORMAL DATA/sen - sunblock/sen - sunblock 3.jpg";
import p4 from "../Assets/NORMAL DATA/sen - sunblock/sen - sunblock 4.jpg";

function Sensun() {
  return (
    <div>
      <div class="alert alert-warning" role="alert">
        Product prices are subject to increase and decrease  
      </div>
      <h1 style={{margin:"30px 20px"}}>SUN BLOCK</h1>
      <div className="card mb-3" style={{ width: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={p1}
              className="img-fluid rounded-start"
              alt="Dermactive Acti Solaire SPF 50 Melting Cream"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Dermactive Acti Solaire SPF 50 Melting Cream
              </h5>
              <p className="card-text">279 L.E</p>
              <p
                className="card-text"
                style={{ backgroundColor: "#d2dfc9", padding: 10 }}
              >
                Dermactive Acti Solaire SPF 50 Melting Cream is a
                high-protection sunblock designed to defend the skin against UVA
                and UVB rays. Its lightweight, fast-absorbing formula provides
                broad-spectrum protection without leaving a greasy residue.
                Enriched with antioxidants, it helps prevent premature aging
                caused by sun exposure while keeping the skin moisturized.
                Suitable for all skin types, this sunblock offers long-lasting
                protection for outdoor activities.
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
              alt="Uvepro Milk SPF 50"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Uvepro Milk SPF 50</h5>
              <p className="card-text">320 L.E</p>
              <p
                className="card-text"
                style={{ backgroundColor: "#d2dfc9", padding: 10 }}
              >
                Uvepro Milk SPF 50 is a high-protection sunblock designed to
                shield the skin from harmful UVA and UVB rays. Its lightweight
                milk formula applies smoothly onto the skin, providing
                broad-spectrum protection without leaving a greasy or sticky
                residue. Enriched with SPF 50, it offers advanced defense
                against sunburn and premature aging caused by sun exposure.
                Suitable for all skin types, this sunblock is ideal for daily
                use and outdoor activities, helping to maintain healthy and
                protected skin.
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
              alt="Cetaphil Sun Block for Sensitive Skin"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Cetaphil Sun Block for Sensitive Skin
              </h5>
              <p className="card-text">1028 L.E</p>
              <p
                className="card-text"
                style={{ backgroundColor: "#d2dfc9", padding: 10 }}
              >
                Cetaphil Sunblock for sensitive skin is specially formulated to
                provide broad-spectrum protection against UVA and UVB rays. Its
                gentle formula is suitable for sensitive skin types, offering
                effective sun protection without causing irritation. Enriched
                with moisturizing ingredients, it helps to keep the skin
                hydrated and nourished while shielding it from the sun's harmful
                rays. This sunblock is non-comedogenic and fragrance-free,
                making it ideal for daily use on sensitive skin.
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
              alt="Eucerin Sun Block for Sensitive Skin"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Eucerin Sun Block for Sensitive Skin
              </h5>
              <p className="card-text">719 L.E</p>
              <p
                className="card-text"
                style={{ backgroundColor: "#d2dfc9", padding: 10 }}
              >
                Eucerin Sunblock for sensitive skin provides effective
                broad-spectrum protection against both UVA and UVB rays.
                Specifically formulated for sensitive skin, this sunblock is
                gentle and non-irritating. It contains advanced sun protection
                technology to help prevent sunburn and reduce the risk of skin
                cancer and premature skin aging caused by the sun. Enriched with
                soothing ingredients, it helps calm and protect the skin while
                keeping it hydrated. Eucerin Sunblock for sensitive skin is
                fragrance-free and suitable for daily use on the face and body.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sensun;
