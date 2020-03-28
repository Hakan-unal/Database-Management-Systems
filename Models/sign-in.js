const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


exports.checkUser = (req) => {
    const name = req.body.name;
    const password = req.body.password;
    const users = JSON.parse(localStorage.getItem('users'));
    let result = false;
    users.forEach((user) => {
        if (user.name === name & user.password === password) {
            result = true;
        }
    });
    return result;
}