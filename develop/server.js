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

//app.use('/api', api);

// Route for the notes
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

// Route for the homepage
app.get('/index', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// This is for the get (Read) request
app.get("/api/notes", (req, res) => {

    console.log(`\nGetting get reqs`);

    let data = JSON.parse(fs.readFileSync(`./db/db.json`, `utf8`)); // this reads the json file

    //console.log(`\nReturning data : ` + JSON.stringify(data));

    res.json(data); // this sends data
});

// This is for the post (write) request
app.post("/api/notes", (req, res) => {

    // Extracted new note from req body.  
    const newNote = req.body;

    console.log(`\nNew Note : ` + JSON.stringify(newNote));

    newNote.ID = uuidv4();  //Using the npm package uuidv4, an id is assigned to the note

    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); //This reads the data

    data.push(newNote); // This adds note to existing ones

    fs.writeFileSync(`./db/db.json`, JSON.stringify(data));

    console.log(`\n New note was successfully added to the file.`);

    res.json(data);
});

// This is for the DELETE (delete) request
// app.delete("/api/notes/:id", (req, res) => {

//     let noteID = req.params.id.toString(); // This gets the id to delete the right file

//     console.log(`\n Deleting note: ${noteID}`);

//     let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); //This reads the data

//     const newData = data.filter (note => note.ID.toString() !== noteID);

//     fs.writeFileSync('./db/db.json', JSON.stringify(newData));

//     console.log(`\n Note was successfully deleted using this ID: ${noteID}`);

//     res.json(newData);
// });



// Try

app.delete("/api/notes/:id", (request, response) => {

    // Fetched id to delete
    let noteId = request.params.id.toString();
    
    console.log(`\n\nDELETE note request for noteId: ${noteId}`);

    // Read data from 'db.json' file
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // filter data to get notes except the one to delete
    const newData = data.filter( note => note.id.toString() !== noteId );

    // Write new data to 'db.json' file
    fs.writeFileSync('./db/db.json', JSON.stringify(newData));
    
    console.log(`\nSuccessfully deleted note with id : ${noteId}`);

    // Send response
    response.json(newData);
});

//Try











// Event listener on the port
app.listen(PORT, () => 
    console.log (`App listening at http://localhost:${PORT}`) 
);