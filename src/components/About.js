// src/components/About.js
import React from "react";
import "../styles/About.css";

import about1 from "../assets/logo-monkey5.png"; 
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import about6 from "../assets/about6.png";
import coreValueImage from "../assets/core-value-1.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-section">
        <div className="about-text">
          <h2>We are MONKEY5</h2>
          <p>
            MONKEY5 Co., Ltd was founded on January 14, 2025 by CEO – Founder Hoàng Anh.
          </p>
          <p>
            MONKEY5 is a pioneering company applying technology to the home service industry 
            in Vietnam. We provide multiple convenient services such as house cleaning, 
            air-conditioner cleaning, grocery shopping, and more across Southeast Asia. 
            Through the MONKEY5 booking app for customers and the MONKEY5 Partner app for collaborators, 
            both customers and partners can actively post and accept tasks directly on the app.
          </p>
        </div>
        <div className="about-image">
          <img src={about1} alt="We are MONKEY5" />
        </div>
      </div>

      <div className="about-section section-right">
        <div className="about-text">
          <h2>The meaning of MONKEY5</h2>
          <p>
            The name MONKEY5 is inspired by the image of cute monkeys, referring to the diligent collaborators 
            who always complete their assigned tasks. They (mTaskers) — these hardworking, industrious, 
            and dedicated “monkeys” — provide high-quality services to customers in a convenient and efficient manner.
          </p>
        </div>
        <div className="about-image">
          <img src={about2} alt="The meaning of MONKEY5" />
        </div>
      </div>

      <div className="about-section section-left">
        <div className="about-text">
          <h2>Areas of operation</h2>
          <p>
            Currently, MONKEY5 provides convenient services for numerous households across 
            more than 20 major cities and provinces in Vietnam, including Hanoi, Hai Phong, Da Nang, Hoi An, 
            Nha Trang, Da Lat, Binh Duong, Bien Hoa, Ho Chi Minh City, Can Tho, and over 10 other provinces. 
            Additionally, MONKEY5 is expanding overseas with its main service being hourly home cleaning 
            in Thailand and Indonesia.
          </p>
        </div>
        <div className="about-image">
          <img src={about3} alt="Areas of operation" />
        </div>
      </div>

      <div className="about-section section-right">
        <div className="about-text">
          <h2>Further development</h2>
          <p>
            In Vietnam, to date, MONKEY5 has helped over 1,000,000 domestic workers earn a stable income 
            and meet the home care needs of more than 10,000,000 customers. With the goal of providing 
            the best service experience to our customers, MONKEY5 continuously improves its service quality 
            and the app.
          </p>
        </div>
        <div className="about-image">
          <img src={about4} alt="Further development" />
        </div>
      </div>

      <div className="about-section section-left">
        <div className="about-text">
          <h2>Vision</h2>
          <p>
            Not only aiming to help you take care of your home with services like 
            <strong> house cleaning, air-conditioner cleaning, family meal cooking, laundry...</strong> 
            iTasker is continuously expanding into various other services in Southeast Asia, 
            providing even more integrated home convenience services via a mobile app.
          </p>
        </div>
        <div className="about-image">
          <img src={about5} alt="Vision" />
        </div>
      </div>

      <div className="about-section section-right">
        <div className="about-text">
          <h2>Mission</h2>
          <p>
            MONKEY5 was born with the mission to help solve household tasks for urban residents 
            and improve their quality of life by applying a systematic, professional, and dedicated workforce. 
            At the same time, MONKEY5 also creates opportunities for domestic workers to earn additional income, 
            enabling both customers and collaborators to easily connect for full-time or part-time labor.
          </p>
        </div>
        <div className="about-image">
          <img src={about6} alt="Mission" />
        </div>
      </div>

      <div className="core-values">
        <h2>Core Values</h2>
        <div className="core-value-image">
          <img src={coreValueImage} alt="Core Value" />
        </div>
        <div className="core-values-items">
          <div className="value-item">
            <h3>Quality</h3>
            <p>
              Ensure service quality for customers. At iTasker, we invest in a thorough 
              recruitment, training, and inspection process to enhance the overall experience.
            </p>
          </div>
          <div className="value-item">
            <h3>Dedication</h3>
            <p>
              Always put customer satisfaction and benefits first. Each task is carried out 
              with utmost care and passion.
            </p>
          </div>
          <div className="value-item">
            <h3>Convenience</h3>
            <p>
              A fast, convenient app that helps customers save time. With just a few taps, 
              household tasks are neatly resolved.
            </p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>
              Continuously innovate to deliver the best experience for customers. 
              Always listen to feedback and suggestions to grow day by day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
