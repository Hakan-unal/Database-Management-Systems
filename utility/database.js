const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bookstore',
    password: 'mysql1234'
});





class Books {
    constructor(book_id, publisher, author, book_name, category) {
        this.book_id = book_id;
        this.publisher = publisher;
        this.author = author;
        this.book_name = book_name;
        this.category = category;
    }

    saveBook() {
        return connection.execute('INSERT INTO books(book_id,publisher,author,book_name,category) VALUES(?,?,?,?,?)', [this.book_id, this.publisher, this.author, this.book_name, this.category]);
    }

    static getById(id) {
        return connection.execute('SELECT publisher,author,book_name,category FROM books WHERE id=?', [id]);
    }

    static update(book) {
        return connection.execute('UPDATE books SET book.name=?,book.author=?', [book.name, book.author]);
    }

    static deleteById(id) {
        return connection.execute('DELETE FROM books WHERE id=?', [id]);
    }
}






class Member {
    constructor(member_id, member_name, member_surname, password, gender, gender) {
        this.member_id = member_id;
        this.member_name = member_name;
        this.member_surname = member_surname;
        this.password = password;
        this.gender = gender;
        this.email = email;

    }

    saveMember() {
        return connection.execute('INSERT INTO member(member_id,member_name,member_surname,password,gender,email) VALUES(?,?,?,?,?,?)', [this.member_id, this.member_name, this.member_surname, this.password, this.gender, this.email]);
    }

    static getById(id) {
        return connection.execute('SELECT member_name,member_surname,email FROM member WHERE id=?', [id]);
    }

    static update(member) {
        return connection.execute('UPDATE member SET member_name=?,member_surname=?', [member.name, member.surname]);
    }

    static deleteById(id) {
        return connection.execute('DELETE FROM member WHERE id=?', [id]);
    }
}





class Borrow {
    constructor(due_date, book_name, member_name) {
        this.due_date = due_date;
        this.book_name = book_name;
        this.member_name = member_name;
    }

    saveBorrow() {
        return connection.execute('INSERT INTO borrowby(due_date,book_name,member_name) VALUES(?,?,?)', [this.due_date, this.book_name, this.member_name]);
    }

    static getById(id) {
        return connection.execute('SELECT book_name,due_date FROM borrowby WHERE id=?', [id]);
    }

    static update(member) {
        return connection.execute('UPDATE borrowby SET member_name=?,book_name=?,due_date=?', [member.name, member.book_name,due_date]);
    }

    static deleteById(id) {
        return connection.execute('DELETE FROM borrowby WHERE id=?', [id]);
    }
}






module.exports = connection.promise();
module.exports = Books;
module.exports = Member;
module.exports = Borrow;