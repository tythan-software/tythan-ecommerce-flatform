import express from "express";
import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.mjs";
import upload from "../middleware/multer.mjs";
import adminAuth from "../middleware/adminAuth.js";

const categoryRouter = express.Router();

const routeValue = "/api/categories";

/** Public routes - Start */

categoryRouter.get(`${routeValue}`, getCategories);
categoryRouter.get(`${routeValue}/:id`, getCategory);

/** Public routes - End */

/** Admin-protected routes - Start */

categoryRouter.post(
  `${routeValue}`,
  adminAuth,
  upload.single("image"),
  createCategory
);
categoryRouter.put(
  `${routeValue}/:id`,
  adminAuth,
  upload.single("image"),
  updateCategory
);
categoryRouter.delete(`${routeValue}/:id`, adminAuth, deleteCategory);

/** Admin-protected routes - End */

export default categoryRouter;
