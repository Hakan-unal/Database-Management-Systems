const express = require('express');
const router = express.Router();

const indexController = require('../Controller/user/index');
const signUpController = require('../Controller/user/sign-up');
const signInController = require('../Controller/user/sign-in');
const categoryController = require('../Controller/user/category');
const informationController = require('../Controller/user/information');
const bestsellerController = require('../Controller/user/bestseller');
const borrowController = require('../Controller/user/borrow');

router.get('/', indexController.display);
router.post('/', indexController.search);
router.get('/sign-up', signUpController.display);
router.post('/sign-up', signUpController.post);

router.get('/sign-in', signInController.display);
router.post('/sign-in', signInController.post);

router.get('/category', categoryController.display);
router.get('/category/biography', categoryController.biography);
router.get('/category/history', categoryController.history);
router.get('/category/sport', categoryController.sport);
router.get('/category/medical', categoryController.medical);
router.get('/category/health', categoryController.health);
router.get('/category/computing', categoryController.computing);
router.get('/category/horror', categoryController.horror);
router.get('/category/children', categoryController.children);
router.get('/category/art', categoryController.art);

router.get('/borrow/:id', borrowController.display);
router.post('/borrow/:id', borrowController.post);

router.get('/information', informationController.display);
router.get('/bestseller', bestsellerController.display);


module.exports = router;