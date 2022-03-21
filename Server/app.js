const express = require('express')
const { errorHandler } = require('./Middleware/errorMiddleware')
const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// ROUTE IMPORTS
const professorsAPI = require('./Routes/v1_professor_routes')

// ROUTE MANAGEMENT
app.use(`/v1/professors`, professorsAPI)

// ERROR MIDDLEWARE
// NEEDS TO BE IN THIS ORDER
app.use(errorHandler)

// ROOT
app.get("/", (req, res) => {
    res.status(201).send("Hello World!");
})

module.exports = app;