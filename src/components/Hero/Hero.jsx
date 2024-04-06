import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h1><h2>Jmenuji se</h2>Marek Žák</h1>
        <p>
            Momentálně jsem DWH Engineerem ve společnosti IDC. Mám zkušenosti s Pythonem, Snowflake, AWS ale také
          s tvorbou webových stránek ať už ve WordPressu tak i okrajově v Reactu.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="mobile-hide tech-icon">
            <img src="./assets/images/python_icon.png" alt=""/>
          </div>
          <img src="./assets/images/hero-image-portrait.png" alt=""/>
        </div>

        <div>
          <div className="other-hide tech-icon">
            <img src="./assets/images/python_icon.png" alt=""/>
          </div>
          <div className="tech-icon">
            <img src="./assets/images/snowflake_icon.png" alt=""/>
          </div>
          <div className="tech-icon">
            <img src="./assets/images/aws_icon.png" alt=""/>
          </div>
          <div className="tech-icon">
            <img src="./assets/images/dbt_icon.png" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
