const dotenv = require('dotenv').config()
const app = require('./app')
const connectDB = require('./Config/db')


// PORT
const PORT = process.env.PORT || 3000

// DB CONNECTION
connectDB()

// SERVER LISTEN
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})