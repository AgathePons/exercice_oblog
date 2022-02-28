const { Router } = require('express');
const mainController = require('../controllers/mainController');
// validator
// schema
// middleware wrapper

const router = Router();

// test router
router.get('/', mainController.homePage);

// posts
router.get('/posts', mainController.getAllPosts);

module.exports = router;
