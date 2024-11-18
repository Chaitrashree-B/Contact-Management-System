VContact Management System
Project Description:
This project is a Contact Management System developed using ReactJS for the frontend, NodeJS with Express for the backend, and MongoDB as the database. The application allows users to manage their contact information (e.g., first name, last name, email, phone number, company, and job title). Users can perform CRUD (Create, Read, Update, Delete) operations on the contacts.

Major Technical Decisions:
Frontend:

Used ReactJS to build a dynamic and responsive user interface.
Implemented Material UI (MUI) components for creating a clean and professional UI.
Added pagination and sorting to the contacts table for better usability.
Backend:

Used NodeJS with Express for building the RESTful APIs to handle CRUD operations.
MongoDB was chosen as the database to store contact information due to its flexibility and ease of integration with NodeJS.
Integrated Mongoose to interact with the MongoDB database and handle schema validation and CRUD operations.
Error Handling:

Implemented validation for required fields, handled duplicate entries, and returned appropriate error messages for invalid data.
Setup Instructions:
To set up and run this project, follow these steps:
   git clone https://github.com/your-username/contact-management-system.git
Install dependencies: Navigate to the project directory and install the frontend and backend dependencies.

For the frontend (ReactJS):     
    cd client
    npm install

For the backend (NodeJS):
    cd server
    npm install

Set up MongoDB:

If you're using a local MongoDB instance, make sure it's running. You can start it using the following command:
bash
Copy code
mongod
Alternatively, if you're using MongoDB Atlas, set up a cluster and use the connection string in your backend .env file.
Configure environment variables: In the backend directory, create a .env file and add the following:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/contact-management
PORT=5000
If you're using MongoDB Atlas, replace the MONGO_URI with your Atlas connection string.
Run the project:

Start the backend server:
bash
Copy code
npm start
Start the frontend:
bash
Copy code
npm start
The application will now be running on http://localhost:3000 (frontend) and http://localhost:5000 (backend).

Database Schema Script:
In the backend directory, the Contact model is defined in models/Contact.js. Here’s the database schema:
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
    unique: true,
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
Challenges and Solutions:
Challenge: Handling dependency conflicts in NodeJS.

Solution: I encountered a dependency conflict when trying to install the required packages for Material UI and its icons. After researching, I resolved this by either using the --force flag or upgrading to compatible versions of the packages.
Challenge: Managing pagination and sorting for the contacts table.

Solution: Implemented pagination by utilizing the MUI table features and sorting functionality. I used React's state management to control the table's current page and sorting order.
Challenge: Implementing robust error handling for invalid inputs.

Solution: Added input validation to the backend API and handled errors effectively by using appropriate status codes (400 for bad requests, 404 for not found, etc.) and sending clear error messages to the frontend.
Challenge: Working with MongoDB's schema-less nature while ensuring consistency.

Solution: I used Mongoose to enforce validation on the schema and made sure all required fields were included before saving or updating the contact data.

