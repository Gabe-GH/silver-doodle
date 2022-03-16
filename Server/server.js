const dotenv = require('dotenv').config()
const app = require('./app')

// PORT
const PORT = process.env.PORT || 3000

// SERVER LISTEN
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})