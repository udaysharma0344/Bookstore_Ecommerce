const Book = require('../../models/BookSchema')

const updateBook = async(req,res)=>{
    try{
       const bookId =  req.params.id;
       const updateBook = req.body;

        const updatedbook = await Book.findByIdAndUpdate(bookId,updateBook,{new: true})

        
       if(!updatedBook) return res.status(400).json({msg:"No book found"});


        res.status(200).json({msg:`${book.book_name} has been updated successfully`})

    }
    catch(err){
        console.error(`Error in updating book: ${err}`)
        res.status(500).json({message : "Internal server error ",error:err})
    }
}


module.exports = updateBook
