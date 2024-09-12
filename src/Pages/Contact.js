import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import profileImage from '../assets/contactus.png'; // Add your image here

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback</label>
            <textarea id="feedback" name="feedback" rows="5" placeholder="Enter your feedback" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <div className="social-media-links">
          <h3>Follow Me</h3>
          <a href="https://www.facebook.com/profile.php?id=100015063225875" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/mourya7941/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/pankaj-kumar-91203b251/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/mourya7941" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
