// api.ts (inside the routes subdirectory of the backend folder)
import express from 'express';
const router = express.Router();

// Import necessary controllers and models
import OrderController from '../controllers/OrderController';
import UserController from '../controllers/UserController';

// Define API routes for managing orders
router.get('/orders', OrderController.getAllOrders);
router.get('/orders/:id', OrderController.getOrderById);
router.post('/orders', OrderController.createOrder);
router.put('/orders/:id', OrderController.updateOrder);
router.delete('/orders/:id', OrderController.deleteOrder);

// Define API routes for user-related actions
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;
