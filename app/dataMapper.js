/* eslint-disable camelcase */
const debug = require('debug')('dataMapper');
const pool = require('./dbPool');
const ApiError = require('./errors/apiError');
const logger = require('./helpers/logger');

const dataMapper = {
  /**
   * Retrieve all the posts
   * @returns {object} return array of all posts
   */
  async getAllPosts() {
    const query = 'SELECT * FROM post;';
    debug(`> getAllPosts(): ${query}`);
    debug('Log lvl error created for test');
    logger.error(`test logger error and query: ${query}`);
    const data = (await pool.query(query)).rows;
    if (!data) {
      throw new ApiError('No data found for getAllPost', { statusCode: 500 });
    }
    return data;
  },
  /**
   * Retrieve one post by id
   * @param {number} id id of the post
   * @returns {object} return object of the post
   */
  async getOnePost(id) {
    const query = {
      text: 'SELECT * FROM post where id=$1;',
      values: [id],
    };
    debug(`> getOnePost(id): ${query.text} -> $: ${query.values}`);
    const data = (await pool.query(query)).rows[0];
    if (!data) {
      throw new ApiError('No data found for getOnePost', { statusCode: 500 });
    }
    return data;
  },
  /**
   * Retrieve all posts from a category by category id
   * @param {number} id id of the category
   * @returns {object} return array of all posts from the category
   */
  async getAllPostsByCategory(id) {
    const query = {
      text: 'SELECT * FROM post where category_id=$1;',
      values: [id],
    };
    debug(`> getAllPostsByCategory(id): ${query.text} -> $: ${query.values}`);
    const data = (await pool.query(query)).rows;
    if (!data) {
      throw new ApiError('No data found for getAllPostsByCategory', { statusCode: 500 });
    }
    return data;
  },
  /**
   * Send one post from json body in request
   * @param {object} data data from the post request body
   * @returns {object} return object of the created post
   */
  async postOnePost(data) {
    const { title, slug, excerpt, content, category_id } = data;
    const query = {
      text: `INSERT INTO post(title, slug, excerpt, content, category_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;`,
      values: [title, slug, excerpt, content, category_id],
    };
    debug(`> postOnePost(data): ${query.text}`);
    const returnedData = (await pool.query(query)).rows[0];
    return returnedData;
  },
  /**
   * Retrieve all the categories
   * @returns {object} return array of all categories
   */
  async getAllCategories() {
    const query = 'SELECT * FROM category;';
    debug(`> getAllCategories(): ${query}`);
    const data = (await pool.query(query)).rows;
    if (!data) {
      throw new ApiError('No data found for getAllCategories', { statusCode: 500 });
    }
    return data;
  },
};

module.exports = dataMapper;
