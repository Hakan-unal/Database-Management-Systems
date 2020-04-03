var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

exports.delete = (id) => {
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach(book => {
        if (book.id === id) {
            let index = books.indexOf(book);
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
}

exports.display = () => {
    const books = JSON.parse(localStorage.getItem('books'));
    return books;
}