// Dependencies
// const express = require('express')
// const app = express();
// const fs = require("fs");

// const ar = require('express').Router();

// const { v4: uuidv4 } = require('uuid'); // Importing this npm package for id


// // This is for the get (Read) request
// app.get("/api/notes", (req, res) => {

//     console.log(`\nGetting get reqs \n`);

//     let data = JSON.parse(fs.readFileSync(`./db/db.json`, `utf8`)); // this reads the json file

//     console.log(`\nReturning data : ` + JSON.stringify(data));

//     res.json(data); // this sends data
// });


// // This is for the post (write) request
// app.post("/api/notes", (req, res) => {

//     // Extracted new note from req body.  
//     const newNote = req.body;

//     console.log(`\nNew Note : ` + JSON.stringify(newNote));

//     newNote.ID = uuidv4();  //Using the npm package uuidv4, an id is assigned to the note

//     let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); //This reads the data

//     data.push(newNote); // This adds note to existing ones

//     fs.writeFileSync(`./db/db.json`, JSON.stringify(data));

//     console.log(`\n New note was successfully added to the file.`);

//     res.json(data);
// });


// // This is for the DELETE (delete) request
// app.delete("/api/notes/:ID", (req, res) => {

//     let noteID = req.params.ID.toString(); // This gets the id to delete the right file

//     console.log(`\n Deleting note: ${noteID}`);

//     let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); //This reads the data

//     const newData = data.filter (note => note.ID.toString() !== noteID);

//     fs.writeFileSync('./db/db.json', JSON.stringify(newData));

//     console.log(`\n Note was successfully deleted using this ID: ${noteID}`);

//     res.json(newData);
// });

// module.exports = ar;