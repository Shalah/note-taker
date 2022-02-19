// Dependencies 
const express = require('express')
const fs = require('fs')
const path = require('path')
//const nt = require('./public/routes/note')
const app = express();  // creating a server using express
const PORT = process.env.port || 3001;   // Find any port for my work or give me port 3001

// Routes
const apiRoutes = require('./public/routes/apiRoute');
const htmlRoutes = require('./public/routes/htmlRoutes');

// Middleware
app.use(express.json())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//app.use('/api', api);


app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

app.get('/index', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


// Event listener on the port
app.listen(PORT, () => 
    console.log (`App listening at http://localhost:${PORT}`) 
);