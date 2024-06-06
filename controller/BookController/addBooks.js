const Book = require('../../models/BookSchema');

const addBooks = async (req, res) => {
    try {
        const {
            id,
            book_name,
            book_description,
            author,
            year_of_publication,
            genre,
            price,
            language,
            ISBN,
        } = req.body;

        const newBook = new Book({
            id,
            book_name,
            book_description,
            author,
            year_of_publication,
            genre,
            price,
            language,
            ISBN,
        });

        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    }
    catch (err) {
        console.error(`Error in adding Book: ${err}`);
        res.status(500).json({ message: "Internal Server Error"})
    }
}

module.exports = addBooks;
