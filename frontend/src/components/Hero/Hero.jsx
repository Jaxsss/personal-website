import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Jmenuji se</h2>
        <h1>Marek Žák</h1>
        <p>
          Jsem DWH Engineer - věnuji se primárně Pythonu, SQL ale také tvorbě webu (Wordpress, React).
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon-top">
            <img src="./assets/images/img01.png" alt=""/>
          </div>
          <img src="./assets/images/hero-image-portrait.png" alt=""/>
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
