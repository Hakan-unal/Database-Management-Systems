const sıgnInModel = require('../../Models/sign-in');

exports.display = (req, res) => {
    res.render('./user/sign-in', { title: 'Sign In' });
}

exports.post = (req, res) => {
    if (req.body.name !== "" & req.body.password !== "") {
        let result = sıgnInModel.checkUser(req);
        if (result) {
            res.render('admin', { title: 'AdminPage' })
        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
}