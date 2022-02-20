// Dependencies 
const express = require('express')
const fs = require('fs')
const path = require('path')
//const nt = require('./public/routes/note')
const app = express();  // creating a server using express
const PORT = process.env.port || 3001;   // Find any port for my work or give me port 3001

const { v4: uuidv4 } = require('uuid'); // Importing this npm package for id

// Routes
const apiRoutes = require('./public/routes/apiRoute');
const htmlRoutes = require('./public/routes/htmlRoutes');

// Middleware
app.use(express.json())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



// Route for the notes
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

// Route for the homepage
app.get('/index', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


// Try
app.get('/api/notes', (req, res) => 
    res.sendFile(path.join(__dirname, './db/db.json'))
);

app.post('/api/notes', (req, res) => {
    let newNotes = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
    };
    let pastNote = JSON. parse(fs. readFileSync(path.join(__dirname,"./db/db.json"),"utf-8"))
    pastNote. push(newNotes)
    fs.writeFileSync("./db/db.json", JSON.stringify(pastNote))
    res. json(pastNote)
});

// This is for the DELETE (delete) request
app.delete("/api/notes/:ID", (req, res) => {

    let noteID = req.params.ID.toString(); // This gets the id to delete the right file

    console.log(`\n Deleting note: ${noteID}`);

    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); //This reads the data

    const newData = data.filter (note => note.ID.toString() !== noteID);

    fs.writeFileSync('./db/db.json', JSON.stringify(newData));

    console.log(`\n Note was successfully deleted using this ID: ${noteID}`);

    res.json(newData);
});







 





// Event listener on the port
app.listen(PORT, () => 
    console.log (`App listening at http://localhost:${PORT}`) 
);