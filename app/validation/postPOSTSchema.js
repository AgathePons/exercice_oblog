const Joi = require('joi');

module.exports = Joi.object({
  slug: Joi.string()
    .pattern(/^[0-9a-z-]*$/)
    .required(),
  title: Joi.string().required(),
  excerpt: Joi.string().required(),
  content: Joi.string().required(),
  category_id: Joi.number().integer().min(1).required(),
}).required();
