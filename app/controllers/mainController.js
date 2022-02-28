const debug = require('debug')('mainController');
const dataMapper = require('../dataMapper');

const mainController = {
  homePage(_req, res) {
    debug('GET / called');
    return res.json({
      text: 'hello world',
    });
  },
  async getAllPosts(_req, res) {
    debug('GET /posts getAllPosts() called');
    const posts = await dataMapper.getAllPosts();
    return res.json(posts);
  },
};

module.exports = mainController;
