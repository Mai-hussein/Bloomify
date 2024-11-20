import React from "react";
import "./Bloom.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Who are we</h1>
        <p className="about-paragraph">
          At <strong className="highlight">Bloomify</strong>, we believe everyone deserves healthy,
          radiant skin. But we know that finding the right skincare routine can
          be overwhelming. That’s why we've designed Bloomify to be your
          personal skincare guide.
        </p>
        <p className="about-paragraph">
          We start by helping you identify your skin type — whether it’s oily,
          dry, or sensitive — so you can make informed decisions from the very
          beginning. Then, we guide you through selecting the right products
          tailored to your unique needs.
        </p>
        <p className="about-paragraph">
          Our platform offers a wide range of brands and prices, ensuring you
          can find quality products that fit your skin and budget. With
          Bloomify, skincare is no longer trial and error; it’s about finding
          what truly works for you.
        </p>
        <p className="about-paragraph">
          Let us help you discover your perfect skincare routine and bloom from
          within.
        </p>
      </div>
    </div>
  );
}

export default About;