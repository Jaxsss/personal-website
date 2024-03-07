import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Jméno" />
          <input type="text" name="lastname" placeholder="Přijmení" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Zpráva" rows={3} />

        <button>ODESLAT</button>
      </form>
    </div>
  );
};

export default ContactForm;
