const express = require('express');
const Contact = require('../models/Contact');
const Joi = require('joi'); // Validation library

const router = express.Router();

// Validation Schema
const contactSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  company: Joi.string(),
  jobTitle: Joi.string(),
});

// POST /contacts - Add new contact
router.post('/', async (req, res) => {
  const { error } = contactSchema.validate(req.body); // Validate request body
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const existingContact = await Contact.findOne({ email: req.body.email });
    if (existingContact) return res.status(400).send('Contact with this email already exists.');

    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;


// GET /contacts - Retrieve all contacts
router.get('/', async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (err) {
      res.status(500).send('Server error');
    }
  });

  // PUT /contacts/:id - Update a specific contact
router.put('/:id', async (req, res) => {
    const { error } = contactSchema.validate(req.body); // Validate request body
    if (error) return res.status(400).send(error.details[0].message);
  
    try {
      const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!contact) return res.status(404).send('Contact not found');
      res.status(200).json(contact);
    } catch (err) {
      res.status(500).send('Server error');
    }
  });

  
  // DELETE /contacts/:id - Delete a contact
router.delete('/:id', async (req, res) => {
    try {
      const contact = await Contact.findByIdAndDelete(req.params.id);
      if (!contact) return res.status(404).send('Contact not found');
      res.status(200).send('Contact deleted');
    } catch (err) {
      res.status(500).send('Server error');
    }
  });
  