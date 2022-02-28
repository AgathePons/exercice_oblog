const pool = require('./dbPool');

const dataMapper = {
  async getAllPosts() {
    try {
      const query = 'SELECT * FROM post;';
      const data = (await pool.query(query)).rows;
      if (!data) {
        const errorMsg = `No data found for ${query}`;
        return errorMsg;
      }
      return data;
    } catch (err) {
      console.error('getAllposts error:', err);
      const catchErrorMsg = 'Error catched in console';
      return catchErrorMsg;
    }
  },
};

module.exports = dataMapper;
