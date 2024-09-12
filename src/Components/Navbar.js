import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }



  return (
    <nav className="navbar">
      <div className=' nav-container'>
         <div className="navbar-logo">
        <NavLink to="/">MyPortfolio</NavLink>
      </div>
 
      <div className="hamburger" onClick={toggleMenu}>☰</div> 
        
      </div>
      

     
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><NavLink to="/" onClick={() => setIsOpen(false)}
         className={({ isActive }) => (isActive ? 'active-link' : '')}
        >Home</NavLink></li>
       

        <li><NavLink to="/about" onClick={() => setIsOpen(false)}
         className={({ isActive }) => (isActive ? 'active-link' : '')}
        
        >About</NavLink></li>
        

        <li><NavLink to="/projects" onClick={() => setIsOpen(false)}
         className={({ isActive }) => (isActive ? 'active-link' : '')}
        >Projects</NavLink></li>
        

        <li><NavLink to="/contact" onClick={() => setIsOpen(false)}
         className={({ isActive }) => (isActive ? 'active-link' : '')}
        >Contact</NavLink></li>
    
        
      </ul>
   
    </nav>
  );
}

export default Navbar;
