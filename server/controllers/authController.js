// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // @desc Register a new user
// // @route POST /api/users/signup
// const registerUser = async (req, res) => {
//   const { name, email, password, mobile, organization } = req.body;

//   try {
//     // Check if the user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save new user
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       mobile,
//       organization
//     });
//     await user.save();

//     res.status(201).json({
//       message: 'User registered successfully',
//       user: {
//         name: user.name,
//         email: user.email,
//         mobile: user.mobile,
//         organization: user.organization,
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// };

// // @desc Login user
// // @route POST /api/users/login
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.json({
//       message: 'Login successful',
//       token,
//       user: {
//         name: user.name,
//         email: user.email,
//         mobile: user.mobile,
//         organization: user.organization,
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// };

// module.exports = { registerUser, loginUser };




// const User = require('../models/userModel');
// const bcrypt = require('bcryptjs');

// // Signup handler
// exports.signup = async (req, res) => {
//   const { name, mobile, organization, email, password } = req.body;

//   try {
//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Create new user
//     user = new User({ name, mobile, organization, email, password });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Signup error:', error.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Login handler
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Login error:', error.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// };


// const User = require('../models/User'); // Adjust this path based on your directory structure
// const bcrypt = require('bcrypt'); // Or bcryptjs if you've used that

// // Signup function
// const signupUser = async (req, res) => {
//     // Your signup logic here
// };

// // Login function
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }
//         res.status(200).json({ message: 'Login successful', user });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error', error });
//     }
// };

// module.exports = { signupUser, loginUser };



// const User = require('../models/userModel'); // Adjust this path based on your directory structure
// const bcrypt = require('bcrypt'); // Or bcryptjs if you've used that

// // Signup function
// const signupUser = async (req, res) => {
//     // Your signup logic here
// };

// // Login function
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }
//         res.status(200).json({ message: 'Login successful', user });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error', error });
//     }
// };

// module.exports = { signupUser, loginUser };


// const User = require('../models/userModel'); // Adjust this path based on your directory structure
// const bcrypt = require('bcryptjs'); // Ensure you are using bcryptjs

// // Signup function
// const signupUser = async (req, res) => {
//     const { name, mobile, organization, email, password } = req.body;

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Create a new user
//         const user = new User({
//             name,
//             mobile,
//             organization,
//             email,
//             password, // Password will be hashed in userSchema
//         });

//         await user.save(); // Save user to the database
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         console.error("Signup error:", error);
//         res.status(500).json({ message: 'Internal server error', error });
//     }
// };

// module.exports = { signupUser, loginUser };



const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Signup user
const signupUser = async (req, res) => {
  const { name, mobile, organization, email, password } = req.body;

  try {
    const newUser = new User({ name, mobile, organization, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Exporting the functions
module.exports = { signupUser, loginUser };
