const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const { validateRequest } = require('../middleware/validation');
const userController = require('../controllers/userController');

// Define routes for users
router.get('/', userController.getAllUsers);

router.get('/:id', param('id').isMongoId(), validateRequest, userController.getUserById);

router.post(
  '/',
  [
    body('username').notEmpty(),
    body('password').notEmpty(),
    body('email').isEmail(),
  ],
  validateRequest,
  userController.createUser
);

router.put(
  '/:id',
  [
    param('id').isMongoId(),
    body('profile.age').optional().isInt({ min: 0 }),
  ],
  validateRequest,
  userController.updateUser
);

router.delete('/:id', param('id').isMongoId(), validateRequest, userController.deleteUser);

module.exports = router;
