import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <h1 className="footer-heading">Rohit Khankriyal</h1>
                <nav className="footer-nav">
                    <a href="#about" className="footer-link">About</a>
                    <a href="#skills" className="footer-link">Skills</a>
                    <a href="#experience" className="footer-link">Experience</a>
                    <a href="#projects" className="footer-link">Projects</a>
                    <a href="#education" className="footer-link">Education</a>
                </nav>
                <div className="social-icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon facebook"><FaFacebook /></a>
                    <a href="https://twitter.com/khnakriyalrohit" target="_blank" rel="noopener noreferrer" className="social-icon twitter"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/in/rohit-khankriyal-359680242/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/khankriyal__rohit/" target="_blank" rel="noopener noreferrer" className="social-icon insta"><FaInstagram /></a>
                </div>
                <p className="footer-text">© 2024 Rohit Khnakriyal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;
