import React, { useState } from "react";
import contacts from "./ContactsData";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";

const App = function () {
  const [contactsDetails, setContactDetails] = useState(contacts);

  const handleAddContact = (contact) => {
    setContactDetails((prevContacts) => [...prevContacts, contact]);
  };

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} />
      <Contacts contactsDetails={contactsDetails} />
    </div>
  );
};

export default App;
