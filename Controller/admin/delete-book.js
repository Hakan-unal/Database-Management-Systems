const deleteModel = require('../../Models/delete');


exports.display = (req, res) => {
    const books = deleteModel.display();
    res.render('./admin/delete-book', { title: 'Delete', books: books });
}

exports.delete = (req, res) => {
    const id = (req.params.id);
    deleteModel.delete(id);
    res.redirect('/admin/delete-book');
}