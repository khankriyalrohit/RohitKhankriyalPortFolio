import React from 'react';
import EducationCard from './EducationCard';
import "./Education.css"

const Education = () => {
  const education1Data = [
    {
      institution: 'Tehri Hydro Development Coorporation - Institute of Hydropower Engineering and Technology',
      degree: 'Bachelor of Technology (Computer Science and Engineering)',
      duration: 'Sept 2021 - July 2025',
      grade: '8 CGPA',
      description: 'Im a third-year CSE student at THDC-IHET, with expertise in development, deep learning, and proficiency in DSA, computer networks, DBMS, and DAA. Committed to continuous learning and advancement in my field.',
      image: 'https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeBanner/ee172f02-a3b1-43e6-bbd2-3a470fe4227d.png',
      connectorColor: 'rgb(133, 76, 230)'
    },
  ];
  const education2Data = [
    {
      institution: 'Olympus High School, Dehradun, Uttrakhand',
      degree: 'Intermediate in Science ( Physics, Chemistry, Mathematics)',
      duration: 'Mar 2020 - July 2021',
      grade: '94.8 %',
      description: 'In my 12th grade, I studied PCM with Computer Science as an additional subject. I actively participated in football tournaments and cleared JEE and NDA exams, achieving success in NDA exams five times.',
      image: 'https://th.bing.com/th/id/OIP.oOPhQWAYFotCylWP6A_SfAHaIa?rs=1&pid=ImgDetMain',
      connectorColor: 'rgb(133, 76, 230)'
    },
  ];
  const education3Data = [
    {
      institution: 'Olympus High School, Dehradun, Uttrakhand',
      degree: ' Matriculation ',
      duration: 'Mar 2018 - July 2019',
      grade: '98.4 %',
      description: 'In my 10th grade, I pursued Science with Mathematics, Social Studies, English, and Hindi. I achieved a good percentage in my exams, demonstrating strong academic performance across various subjects.',
      image: 'https://th.bing.com/th/id/OIP.oOPhQWAYFotCylWP6A_SfAHaIa?rs=1&pid=ImgDetMain',
      connectorColor: 'rgb(133, 76, 230)'
    },
  ];
  return (
    <div id="education" className="sc-eGAhfa gBUsdZ eduname">
      <div className="sc-hAsxaJ hAFpXd">
        <div className="sc-kYWVYA ezcTzD headinghai">Education</div>
        <div className="sc-yeoIj hOBKnx hemlo">My education has been a journey of self-discovery and growth. My educational details are as follows.</div>
        <div className="sc-dWINGa kWSjXl edusection ">
          <ul className="MuiTimeline-root MuiTimeline-positionRight css-1oa1nt educard">
            {education1Data.map((item, index) => (
              <EducationCard key={index} {...item} />
            ))}
               {education2Data.map((item, index) => (
              <EducationCard key={index} {...item} />
            ))}
            {education3Data.map((item, index) => (
              <EducationCard key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
