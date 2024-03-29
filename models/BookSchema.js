const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    id:{
        type: Number,
        unique: true,
        required: true,
    },
    book_name:{
        type: String,
        required:true,
    },
    book_description:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    year_of_publication:{
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    price:{
        type: Number, 
        required: true,
    },
    language: {
        type: String,
        required: true,
        // enum: ["hindi", "english", "telugu"],
    },
    ISBN:{
        type: String,
        required: true,
    },
});

const Book = mongoose.model("Book", bookSchema);
module.exports=Book;