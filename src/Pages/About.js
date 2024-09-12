import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1><b>About Me</b></h1>
      <p className="about-description">
        I am a dedicated and passionate software developer with a focus on building<br/>
        high-quality, scalable web applications. I enjoy learning<br/> new technologies and improving my skill set.
      </p>

      <div className="about-columns">

        
        <div className="about-column">
          <h2>Skills</h2>
          <ol>
            <li><b>Programming Languages:</b> <br />JavaScript, Java</li>
            <br/>
            <li><b>Frameworks and Libraries:</b> <br />React.js, Redux, Bootstrap, Tailwind CSS</li>
            <br/>
            <li><b>Tools:</b> <br />Git, GitHub, Netlify, Postman, Strapi</li>
            <br/>
            <li><b>Others:</b> <br/> API Integration, Responsive Design, Problem Solving</li>
          </ol>
        </div>

        
        <div className="about-column">
          <h2>Education</h2>
          <ol>
            <li><b>Seth Jai Parkash Mukand Lal Institute of Engineering and Technology, Radaur</b> <br />
              B.Tech in Computer Science and Engineering (2020 – 2025)
            </li>
            <br/>
            <li><b>DAV Centenary Public School, Indri Road, Karnal</b> <br />
              Class 12th (2019 – 2020)
            </li>
            <br/>
            <li><b>DAV Centenary Public School, Indri Road, Karnal</b> <br />
              Class 10th
            </li>
          </ol>
        </div>

        {/* Experience Section */}
        <div className="about-column">
          <h2>Experience</h2>
          <ol>
            <li>
              <b>Software Developer Trainee at TecHangouts</b> - July 2024 - Present
              <p className="para">MERN Stack: Currently undergoing training with industry experts in React.js at TecHangouts. As a Software Developer Trainee, I am gaining hands-on experience in full-stack web development, focusing on building dynamic and responsive web applications.</p>
            </li>
            <li>
              <b>Frontend Developer Intern at Suvidha Foundation</b> - Feb 2024 - March 2024
              <p className="para">As a team leader during my virtual internship at Suvidha Foundation, I spearheaded the development of a responsive website using React.js </p>
            
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
