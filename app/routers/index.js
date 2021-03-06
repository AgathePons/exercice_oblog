const { Router } = require('express');
const ApiError = require('../errors/apiError');
const handleError = require('../middlewares/handleError');
const apiRouter = require('./apiRouter');

const router = Router();

router.use('/v1', apiRouter);

router.use(() => {
  throw new ApiError('Endpoint not found', 404);
});

router.use(handleError);

module.exports = router;
