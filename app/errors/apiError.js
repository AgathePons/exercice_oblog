/**
 * Custom API Error
 * @typedef {object} ApiError
 * @property {string} status - Status
 * @property {number} statusCode - http status code
 * @property {string} message - Error message
 */

class ApiError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
  }
}

module.exports = ApiError;
