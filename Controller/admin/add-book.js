const addBookModel = require('../../Models/add-book');


exports.display = (req, res) => {
    res.render('./admin/add-book', { title: 'Add Book' });
}

exports.post = (req, res) => {
    if (req.body.name !== "" & req.body.author !== "" & req.body.publisher !== "" & req.body.price !== "" & req.body.category !== "") {
        let bookObject;
        bookObject = new addBookModel(req);
        bookObject.saveBook();
        res.redirect('/');
    } else {
        res.render('index', { title: 'Invalid' });
    }

    res.redirect('/');
}