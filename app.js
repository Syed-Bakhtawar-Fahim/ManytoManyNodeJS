const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB  = require('./database/connectDB');


// Configure Dotenv
dotenv.config();

// ConnectionDB
connectDB()

// PORT 
const PORT = process.env.PORT || 5000

// Initialize the app
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('short'))



app.listen(PORT, () => {
    console.log(`Server is listing at ${PORT}`)
})

