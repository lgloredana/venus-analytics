import express from 'express';

// Controllers
const userController = require('../../controllers/users');

// Middlewares
const validate = require('../../middlewares/validation/userValidation');

const router = express.Router();

// @route    POST api/users
// @desc     Register User
// @access   Public
router.post('/', validate.registerUser, userController.registerUser);

// @route    GET api/users
// @desc     Get All Users
// @access   Public
router.get('/', userController.fetchUsers);

module.exports = router;
