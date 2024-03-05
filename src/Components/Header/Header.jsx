import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h4>Resume :  </h4> 
        <Link to="https://firebasestorage.googleapis.com/v0/b/rohitkhankriyalportfolio.appspot.com/o/My%20Documents%2FRohit%20Khankriyal%20Resume.pdf?alt=media&token=7f90abf1-12e1-4e94-a8f7-340abbd8b2b8">
          <img src="https://imgs.search.brave.com/mh1b-VvZjv8tsv5qGEc39PwW8btrhb0tvwRH0REhBdU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzI4Lzk2Lzc1/LzM2MF9GXzUyODk2/NzUxMl9UN0hjbHph/R0s5YXZyN0VxRGs2/UVlhVnhVR1VKWXZF/Vy5qcGc" alt="Portfolio" className = "logohaig" />
        </Link>
      </div>
      <div className="navbar__links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        {/* <a href="#achievements">Achievements</a> */}
      </div>
      <div className="navbar__social">
        <a href="https://www.linkedin.com/in/rohit-khankriyal-359680242/" target="_blank" rel="noopener noreferrer" id = "s1">
          <FaLinkedin />
        </a>
        <a href="https://github.com/khankriyalrohit" target="_blank" rel="noopener noreferrer" id = "s2">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/khankriyal__rohit/" target="_blank" rel="noopener noreferrer" id = "s3">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Header;
