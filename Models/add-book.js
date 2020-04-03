const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

class Book {
    constructor(req) {
        this.name = req.body.name;
        this.author = req.body.author;
        this.publisher = req.body.publisher;
        this.price = req.body.price;
        this.category = req.body.category;
        this.id = Math.round(Math.random() * 100000).toString();
    }
    saveBook() {
        let list;
        if (localStorage.getItem('books') == null) {
            list = [];
        } else {
            list = JSON.parse(localStorage.getItem("books"));
        }
        list.push(this);
        localStorage.setItem('books', JSON.stringify(list));
    }

}

module.exports = Book;