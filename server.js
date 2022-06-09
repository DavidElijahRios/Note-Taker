// I need to bring in necessary packages
const express = require('express');
const path = require('path');
const router = require('./Routes/apiroutes.js');
// using API variable to bring in routes? 

// TODO: I need to bring in helper code and other path necessary when writing code

// I need variable to have application run a port for server
const PORT = process.env.PORT || 3001;

// I need to create the express application
const app = express();

// I need middleware to for parsing out JSON an urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// I want to make public folder accessible to the client
app.use(express.static('public'));


// get route for notes page
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.use(router)

// I want to get the homepage to appear upon loading server
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, './public/index.html'))
);


// I need to have the server listening when application is launched
app.listen(PORT, () => 
   console.log(`App is listening at http://localhost:${PORT} 🚀`)
)

// TODO: I need to create helper file codes for the routes and use modularization as well as bring those routes in the code properly
// TODO: I need to also put any input from user in the db.json folder using the fs module for it o appear and append to the application. 