const debug = require('debug')('categoriesController');
const dataMapper = require('../dataMapper');

const categoriesController = {
  /**
   * Retrieve all categories
   * @returns {object} json of all categories
   */
  async getAllCategories(_req, res) {
    debug('GET /categoris getAllCategories called');
    const posts = await dataMapper.getAllCategories();
    return res.json(posts);
  },
};

module.exports = categoriesController;
