import React, { useState, useEffect } from 'react';
import './About.css'; 
import myPhoto from '../../Images/myPhoto2.jpeg'; 

const About = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases = ['Web Developer', 'Deep Learning Beginner']; // List of phrases to cycle through

  useEffect(() => {
    // Function to cycle through phrases every few seconds
    const intervalId = setInterval(() => {
      setPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 3000); // Change interval duration as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-left">
        <img src={myPhoto} alt="My Photo" className="about-photo" />
        </div>
        <div className="about-right">
          <h2>I am Rohit Khankriyal....</h2>
          <div className="designation">
            <span className="typing-text">{phrases[phraseIndex]}</span>
          </div>
          <p className = "desc">
          Determined and hardworking, I aim to contribute effectively towards organizational goals while continuously seeking self-growth. Passionate about problem-solving and development, I strive to make meaningful contributions.
          </p>
          <p className = "college">Tehri Hydro Development Corporation - Institute of Hydropower Engineering and Technology</p>
        </div>
      </div>
    </div>
  );
};

export default About;
