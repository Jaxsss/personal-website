import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Neváhejte se ozvat!</h5>
      <div className="row">
          <div className="contact-content">
            <div className="column-1">
              <ContactInfoCard
                iconUrl="./assets/images/email-icon.svg"
                text="zakmarek4@gmail.com"
                link="mailto:zakmarek4@gmail.com"
              />

              <ContactInfoCard
                iconUrl="./assets/images/github-icon.svg"
                text="github.com/Jaxsss"
                link="https://github.com/Jaxsss"
              />
            </div>
            <div className="contact-content">
                <ContactInfoCard
                iconUrl="./assets/images/github-icon.svg"
                text="linkedin.com/marek-zak"
                link="https://www.linkedin.com/in/marek-%C5%BE%C3%A1k-2473b11bb/"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
