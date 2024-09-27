
const express = require('express');
const { signupUser, loginUser } = require('../controllers/authController'); // Import both functions
const router = express.Router();

router.post('/signup', signupUser); // Correct route for signup
router.post('/login', loginUser); // If you have a login route as well

module.exports = router;

