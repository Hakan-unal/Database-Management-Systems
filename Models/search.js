const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


exports.search = (name) => {
    const books = JSON.parse(localStorage.getItem('books'));
    let result;
    if (books.length !== 0) {
        books.forEach(book => {
            if (book.name === name) {
                result = book;
            } else {
                result = {
                    name: 'Bulunamadı',
                    author: '',
                    publisher: '',
                    price: '',
                    category: ''
                }
            }
        });
    } else {
        result = {
            name: 'Bulunamadı',
            author: '',
            publisher: '',
            price: '',
            category: ''
        }
    }
    return result;
}