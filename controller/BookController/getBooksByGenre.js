const Book = require("../../models/BookSchema")

const getBookByGenre = async (req,res)=>{
    try{
        const book = await Book.find({ genre: req.params.genre });

        if(!book) return res.status(404).send("no books found")
        res.json(book);
    }
    catch(err){
        console.error(`Error in finding book: ${err}`)
        res.status(500).json({message : "Internal server error ",error:err})
    }
}

module.exports = getBookByGenre;