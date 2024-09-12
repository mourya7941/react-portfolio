import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProjectCarousel.css';
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import project1 from '../assets/project1.png'; // Replace with actual images
import project2 from '../assets/project2.png'; // Replace with actual images
import project3 from '../assets/project3.png'; // Replace with actual images
// import image from '../assets/lang.png';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
  
      <Slider {...settings}>
        <div className="project-slide">
          <img src={project1} alt="Project 1" className="project-image" />
          <br/>
          <h2>NGO Website</h2>
          
          <p>Developed Stray Lovers Dogs Ngo Website<br />
            <p>Used Technologies</p>
<div className="technologies" style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
  <div style={{ textAlign: 'center' }}>
    <ImHtmlFive style={{ fontSize: '30px', color: 'orange', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>HTML5</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <FaCss3Alt style={{ fontSize: '30px', color: 'blue', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>CSS3</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <TbBrandJavascript style={{ fontSize: '30px', color: 'yellow', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>JavaScript</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <GrReactjs style={{ fontSize: '30px', color: 'cyan', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>React</p>
  </div>
</div>
          </p>
        
          <div className="project-overlay">
            <div className="overlay-content">
              <h3>Project 1</h3>
              <a href="https://github.com/project1" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://straylovers.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="project-slide">
          <img src={project2} alt="Project 2" className="project-image" />
          <br/>
          <h2>Todo App</h2>
          <p>Developed Daily Todo App <br />
            Daily Routine</p>
          <br/>
          <div className="technologies" style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
  <div style={{ textAlign: 'center' }}>
    <ImHtmlFive style={{ fontSize: '30px', color: 'orange', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>HTML5</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <FaCss3Alt style={{ fontSize: '30px', color: 'blue', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>CSS3</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <TbBrandJavascript style={{ fontSize: '30px', color: 'yellow', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>JavaScript</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <GrReactjs style={{ fontSize: '30px', color: 'cyan', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>React</p>
  </div>
</div>

          <div className="project-overlay">
            <div className="overlay-content">
              <h3>Project 2</h3>
              <a href="https://github.com/project2" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="project-slide">
          <img src={project3} alt="Project 3" className="project-image" />
          <br/>
          <h2>E-BookStore </h2>
          <br/>
          <p>Developed E-Bookstore website<br />
         E-Bookstore  </p>
          <div className="technologies" style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
  <div style={{ textAlign: 'center' }}>
    <ImHtmlFive style={{ fontSize: '30px', color: 'orange', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>HTML5</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <FaCss3Alt style={{ fontSize: '30px', color: 'blue', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>CSS3</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <TbBrandJavascript style={{ fontSize: '30px', color: 'yellow', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>JavaScript</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <GrReactjs style={{ fontSize: '30px', color: 'cyan', marginBottom: '10px' }} />
    <p style={{ fontSize: '10px', color: 'white' }}>React</p>
  </div>
</div>
          <div className="project-overlay">
            <div className="overlay-content">
              <h3>Project 3</h3>
              <a href="https://github.com/project3" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://project3-demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Projects;
