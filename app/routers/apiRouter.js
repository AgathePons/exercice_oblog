const { Router } = require('express');
const mainController = require('../controllers/mainController');
const postsController = require('../controllers/postsController');
const categoriesController = require('../controllers/categoriesController');
// TODO validator
// TODO schema
// TODO middleware wrapper

const router = Router();

// test router
router.get('/', mainController.homePage);

/**
 * GET /v1/posts
 * @summary Get all posts
 * @tags Post
 * @return {object} 200 - success response - application/json
 */
router.get('/posts', postsController.getAllPosts);
/**
 * GET /v1/posts/{id}
 * @summary Get one post by id (id has to be a number)
 * @tags Post
 * @param {number} id.path - id of the post
 * @return {object} 200 - success response - application/json
 */
router.get('/posts/:id([0-9])', postsController.getOnePost);

/**
 * GET /v1/posts/category/{id}
 * @summary Get all posts from a category by category id (id has to be a number)
 * @tags Post
 * @param {number} id.path - id of the category
 * @return {object} 200 - success response - application/json
 */
router.get('/posts/category/:id([0-9])', postsController.getAllPostsByCategory);

/**
 * A Post :
 * @typedef {object} PostArticle
 * @property {string} title.required - The title
 * @property {string} slug.required - The slug (no whitespace, no special characters, kebab-case)
 * @property {string} excerpt.required - The excerpt
 * @property {string} content.required - The content
 * @property {number} category_id.required - The category id
 */

/**
 * POST /v1/posts
 * @summary Post one post from json body in request
 * @tags Post
 * @param {PostArticle} request.body.required - Data of the post object in request body - application/json
 * @return {object} 200 - success response - application/json
 */
router.post('/posts', postsController.postOnepost);

/**
 * GET /v1/categories
 * @summary Get all categories
 * @tags Category
 * @return {object} 200 - success response - application/json
 */
router.get('/categories', categoriesController.getAllCategories);

module.exports = router;
