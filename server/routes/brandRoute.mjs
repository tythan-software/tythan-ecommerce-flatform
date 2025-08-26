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

const brandRouter = express.Router();

const routeValue = "/api/brands";

/** Public routes - Start */

brandRouter.get(`${routeValue}`, getBrands);
brandRouter.get(`${routeValue}/:id`, getBrand);

/** Public routes - End */

/** Admin-protected routes - Start */

brandRouter.post(
  `${routeValue}`,
  adminAuth,
  upload.single("image"),
  createBrand
);
brandRouter.put(
  `${routeValue}/:id`,
  adminAuth,
  upload.single("image"),
  updateBrand
);
brandRouter.delete(`${routeValue}/:id`, adminAuth, deleteBrand);

/** Admin-protected routes - End */

export default brandRouter;
