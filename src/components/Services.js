import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Dịch vụ của chúng tôi</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>🏠 Dọn dẹp nhà cửa</h3>
          <p>Dịch vụ dọn dẹp toàn diện, giúp bạn có không gian sống sạch sẽ, thoải mái.</p>
        </div>
        <div className="service-item">
          <h3>🧺 Giặt ủi</h3>
          <p>Nhận và giao quần áo tận nhà, giúp bạn tiết kiệm thời gian.</p>
        </div>
        <div className="service-item">
          <h3>👶 Chăm sóc trẻ</h3>
          <p>Giúp bạn chăm sóc bé yêu với đội ngũ bảo mẫu chuyên nghiệp.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;