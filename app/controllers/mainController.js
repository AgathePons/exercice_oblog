// debug
const dataMapper = require('../dataMapper');

const mainController = {
  homePage(_req, res) {
    return res.json({
      text: 'hello world',
    });
  },
  async getAllPosts(req, res) {
    try {
      const posts = await dataMapper.getAllPosts();
      return res.json(posts);
    } catch (err) {
      console.error('getAllPosts error:', err);
      const catchErrorMsg = 'Error catched in console';
      return catchErrorMsg;
    }
  },
};

module.exports = mainController;
