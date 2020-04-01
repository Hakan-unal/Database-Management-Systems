const categoryModel = require('../../Models/categories');

class Category {
    static display(req, res) {
        res.render('./user/category', { title: 'Category' });
    }
    static biography(req, res) {
        const books = categoryModel.biography();
        res.render('./categories/biography', { title: 'Biography', books: books });
    }
    static history(req, res) {
        const books = categoryModel.history();
        res.render('./categories/history', { title: 'History', books: books });
    }
    static sport(req, res) {
        const books = categoryModel.sport();
        res.render('./categories/sport', { title: 'Sport', books: books });
    }
    static medical(req, res) {
        const books = categoryModel.medical();
        console.log(books);
        res.render('./categories/medical', { title: 'Medical', books: books });
    }
    static health(req, res) {
        const books = categoryModel.health();
        res.render('./categories/health', { title: 'Health', books: books });
    }
    static computing(req, res) {
        const books = categoryModel.computing();
        res.render('./categories/computing', { title: 'Computing', books: books });
    }
    static horror(req, res) {
        const books = categoryModel.horror();
        res.render('./categories/horror', { title: 'Horror', books: books });
    }
    static children(req, res) {
        const books = categoryModel.children();
        res.render('./categories/children', { title: 'Children', books: books });
    }
    static art(req, res) {
        const books = categoryModel.art();
        res.render('./categories/art', { title: 'Art', books: books });
    }
}

module.exports = Category;