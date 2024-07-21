import React from "react";
import TileBackground from "./TileBackground";
import ContactDetails from "./ContactDetails";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-us">
      <TileBackground />
      <ContactDetails />
    </div>
  );
}

export default Contact;
