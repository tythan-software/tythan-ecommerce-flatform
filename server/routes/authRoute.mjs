import { Router } from "express";
import { userLogin, adminLogin, createToken } from "../controllers/authController.mjs";

const router = Router();

const routeValue = "/api/auth";

// Public routes
router.post(`${routeValue}/login`, userLogin);
router.post(`${routeValue}/login/admin`, adminLogin);
router.get(`${routeValue}/token`, createToken);

export default router;