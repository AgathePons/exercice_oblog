const debug = require('debug')('validator');
const ApiError = require('../errors/apiError');

/**
 * Validation middleware to validate the data format
 * from request properties
 * @param {string} prop name of the object property of the request to validate (body, ...)
 * @param {Joi.object} schema validation schema of Joi to check
 * @returns {Function} returns an express middleware who validates the body of the request
 * using the schema given in parameters. returns error 400 if the validation fails
 */
module.exports = (prop, schema) => {
  return async (req, _res, next) => {
    try {
      debug(req[prop]);
      await schema.validateAsync(req[prop]);
      next(debug('Validation success'));
    } catch (err) {
      debug('Validation fails');
      next(new ApiError(err.details[0].message, 400));
    }
  };
};
