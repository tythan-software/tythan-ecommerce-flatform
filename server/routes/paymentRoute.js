import express from "express";
import {
  createPayment,
  confirmPayment,
  handleStripeWebhook,
} from "../controllers/paymentController.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

const routeValue = "/api/payments";

/** Public routes - Start */

// Stripe webhook (no auth required)
router.post(
  `${routeValue}/webhook`,
  express.raw({ type: "application/json" }),
  handleStripeWebhook
);

/** Public routes - End */

/** User-protected routes - Start */

router.post(
  `${routeValue}`,
  userAuth,
  createPayment
);
router.post(`${routeValue}/confirm-payment`, userAuth, confirmPayment);

/** User-protected routes - End */

export default router;
