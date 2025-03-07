import React from "react";
import "../styles/Partners.css";
import zalo from "../assets/partner-zalopay.png";
import momo from "../assets/partner-momo.png";
import hoozing from "../assets/partner-hoozing.png";

function Partners() {
  return (
    <section id="partners" className="partners">
      <h2>MONKEY5's Partners</h2>
      <div className="partners-container">
        <div className="partner-item">
          <img src={zalo} alt="ZaloPay" />
          <h3>ZALOPAY</h3>
          <p>Fast mobile payment application in 2 seconds</p>
        </div>
        <div className="partner-item">
          <img src={momo} alt="MoMo" />
          <h3>MOMO</h3>
          <p>Vietnam's No. 1 payment super app</p>
        </div>
        <div className="partner-item">
          <img src={hoozing} alt="Hoozing" />
          <h3>HOOZING</h3>
          <p>Home buying and renting app</p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
