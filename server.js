const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/BooksRoutes')

const mongoose = require("mongoose")

const app = express();

dotenv.config();
app.use(cors());

connectDB()

const PORT = process.env.PORT || 8080 || 5000

app.use(morgan("dev"))
app.use(express.json())

app.use("/bookstore/books", bookRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Welcome to express</h1>" )
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.DEV_MODE}`)
})