const searchModel = require('../../Models/search');

exports.display = (req, res) => {
    res.render('./user/index', { title: 'Homepage' });
}

exports.search = (req, res) => {
    const book = searchModel.search(req.body.search);
    res.render('./user/search', { title: 'Search', book: book });
}