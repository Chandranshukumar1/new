const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const { validateRequest } = require('../middleware/validation');
const orderController = require('../controllers/orderController');

// Define routes for orders
router.get('/', orderController.getAllOrders);

router.get('/:id', orderController.getOrderById);

router.post(
  '/',
  [
    body('products').isArray().notEmpty(),
    body('products.*.product').isMongoId().notEmpty(),
    body('products.*.quantity').isInt({ min: 1 }).notEmpty(),
  ],
  validateRequest,
  orderController.createOrder
);

router.put(
  '/:id',
  [
    param('id').isMongoId(),
    body('status').isIn(['pending', 'completed', 'canceled']),
  ],
  validateRequest,
  orderController.updateOrderStatus
);

router.delete('/:id', param('id').isMongoId(), validateRequest, orderController.deleteOrder);

module.exports = router;
