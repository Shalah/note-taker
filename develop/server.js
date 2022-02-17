const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express();
const PORT = process.env.port || 3001;   // Find any port for my work or give me port 3001

// This listen for any port
app.listen(PORT, () => 
    console.log (`App listening at http://localhost:${PORT}`)
)