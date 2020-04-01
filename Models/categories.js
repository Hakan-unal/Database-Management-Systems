var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

class Categories {
    static biography() {
        let books = JSON.parse(localStorage.getItem('books'));
        let result = [];
        books.forEach(book => {
            if (book.category === 'Biography') {
                result.push(book);
            }
        });
        return result;
    }
    static history() {
        let books = JSON.parse(localStorage.getItem('books'));
        let result = [];
        books.forEach(book => {
            if (book.category === 'History') {
                result.push(book);
            }
        });
        return result;
    }
    static sport() {
        let books = JSON.parse(localStorage.getItem('books'));
        let result = [];
        books.forEach(book => {
            if (book.category === 'Sport') {
                result.push(book);
            }
        });
        return result;
    }
    static medical() {
        let books = JSON.parse(localStorage.getItem('books'));
        let result = [];
        books.forEach(book => {
            if (book.category === 'Medical') {
                result.push(book);
            }
        });
        return result;
    }
    static health() {
        let books = JSON.parse(localStorage.getItem('books'));
        let result = [];
        books.forEach(book => {
            if (book.category === 'Health') {
                result.push(book);
            }
        });
        return result;
    }
    static computing() {
        let books = JSON.parse(localStorage.getItem('books'));
        let result = [];
        books.forEach(book => {
            if (book.category === 'Computing') {
                result.push(book);
            }
        });
        return result;
    }
    static horror() {
        let books = JSON.parse(localStorage.getItem('books'));
        let result = [];
        books.forEach(book => {
            if (book.category === 'Horror') {
                result.push(book);
            }
        });
        return result;
    }
    static children() {
        let books = JSON.parse(localStorage.getItem('books'));
        let result = [];
        books.forEach(book => {
            if (book.category === 'Children') {
                result.push(book);
            }
        });
        return result;
    }
    static art() {
        let books = JSON.parse(localStorage.getItem('books'));
        let result = [];
        books.forEach(book => {
            if (book.category === 'Art') {
                result.push(book);
            }
        });
        return result;
    }
}

module.exports = Categories;