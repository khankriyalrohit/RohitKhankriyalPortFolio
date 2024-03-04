import React from 'react';
import "./EducationCard.css"

const EducationCard = ({ institution, degree, duration, grade, description, image, connectorColor }) => {
  return (
    <li className="MuiTimelineItem-root MuiTimelineItem-positionRight MuiTimelineItem-missingOppositeContent css-1rcbby2 secondhalf">
      <div className="MuiTypography-root MuiTypography-body1 MuiTimelineContent-root MuiTimelineContent-positionRight css-68bxna">
        <div className="sc-evrZIY tlqLC ">
          <div className="sc-fIavCj jZZHaY">
            <img src={image} className="sc-duzrYq cCGrAV" alt={institution} />
            <div className="sc-dkdnUF kerang">
              <div className="sc-WCkqM fRQwzv">{institution}</div>
              <div className="sc-ikjQzJ dtZwIA degree">{degree}</div>
              <div className="sc-tsFYE ccHgXk">{duration}</div>
            </div>
          </div>
          <div className="sc-bhVIhj hpYgTy"><b>Grade: </b>{grade}</div>
          <div className="sc-brCFrO hDcSRM "><span className="sc-gITdmR jqAOTK edudesc">{description}</span></div>
        </div>
      </div>
      <div className="MuiTimelineSeparator-root css-11tgw8h">
        <span className="MuiTimelineDot-root MuiTimelineDot-outlined MuiTimelineDot-outlinedSecondary css-1d8391m"></span>
        <span className="MuiTimelineConnector-root css-idv8vo" style={{ background: connectorColor }}></span>
      </div>
    </li>
  );
}

export default EducationCard;
