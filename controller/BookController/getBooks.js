const Book = require("../../models/BookSchema")

const getBookByName = async (req,res)=>{
    try{
        const book = await Book.find({ book_name: req.params.name });

        if(!book) return res.status(404).send("no books found")
        res.json(book);
    }
    catch(err){
        console.error(`Error in finding book: ${err}`)
        res.status(500).json({message : "Internal server error ",error:err})
    }
}

module.exports = getBookByName;