import { Router } from "express";
import { userLogin, adminLogin } from "../controllers/authController.mjs";

const router = Router();

const routeValue = "/api/auth";

// Public routes
router.post(`${routeValue}/login`, userLogin);
router.post(`${routeValue}/login/admin`, adminLogin);