import React from 'react';
import './Home.css';
import profileImage from '../assets/PankajKumar_1221266_CSE-removebg-preview.png'; 
import Typewriter from "typewriter-effect"
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import pdf from '../assets/myCVresume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaLinks.css'; 
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <div cl>
        
      
      <div className="home-container">
      <div className="home-text">
        <h1>Hello,   <Typewriter options={{
          strings: ["I'm Pankaj Kumar"],
          autoStart: true,
          loop: true,
          wrapperClassName:"type-container"

        }}  /></h1>
      
     
        <p>
          I am a passionate software developer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I'm focused on building responsive full-stack web
          applications.
          </p>

 
      <Button  variant="success"><a href={pdf}className="download-link">Download CV</a></Button>{' '}
   <br/>
   <div className="social-media-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  
      </div>
      {/* <div className="home-image">
        <img src={profileImage} alt="Profile" />
      </div> */}
        
               <motion.img
        src={profileImage}
        alt="Home"
        className="home-image"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 3, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
    
      
      </div>
      
      <About /> 
      <Projects />
      <Contact /> 
        <Footer />
        
        </div>
    </>
    
  );
};

export default Home;
