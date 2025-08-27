import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.mjs";
import upload from "../middleware/multer.mjs";
import adminAuth from "../middleware/adminAuth.js";

const router = Router();

const routeValue = "/api/categories";

/** Public routes - Start */

router.get(`${routeValue}`, getCategories);
router.get(`${routeValue}/:id`, getCategory);

/** Public routes - End */

/** Admin-protected routes - Start */

router.post(
  `${routeValue}`,
  adminAuth,
  upload.single("image"),
  createCategory
);
router.put(
  `${routeValue}/:id`,
  adminAuth,
  upload.single("image"),
  updateCategory
);
router.delete(`${routeValue}/:id`, adminAuth, deleteCategory);

/** Admin-protected routes - End */

export default router;
