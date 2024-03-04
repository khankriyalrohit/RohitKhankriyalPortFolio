import React from 'react';
import './Card.css';

const Card = (props) => {
  const { category, skills } = props;

  return (
    <div className="card">
      <h2 className = "category">{category}</h2>
      <div className="card-content">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.imageUrl} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
