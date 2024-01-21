import React from "react";

const Contact = function ({ contact }) {
  return (
    <li>
      <h1>{contact.name}</h1>
      <p>{contact.number}</p>
      <p>{contact.location}</p>
    </li>
  );
};

export default Contact;
