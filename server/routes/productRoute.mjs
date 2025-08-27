import { Router } from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  getProduct,
  updateStock,
  updateProduct,
  processCheckout,
} from "../controllers/productController.mjs";
import upload from "../middleware/multer.mjs";
import adminAuth from "../middleware/adminAuth.js";

const router = Router();

const routeValue = "/api/products";

/** Public routes - Start */

router.get(`${routeValue}`, getProducts);
router.get(`${routeValue}/:type`, (req, res, next) => {
  req.query.type = req.params.type;
  getProducts(req, res, next);
});
router.put(`${routeValue}/:id/update-stock`, updateStock);
router.get(`${routeValue}/:id`, getProduct);

// Process checkout and update product stock
router.post(`${routeValue}/checkout`, processCheckout);

/** Public routes - End */

/** Admin-protected routes - Start */

router.post(
  `${routeValue}`,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  adminAuth,
  createProduct
);
router.delete(`${routeValue}/:id`, adminAuth, deleteProduct);
router.put(
  `${routeValue}/update/:id`,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  adminAuth,
  updateProduct
);

/** Admin-protected routes - End */

export default router;