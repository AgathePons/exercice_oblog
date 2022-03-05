/**
 * @typedef {object} Post
 * @property {number} id - unique id, PK of the table
 * @property {string} slug - URL to access the post (SEO)
 * @property {string} title - title of the post
 * @property {string} excerpt - excerpt of the post
 * @property {string} content - content of the post
 * @property {number} category_id - category id of the post
 * @property {string} category - category label of the post
 */

/**
 * @typedef {object} InputPost
 * @property {string} slug - URL to access the post (SEO)
 * @property {string} title - title of the post
 * @property {string} excerpt - excerpt of the post
 * @property {string} content - content of the post
 * @property {number} category_id - category id of the post
 */

/**
 * @typedef {object} Category
 * @property {number} id - unique id, PK of the table
 * @property {string} route - URL segment to access the category (SEO)
 * @property {label} label - label of the category
 */
