const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure that the email is unique
  },
  phone: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
