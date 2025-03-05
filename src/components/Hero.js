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
        <h1>Welcome to MONKEY5</h1>
        <p>Integrated home utility services on mobile application</p>
      </div>
    </section>
  );
};

export default Hero;
