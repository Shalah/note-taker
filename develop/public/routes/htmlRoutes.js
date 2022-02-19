// Dependencies
const path = require("path");
const express = require('express')
const app = express();


// HTML GET Requests
// Below code handles when users 'visit' a page.
// In each of the below cases the user is shown an HTML page of content


app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
)

app.get('*', (req, res) => 
    response.sendFile(path.join(__dirname, '../public/index.html'))
);

// Route for the 404 page. Always at the END of the page
// Telling the system to go there if no port corresponds to what the user clicked.
// "*" means wildcard route. The ones that dont exist.
// app.get('*', (req, res) =>
// res.sendFile(path.join(__dirnmane, '/public/page/404.html'))
// );