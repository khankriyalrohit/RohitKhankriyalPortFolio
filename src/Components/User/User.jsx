import React from 'react';
import './User.css';
import Header from '../Header/Header'
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'
import Education from '../Education/Education';
import CubeSkill from '../CubeSkill/CubeSkill'

const User = () => {
    return (
        <div className="UserPage">
          <Header/>
          <About/>
          <CubeSkill/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Education/>
          <Contact/>
          <Footer/>
        </div>
    );
};

export default User;
