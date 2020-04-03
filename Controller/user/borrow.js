const borrowModel = require('../../Models/borrow');
const deleteModel = require('../../Models/delete');

exports.display = (req, res) => {
    const book = borrowModel.search(req.params.id);
    res.render('./user/borrow', { title: 'Borrow', book: book });
}

exports.post = (req, res) => {
    if (req.body.bookName !== "" & req.body.price !== "" & req.body.yourName !== "" & req.body.date !== "") {

        const id = (req.params.id);
        deleteModel.delete(id);
        borrowObject = new borrowModel.Borrow(req);
        borrowObject.saveBorrow();

        res.redirect('/');
    } else {
        res.render('404');
    }
}