    import React from "react";
    import { Link } from "react-router-dom";
    import "./Bloom.css";

    function Home() {
    return (
        <>
        <div className="homeall">
            <div className="main">
            <h2>Natural Is Beauty</h2>
            <p>
                ALL your skin needs in one place
                <br /> Get the skin you dream about with <br />the most effictive routines
            </p>
            <br />
            <br />
            <br />
            <div className="skin-info">
            <b>Start your journey now!</b>
            </div>
            <br />
            <div className="about-container-home">
            <div className="about-content">
                <h1>Who are we?</h1>
                <p className="about-paragraph">
                We are <strong className="highlight">Bloomify</strong>, we believe
                everyone deserves healthy, radiant skin. But we know that finding
                the right skincare routine can be overwhelming. That’s why we've
                designed Bloomify to be your personal skincare guide.
                </p>
                <p className="about-paragraph">
                We start by helping you identify your skin type — whether it’s
                oily, dry, or sensitive — so you can make informed decisions from
                the very beginning. Then, we guide you through selecting the right
                products tailored to your unique needs.
                </p>
                <p className="about-paragraph">
                Our platform offers a wide range of brands and prices, ensuring
                you can find quality products that fit your skin and budget. With
                Bloomify, skincare is no longer trial and error; it’s about
                finding what truly works for you.
                </p>
                <p className="about-paragraph">
                Let us help you discover your perfect skincare routine and bloom
                from within.
                </p>
            </div>
            </div>
            <h2>READY FOR THE SKIN YOU DREAMED ABOUT?</h2>
            <p> Click and get your skincare routune!</p>
            </div>
            <div className="skin-info">           
            <br />
            <Link to="/type">Choose from here</Link>
            <br />
            <a href="https://youtu.be/isx9ZCrdck8?si=oVIz2kwNFAJ1oerb">
                Find Out!
            </a>
            </div>
            </div>
        </>
    );
    }

    export default Home;
