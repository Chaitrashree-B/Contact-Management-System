const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contacts');

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

mongoose.connect('mongodb://localhost:27017/contact-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
