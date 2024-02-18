import React, {useRef} from "react";
import "./ProjectCard.css";
import {PROJECTS} from "../../../utils/data";
import Slider from "react-slick";

const ProjectCard = ({ details }) => {
  return (
      <div className="project-card">
          <img src={details.img1} alt=""/>

          <h6>{details.title}</h6>
          <div className="property-container">
              <div className="property-1">{details.technology}</div>
              <div className="property-2">{details.description}</div>
          </div>
          <div className="property-1 property-container">
              <a href={details.link}>{details.link}</a>
          </div>

          <ul>
              {details.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
              ))}
          </ul>
      </div>
  );
};

export default ProjectCard;
