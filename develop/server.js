const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express();
const PORT = process.env.port || 3001;   // Find any port for my work or give me port 3001

// Middleware
app.use(express.json())

//Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Route for the note.html 
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

// Route for the 404 page. Always at the END of the page
// Telling the system to go there if no port corresponds to what the user clicked.
// "*" means wildcard route. The ones that dont exist.
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirnmane, '/public/page/404.html'))
);

// Event listener on the port
app.listen(PORT, () => 
    console.log (`App listening at http://localhost:${PORT}`) 
);