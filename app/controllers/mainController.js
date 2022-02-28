// debug

const mainController = {
  homePage(_req, res) {
    return res.json({
      text: 'hello world',
    });
  },
};

module.exports = mainController;
