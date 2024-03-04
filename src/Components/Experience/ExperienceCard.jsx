import React from 'react';
import './ExperienceCard.css'


const ExperienceCard = ({ companyLogo, position, company, date, description, skills, companyLink }) => {
  return (
    <div className="sc-eKBdFk jVjsEr experiencecardhai">
      <div className="sc-bUbCnL gnYlPd">
        <img src={companyLogo} alt="Company Logo" className="sc-kIKDeO fHNtMj logohaig" />
        <div className="sc-hNKHps jmYowc">
          <div className="sc-dsQDmV gXyWph position">{position}</div>
          <div className="sc-cZwWEu cYcuZM company">{company}</div>
          <div className="sc-jTYCaT jgoqAQ datehai">{date}</div>
        </div>
      </div>
      <div className="sc-jOhDuK ykctb">
        <span className="sc-hlnMnd iQezAS description">{description}</span>
        <br />
        <div className="sc-jQHtVU hCWdWR">
          <b>Skills:</b>
          <div className="sc-fvNpTx edwONn">
            {skills.map((skill, index) => (
              <div className="sc-fctJkW flsNtb skillhai" key={index}>• {skill}</div>
            ))}
          </div>
        </div>
      </div>
      <a href={companyLink} target="_blank" rel="noopener noreferrer">
        <img src={companyLogo} alt="Company Logo" className="sc-ZyCDH ccSuLm certificateskill" />
      </a>
    </div>
  );
};

export default ExperienceCard;
