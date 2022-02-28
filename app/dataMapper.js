const debug = require('debug')('dataMapper');
const pool = require('./dbPool');
const ApiError = require('./errors/apiError');
const logger = require('./helpers/logger');

const dataMapper = {
  async getAllPosts() {
    const query = 'SELECT * FROM post;';
    debug(`dataMapper > getAllPosts(): ${query}`);
    debug('Log lvl error created for test');
    logger.error(`test logger error and query: ${query}`);
    const data = (await pool.query(query)).rows;
    if (!data) {
      throw new ApiError('No data found for getAllPost', 500);
    }
    return data;
  },
};

module.exports = dataMapper;
