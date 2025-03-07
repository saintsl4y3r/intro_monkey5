import React from "react";
import "../styles/Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>🏠 House cleaning</h3>
          <p>Comprehensive cleaning service, helping you have a clean and comfortable living space.</p>
        </div>
        <div className="service-item">
          <h3>🧑‍🍳 Cooking</h3>
          <p>Cooking delicious meals for your family just like a mother</p>
        </div>
        <div className="service-item">
          <h3>👶 Child care</h3>
          <p>Help you take care of your baby with a team of professional nannies.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;