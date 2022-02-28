const { Router } = require('express');
const mainController = require('../controllers/mainController');
// validator
// schema
// middleware wrapper

const router = Router();

router.get('/', mainController.homePage);

module.exports = router;
