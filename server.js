// I need to bring in necessary packages
const express = require('express');
const path = require('path');

// I need variable to have application run a port for server
const PORT = process.env.PORT || 3001;

// I need to create the express application
const app = express();

// I need middleware to for parsing out JSON an urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// I want to make public folder accessible to the client
app.use(express.static('public'));

// TODO: I want to get the homepage to appear upon loading server


// I need to have the server listening 
app.listen(PORT, () => 
   console.log(`App is listening at http://localhost:${PORT} 🚀`)
)