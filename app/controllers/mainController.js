const debug = require('debug')('mainController');

const mainController = {
  homePage(_req, res) {
    debug('GET / called');
    return res.json({
      text: 'hello world',
    });
  },
};

module.exports = mainController;
