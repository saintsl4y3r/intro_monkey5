import React from "react";
import "../styles/Partners.css";
import zalo from "../assets/partner-zalopay.png";
import momo from "../assets/partner-momo.png";
import hoozing from "../assets/partner-hoozing.png";

function Partners() {
  return (
    <section id="partners" className="partners">
      <h2>Đối tác của MONKEY5</h2>
      <div className="partners-container">
        <div className="partner-item">
          <img src={zalo} alt="ZaloPay" />
          <h3>ZALOPAY</h3>
          <p>Ứng dụng thanh toán di động nhanh trong 2 giây</p>
        </div>
        <div className="partner-item">
          <img src={momo} alt="MoMo" />
          <h3>MOMO</h3>
          <p>Siêu ứng dụng thanh toán số 1 Việt Nam</p>
        </div>
        <div className="partner-item">
          <img src={hoozing} alt="Hoozing" />
          <h3>HOOZING</h3>
          <p>Ứng dụng mua và thuê nhà</p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
