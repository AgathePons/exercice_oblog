const debug = require('debug')('postsController');
const dataMapper = require('../dataMapper');

const postsController = {
  /**
   * Get all posts
   * @returns {object} json of all posts
   */
  async getAllPosts(_req, res) {
    debug('GET /posts getAllPosts() called');
    const posts = await dataMapper.getAllPosts();
    return res.json(posts);
  },
  /**
   * Get one post
   * @param {object} req id of the post in req.params.id
   * @returns {object} json of the post
   */
  async getOnePost(req, res) {
    const { id } = req.params;
    debug(`GET /posts/${id} getAllPosts() called`);
    const post = await dataMapper.getOnePost(id);
    return res.json(post);
  },
  /**
   * Get all posts from a category by category id
   * @param {object} req id of the category in req.params.id
   * @returns {object} json of the posts from the category
   */
  async getAllPostsByCategory(req, res) {
    const { id } = req.params;
    debug(`GET /posts/category/${id} getAllPostsByCategory() called`);
    const posts = await dataMapper.getAllPostsByCategory(id);
    return res.json(posts);
  },
};

module.exports = postsController;
