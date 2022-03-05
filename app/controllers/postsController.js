const debug = require('debug')('postsController');
const dataMapper = require('../dataMapper');
const ApiError = require('../errors/apiError');

const postsController = {
  /**
   * Retrieve all posts
   * @param {Request} _req
   * @param {Response} res
   * @returns {string} Route API JSON response
   */
  async getAllPosts(_req, res) {
    debug('GET /posts getAllPosts() called');
    const posts = await dataMapper.getAllPosts();
    return res.json(posts);
  },
  /**
   * Retrieve one post
   * @param {object} req id of the post in req.params.id
   * @param {Response} res
   * @returns {string} Route API JSON response
   */
  async getOnePost(req, res) {
    const { id } = req.params;
    debug(`GET /posts/${id} getAllPosts() called`);
    const post = await dataMapper.getOnePost(id);
    if (!post) {
      throw new ApiError('Post not found', { statusCode: 404 });
    }
    return res.json(post);
  },
  /**
   * Retrieve all posts from a category by category id
   * @param {object} req id of the category in req.params.id
   * @returns {object} json of the posts from the category
   */
  async getAllPostsByCategory(req, res) {
    const { id } = req.params;
    debug(`GET /posts/category/${id} getAllPostsByCategory() called`);
    const posts = await dataMapper.getAllPostsByCategory(id);
    return res.json(posts);
  },
  /**
   * Send one post from json body in request
   * @param {object} req data from the post request in req.body
   * @param {Response} res
   * @returns {object} json of the created post
   */
  async postOnepost(req, res) {
    debug('POST /posts postOnepost called with request body:', req.body);
    const newPost = await dataMapper.postOnePost(req.body);
    return res.json(newPost);
  },
};

module.exports = postsController;
