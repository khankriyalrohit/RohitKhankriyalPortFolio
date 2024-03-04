import React from 'react';
import ExperienceCard from './ExperienceCard';
import "./Experience.css"

const Experience = () => {
  return (
    <div className = "experience" id = "experience">
      <h1 className = "headexpe"> EXPERIENCE</h1>
      <ExperienceCard
        companyLogo="https://th.bing.com/th/id/OIP.BrHpgs65UlKaxte0B2yJoQHaHV?rs=1&pid=ImgDetMain"
        position="Web Development Intern"
        company="THDC-RISHIKESH"
        date="03 JAN 2024 - 04 FEB 2023"
        description="I have developed an Appointment Management Website facilitating visitors to schedule meetings with offices while maintaining comprehensive IN/OUT records for efficient tracking and management."
        skills={['Github', 'React', 'HTML', 'CSS', 'JavaScript' , 'NodeJS']}
        companyLink="https://th.bing.com/th/id/OIP.BrHpgs65UlKaxte0B2yJoQHaHV?rs=1&pid=ImgDetMain"
      />
    </div>
  );
};

export default Experience;
