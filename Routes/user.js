const express = require('express');
const router = express.Router();

const indexController = require('../Controller/user/index');
const signUpController = require('../Controller/user/sign-up');
const signInController = require('../Controller/user/sign-in');
const categoryController = require('../Controller/user/category');
const informationController = require('../Controller/user/information');
const bestsellerController = require('../Controller/user/bestseller');

router.get('/', indexController.display);

router.get('/sign-up', signUpController.display);
router.post('/sign-up', signUpController.post);

router.get('/sign-in', signInController.display);
router.post('/sign-in', signInController.post);

router.get('/category', categoryController.display)
router.get('/information', informationController.display);
router.get('/bestseller', bestsellerController.display);


module.exports = router;