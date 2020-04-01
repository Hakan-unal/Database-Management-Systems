const express = require('express');
const router = express.Router();

const addBookController = require('../Controller/admin/add-book');
const deleteBookController = require('../Controller/admin/delete-book');

router.get('/add-book', addBookController.display);
router.post('/add-book', addBookController.post);
router.get('/delete-book', deleteBookController.display);




module.exports = router;