import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <h1>Chào mừng đến với MONKEY5</h1>
        <p>Dịch vụ tiện ích gia đình tích hợp trên ứng dụng di động</p>
      </div>
    </section>
  );
};

export default Hero;
