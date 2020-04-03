const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

const search = (id) => {
    const books = JSON.parse(localStorage.getItem('books'));
    let result;
    books.forEach(book => {
        if (book.id === id) {
            result = book;
        }
    });
    return result;
}

class Borrow {
    constructor(req) {
        this.yourName = req.body.yourName;
        this.date = req.body.date;
        this.id = req.params.id;
    }
    saveBorrow() {
        let list;
        if (localStorage.getItem('borrows') == null) {
            list = [];
        } else {
            list = JSON.parse(localStorage.getItem("borrows"));
        }
        list.push(this);
        localStorage.setItem('borrows', JSON.stringify(list));
    }
}

module.exports.Borrow = Borrow;
module.exports.search = search;