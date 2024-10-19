const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const path = require('path');
const app = express();
const fs = require('fs');

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

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://naitikjsodha:tlxnY2kySVWhMslG@abilityhire.pr8eh.mongodb.net/?retryWrites=true&w=majority&appName=AbilityHire')
        console.log("Connected to MongoDB successfully")
    }
    catch {
        console.log("Connect failed")
    }
}

connectDB();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/myDatabase')
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

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

// Serve the register page
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html'); // Ensure you have the register.html file
});

// Handle user registration form submission
// Handle user registration form submission
app.post('/register', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.redirect('/register.html?error=Passwords do not match'); // Redirect and return immediately
    }

    // Check if email already exists
    User.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                return res.redirect('/register.html?error=Email already exists'); // Redirect and return immediately
            }

            // Check if username already exists
            return User.findOne({ username: username }).then(existingUsername => {
                if (existingUsername) {
                    return res.redirect('/register.html?error=Username already exists'); // Redirect and return immediately
                }

                // Create a new user if no existing user is found
                const newUser = new User({
                    username,
                    email,
                    password // Store the password directly (no hashing)
                });

                // Save the new user to the database
                return newUser.save();
            });
        })
        .then(() => {
            // Only redirect to login after successful registration
            
            return res.redirect('/login.html?registered=success'); // Redirect after successful registration
        })
        .catch(err => {
            // Handle any errors from the promise chain
            if (!res.headersSent) {
                return res.status(500).send('Error saving user to database'); // Send error only if no headers were sent
            }
        });
});


// Serve the HTML form for login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html'); // Make sure you have a login.html file
});

// Handle user login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user in the database
    User.findOne({ username: username, password: password }) // No hashing for simplicity
        .then(user => {
            if (user) {
            const email = user.email;
                res.redirect(`/profile?success=Login%20Successful%20!&loggedIn=true&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`); // Redirect with success and username
            } else {
                res.redirect('/login?error=Invalid%20username%20or%20password.'); // Redirect to login with error message
            }
        })
        .catch(err => {
            console.error('Error processing login request:', err); // Log the error
            res.status(500).send('Error processing request.'); // Send error response
        });
});

// Serve the HTML form for profile
app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/profile.html'); 
});

app.get('/profile', async (req, res) => {
    const username = req.query.username;
    const email = req.query.email;  
    const successMessage = req.query.success || ''; // Get the success message from query parameters
    try {
        // Find the user by email (or username if preferred)
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Fetch job applications for the user
        const jobsApplied = await Applicant.find({ email: user.email });

        // Render the profile page and pass user data and job applications
        res.sendFile(path.join(__dirname, 'profile.html'), (err) => {
            if (err) {
                res.status(err.status).end();
            } else {
                // Here you could also send the user data and job applications to the front-end
                // res.render('profile', { user, jobsApplied, successMessage });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Add this route in your server.js file
app.get('/api/job-applications', async (req, res) => {
    const { email } = req.query;

    try {
        const jobs = await Applicant.find({ email: email });
        res.json(jobs);
    } catch (error) {
        console.error('Error fetching job applications:', error);
        res.status(500).json({ error: 'Failed to fetch job applications.' });
    }
});

app.delete('/api/job-applications/:jobId', async (req, res) => {
    const jobId = req.params.jobId;

    // Find the job application first to get the PDF file path
    const jobApplication = await Applicant.findById(jobId);

    if (jobApplication) {
        const pdfFilePath = jobApplication.pdfFilePath;

        // Delete the application
        await Applicant.deleteOne({ _id: jobId });

        // Remove the associated PDF file from the uploads folder
        fs.unlink(path.join(__dirname, pdfFilePath), (unlinkErr) => {
            if (unlinkErr) {
                return res.status(500).json({ success: false, message: 'Application canceled but failed to delete file.' });
            }
                return res.status(200).json({ success: true, message: 'Application and file canceled successfully.' });
        });
    }
});

// Serve the HTML form for job applicants
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.post('/submit-form', upload.single('pdf'), (req, res) => {
    const { jobTitle, email } = req.body;

    // Check if the user has already applied for this job
    Applicant.findOne({ jobTitle: jobTitle, email: email })
        .then(existingApplicant => {
            if (existingApplicant) {
                // If an existing application is found, redirect back with an error message
                return res.redirect('/apply?error=You have already applied for this job.');
            }

            // Create a new applicant if no existing application is found
            const newApplicant = new Applicant({
                jobTitle: jobTitle,
                company: req.body.company,
                location: req.body.location,
                disability: req.body.disability,
                name: req.body.name,
                email: email,
                contact: req.body.contact,
                pdfFilePath: req.file.path // Store file path in the database
            });

            return newApplicant.save()
                .then(() => {
                    // Redirect to the apply page after successful submission
                    res.redirect('/apply?success=Application submitted successfully');
                });
        })
        .catch(err => {
            console.error('Error checking existing applications:', err);
            res.status(500).send('Error checking existing applications');
        });
});


app.get('/apply', (req, res) => {
    const successMessage = req.query.success || ''; // Get success message from query parameters
    res.sendFile(path.join(__dirname, 'apply.html'), (err) => {
        if (err) {
            res.status(err.status).end();
        }
    });
});

// Create 'uploads' directory if it doesn't exist
const dir = './uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
