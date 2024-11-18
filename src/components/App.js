import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    const id = new Date().getTime(); // Assign a unique ID
    setContacts([...contacts, { id, ...newContact }]);
  };

  const handleEditContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <ContactForm onSubmit={handleAddContact} />
      <ContactsTable
        contacts={contacts}
        onEdit={(contact) => {
          const updatedContact = { ...contact, firstName: 'Updated Name' }; // Example
          handleEditContact(updatedContact);
        }}
        onDelete={handleDeleteContact}
      />
    </div>
  );
};

export default App;
