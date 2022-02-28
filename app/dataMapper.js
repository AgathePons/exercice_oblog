const debug = require('debug')('dataMapper');
const pool = require('./dbPool');
const ApiError = require('./errors/apiError');
const logger = require('./helpers/logger');

const dataMapper = {
  /**
   * Get all the posts
   * @returns {object} return array of all posts
   */
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
  /**
   * Get one post by id
   * @param {number} id id of the post
   * @returns {object} return object of the post
   */
  async getOnePost(id) {
    const query = {
      text: 'SELECT * FROM post where id=$1;',
      values: [id],
    };
    debug(`dataMapper > getOnePost(id): ${query.text}`);
    const data = (await pool.query(query)).rows[0];
    if (!data) {
      throw new ApiError('No data found for getOnePost', 500);
    }
    return data;
  },

  async getAllPostsByCategory(id) {
    const query = {
      text: 'SELECT * FROM post where category_id=$1;',
      values: [id],
    };
    debug(`dataMapper > getAllPostsByCategory(id): ${query.text}`);
    const data = (await pool.query(query)).rows;
    if (!data) {
      throw new ApiError('No data found for getAllPostsByCategory', 500);
    }
    return data;
  },
  /**
   * Get all the categories
   * @returns {object} return array of all categories
   */
  async getAllCategories() {
    const query = 'SELECT * FROM category;';
    debug(`dataMapper > getAllCategories(): ${query}`);
    const data = (await pool.query(query)).rows;
    if (!data) {
      throw new ApiError('No data found for getAllCategories', 500);
    }
    return data;
  },
};

module.exports = dataMapper;
