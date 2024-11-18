import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const handleAddContact = (contactData) => {
    console.log('New Contact:', contactData);
    // Add your logic to save the contact using an API call
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <ContactForm onSubmit={handleAddContact} />
    </div>
  );
};

export default ContactPage;
