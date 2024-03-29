const Book = require('../../models/BookSchema')

const deleteBook = async(req,res)=>{
    try{
       const bookId =  req.params.id;
       const book = await Book.findOne({id:bookId});
       
       if(!book) return res.status(400).json({msg:"No book found"});

       await Book.findOneAndDelete({id: bookId});
        res.status(200).json({msg:`${book.book_name} has been deleted successfully`})

    }
    catch(err){
        console.error(`Error in deleting book: ${err}`)
        res.status(500).json({message : "Internal server error ",error:err})
    }
}


module.exports = deleteBook
