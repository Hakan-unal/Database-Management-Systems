const signUpModel = require('../../Models/sign-up');

exports.display = (req, res) => {
    res.render('./user/sign-up', { title: 'Sign Up' });
}

exports.post = (req, res) => {
    if (req.body.name !== "" & req.body.email !== "" & req.body.password !== "" & req.body.gender !== "") {
        let userObject;
        userObject = new signUpModel(req);
        userObject.saveUser();
        res.redirect('/');
    } else {
        res.render('sign-up', { title: 'Invalid' });
    }
}