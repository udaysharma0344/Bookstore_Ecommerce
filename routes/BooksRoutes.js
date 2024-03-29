const express = require('express');
const addBooks = require('../controller/BookController/addBooks');
const deleteBooks = require('../controller/BookController/deleteBooks');
const getBooksByName = require('../controller/BookController/getBooks');
const getBooksByGenre = require('../controller/BookController/getBooksByGenre');
const updateBooks = require('../controller/BookController/updateBook');
const updateBookByauthor = require('../controller/BookController/UpdateBookByAuthor');



const router = express.Router();

router.post("/addbooks", addBooks);
router.delete('/removebook/:id',deleteBooks)
router.get('/getbookbyname/:name',getBooksByName)
router.get('/getbookbygenre/:genre',getBooksByGenre)
router.get('/getbookbypricegt10',)
router.put('/updatebook/:id',updateBooks)
router.get('/updatebookbyauthor/:author',updateBookByauthor)

module.exports = router;