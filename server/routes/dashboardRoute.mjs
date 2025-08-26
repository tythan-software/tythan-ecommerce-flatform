import { Router } from "express";
import {
  getDashboardStats,
  getAnalytics,
  getQuickStats,
} from "../controllers/dashboardController.mjs";
import adminAuth from "../middleware/adminAuth.js";

const router = Router();

const routeValue = "/api/dashboards";

/** Admin-protected routes - Start */

router.get(`${routeValue}/stats`, adminAuth, getDashboardStats);
router.get(`${routeValue}/analytics`, adminAuth, getAnalytics);
router.get(`${routeValue}/quick-stats`, adminAuth, getQuickStats);

/** Admin-protected routes - End */

export default router;
