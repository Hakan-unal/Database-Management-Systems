const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

class User {
    constructor(req) {
        this.name = req.body.name;
        this.email = req.body.email;
        this.password = req.body.password;
        this.gender = req.body.gender;
    }
    saveUser() {
        let list;
        if (localStorage.getItem('users') == null) {
            list = [];
        } else {
            list = JSON.parse(localStorage.getItem("users"));
        }
        list.push(this);
        localStorage.setItem('users', JSON.stringify(list));
    }
}

module.exports = User;