import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Neváhejte se ozvat!</h5>

      <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="zakmarek4@gmail.com"
          />

          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/Jaxsss"
          />
        </div>

        <div style={{flex: 1}}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
