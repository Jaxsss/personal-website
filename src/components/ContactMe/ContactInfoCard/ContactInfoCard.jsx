import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>

      <p><a href={link} target="_blank">{text}</a></p>
    </div>
  );
};

export default ContactInfoCard;
