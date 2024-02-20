import React, { useRef } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { PROJECTS } from "../../utils/data";
import Slider from "react-slick";

const Projects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
      <section id='projects' className="projects-container">
        <h5>Projekty</h5>
        <div className="project-content">
          <div className="arrow-right-project" onClick={slideRight}>
            <span class="material-symbols-outlined">chevron_right</span>
          </div>

          <div className="arrow-left-project" onClick={slideLeft}>
            <span class="material-symbols-outlined">chevron_left</span>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {PROJECTS.map((item) => (
                <ProjectCard key={item.title} details={item}/>
            ))}
          </Slider>
        </div>
      </section>
  );
};

export default Projects;
