const express = require('express')
const app = express()

// ROUTE IMPORTS
const professorsAPI = require('./Routes/v1_professor_routes')

// ROUTE MANAGEMENT
app.use(`/v1/professors`, professorsAPI)

// ROOT
app.get("/", (req, res) => {
    res.status(201).send("Hello World!");
})

module.exports = app;