const mongoose = require("mongoose");
// const chalk = require("chalk");  
const dotenv = require('dotenv').config();

// Connect to MongoDB database using Mongoose
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected.... ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error in connection ${error}`);
    }
}
module.exports = connectDB;