const Book = require('../../models/BookSchema')

const updateBookByauthor= async(req,res)=>{
    try{
       const authorname =  req.params.author;
       const updateBook = req.body;

        const updatedbook = await Book.findOneAndUpdate({author:authorname},updateBook,{new: true})

        
       if(!updatedBookok) return res.status(400).json({msg:"No book found"});


        res.status(200).json({msg:`${updatedbook.book_name} has been updated successfully`})

    }
    catch(err){
        console.error(`Error in updating book: ${err}`)
        res.status(500).json({message : "Internal server error ",error:err})
    }
}


module.exports = updateBookByauthor
