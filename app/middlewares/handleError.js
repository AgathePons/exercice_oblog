const debug = require('debug')('handleError');
const logger = require('../helpers/logger');
const ApiError = require('../errors/apiError');

// eslint-disable-next-line no-unused-vars
const handleError = (error, _req, res, _next) => {
  if (!error.status || error.status !== 404) {
    logger.error(error);
  } else {
    debug(error);
  }
  // error custom
  if (error instanceof ApiError) {
    if (error.status === 404) {
      return res.status(error.status).json('404 not found error');
    }
    return res.status(error.status).json(error.message);
  }
  // else, generic msg for back
  return res.status(500).json('Internal server error');
};

module.exports = handleError;
