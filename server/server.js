
// // ... other imports
// const express = require('express');
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
// require('dotenv').config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 3000; // Use port from .env or default to 3000

// // Middleware
// app.use(express.json());

// // Database connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Define a route for the root URL
// app.get('/', (req, res) => {
//     res.send('Server is running'); // Simple response for root URL
// });

// // Use auth routes
// app.use('/api', authRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// ... other imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const authRoutes = require('./routes/authRoutes');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000; // Use port from .env or default to 3000

// Middleware
app.use(express.json());

// Enable CORS for requests from your frontend (adjust the origin as needed)
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's address if different
    credentials: true, // If using credentials like cookies, set this to true
}));

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Server is running'); // Simple response for root URL
});

// Use auth routes
app.use('/api', authRoutes);

// Handle preflight CORS requests (for non-simple requests like POST)
app.options('/api/signup', cors());

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
