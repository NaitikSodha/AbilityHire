const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS)
app.use(express.static(__dirname));

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Files will be stored in the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a schema for job applicants
const applicantSchema = new mongoose.Schema({
    jobTitle: String,
    company: String,
    location: String,
    disability: String,
    name: String,
    email: String,
    contact: String,
    pdfFilePath: String
});

// Define a schema for user registration
const userRegistrationSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Create models for the data
const Applicant = mongoose.model('Applicant', applicantSchema);
const User = mongoose.model('User', userRegistrationSchema);

// Serve the HTML form for registration
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html'); // Make sure you have a register.html file
});

// Handle user registration form submission
app.post('/register', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    const newUser = new User({
        username,
        email,
        password // Store the password directly (no hashing)
    });

    newUser.save()
        .then(() => res.send('User registered successfully'))
        .catch(err => res.status(400).send('Error saving user to database'));
});

// Serve the HTML form for job applicants
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

// Handle job application form submission with file upload
app.post('/submit-form', upload.single('pdf'), (req, res) => {
    const newApplicant = new Applicant({
        jobTitle: req.body.jobTitle,
        company: req.body.company,
        location: req.body.location,
        disability: req.body.disability,
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        pdfFilePath: req.file.path // Store file path in the database
    });

    newApplicant.save()
        .then(() => res.send('Form data and PDF file saved to MongoDB'))
        .catch(err => res.status(400).send('Error saving to database'));
});

// Create 'uploads' directory if it doesn't exist
const fs = require('fs');
const dir = './uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
