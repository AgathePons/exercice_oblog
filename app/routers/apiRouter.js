const { Router } = require('express');
const mainController = require('../controllers/mainController');
const postsController = require('../controllers/postsController');
const categoriesController = require('../controllers/categoriesController');
// validator
// schema
// middleware wrapper

const router = Router();

// test router
router.get('/', mainController.homePage);

/**
 * GET /v1/posts
 * @summary Get all posts
 * @return {object} json
 */
router.get('/posts', postsController.getAllPosts);
/**
 * GET /v1/posts/:id
 * @summary Get one post by id (id has to be a number)
 * @return {object} json
 */
router.get('/posts/:id([0-9])', postsController.getOnePost);

/**
 * GET /v1/posts/category/:id
 * @summary Get all posts from a category by category id (id has to be a number)
 * @return {object} json
 */
router.get('/posts/category/:id([0-9])', postsController.getAllPostsByCategory);

/**
 * GET /v1/categories
 * @summary Get all categories
 * @return {object} json
 */
router.get('/categories', categoriesController.getAllCategories);

module.exports = router;
