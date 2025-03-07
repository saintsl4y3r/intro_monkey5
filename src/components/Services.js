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
          <h3>🧺 Laundry</h3>
          <p>Pick up and deliver clothes to your home, saving you time.</p>
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