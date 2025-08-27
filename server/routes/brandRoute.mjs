import express from "express";
import {
  createBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
} from "../controllers/brandController.mjs";
import upload from "../middleware/multer.mjs";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

const routeValue = "/api/brands";

/** Public routes - Start */

router.get(`${routeValue}`, getBrands);
router.get(`${routeValue}/:id`, getBrand);

/** Public routes - End */

/** Admin-protected routes - Start */

router.post(
  `${routeValue}`,
  adminAuth,
  upload.single("image"),
  createBrand
);
router.put(
  `${routeValue}/:id`,
  adminAuth,
  upload.single("image"),
  updateBrand
);
router.delete(`${routeValue}/:id`, adminAuth, deleteBrand);

/** Admin-protected routes - End */

export default router;
