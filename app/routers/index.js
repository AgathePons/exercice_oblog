const { Router } = require('express');
const apiRouter = require('./apiRouter');

const router = Router();

router.use('/v1', apiRouter);

module.exports = router;
