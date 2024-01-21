import React from "react";
// import ContactForm from "./ContactForm";
import Contact from "./Contact";

const Contacts = function ({ contactsDetails }) {
  return (
    <div>
      <ul>
        {contactsDetails.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
