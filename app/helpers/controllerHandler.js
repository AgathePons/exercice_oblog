/**
 * controller wrapper to manage try / catch errors
 * @param {object} controller a controller to execute inside a try / catch bloc
 * @returns {object} a controller as middleware function
 */

module.exports = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    next(err);
  }
};

/* Can be written like this:
module.exports = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch {
      next(err);
    }
  }
}
*/
