const { Router } = require('express');
const mainController = require('../controllers/mainController');
const postsController = require('../controllers/postsController');
const categoriesController = require('../controllers/categoriesController');
const controllerHandler = require('../helpers/controllerHandler');
const validate = require('../validation/validator');
const postPOSTSchema = require('../validation/postPOSTSchema');

const router = Router();

// test router
router.get('/', mainController.homePage);

// ############## POST ############## //
/**
 * GET /v1/posts
 * @summary Get all posts
 * @tags Post
 * @return {[Post]} 200 - success response - application/json
 */
router.get('/posts', controllerHandler(postsController.getAllPosts));

/**
 * GET /v1/posts/{id}
 * @summary Get one post by id (id has to be a number)
 * @tags Post
 * @param {number} id.path.required - id of the post
 * @return {Post} 200 - success response - application/json
 * @return {ApiError} 400 - Bad request response - application/json
 * @return {ApiError} 404 - Post not found - application/json
 */
router.get('/posts/:id([0-9])', controllerHandler(postsController.getOnePost));

/**
 * GET /v1/posts/category/{id}
 * @summary Get all posts from a category by category id (id has to be a number)
 * @tags Post
 * @param {number} id.path.required - id of the category
 * @return {[Post]} 200 - success response - application/json
 * @return {ApiError} 400 - Bad request response - application/json
 * @return {ApiError} 404 - Post not found - application/json
 */
router.get('/posts/category/:id([0-9])', controllerHandler(postsController.getAllPostsByCategory));

/**
 * POST /v1/posts
 * @summary Post one post from json body in request
 * @tags Post
 * @param {InputPost} request.body.required - Data of the post object in request body - application/json
 * @return {object} 200 - success response - application/json
 * @return {ApiError} 400 - Bad request response - application/json
 */
router.post('/posts', validate('body', postPOSTSchema), controllerHandler(postsController.postOnepost));

// ############## CATEGORY ############## //
/**
 * GET /v1/categories
 * @summary Get all categories
 * @tags Category
 * @return {[Category]} 200 - success response - application/json
 */
router.get('/categories', controllerHandler(categoriesController.getAllCategories));

module.exports = router;
