import { Router } from "express";
import {
  createOrder,
  getOrders,
  getUserOrders,
  getUserOrder,
  updateOrderStatus,
  getOrderStats,
  deleteOrder,
} from "../controllers/orderController.mjs";
import adminAuth from "../middleware/adminAuth.js";
import userAuth from "../middleware/userAuth.js";

const router = Router();

const routeValue = "/api/orders";

/** User-protected routes - Start */

router.post(`${routeValue}`, userAuth, createOrder);
router.get(`${routeValue}/my-orders`, userAuth, getUserOrders);
router.get(`${routeValue}/my-orders/:orderId`, userAuth, getUserOrder);

/** User-protected routes - End */

/** Admin-protected routes - Start */

router.get(`${routeValue}/user/:userId`, adminAuth, getUserOrders);
router.get(`${routeValue}`, adminAuth, getOrders);
router.get(`${routeValue}/stats`, adminAuth, getOrderStats);
router.put(`${routeValue}/:id/update-status`, adminAuth, updateOrderStatus);
router.delete(`${routeValue}/:id`, adminAuth, deleteOrder);

/** Admin-protected routes - End */

export default router;
