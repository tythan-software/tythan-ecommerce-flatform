import { Router } from "express";
import {
  getUsers,
  updateUser,
  getUserProfile,
  updateUserProfile,
  createUserCart,
  updateUserCart,
  getUserCart,
  deleteUserCart,
  createAdmin,
  createUserAddress,
  updateUserAddress,
  deleteUserAddress,
  setUserDefaultAddress,
  getUserAddresses,
  deleteUser,
  createUser,
} from "../controllers/userController.mjs";
import adminAuth from "../middleware/adminAuth.js";
import userAuth from "../middleware/userAuth.js";

const router = Router();

const routeValue = "/api/users";

/** Public routes - Start */

router.post(`${routeValue}`, createUser);

/** Public routes - End */

/** User-protected routes - Start */

// Profile
router.get(`${routeValue}/profile`, userAuth, getUserProfile);
router.put(`${routeValue}/profile`, userAuth, updateUserProfile);

// Cart
router.post(`${routeValue}/cart`, userAuth, createUserCart);
router.put(`${routeValue}/cart`, userAuth, updateUserCart);
router.get(`${routeValue}/cart`, userAuth, getUserCart);
router.delete(`${routeValue}/cart`, userAuth, deleteUserCart);

// Address
router.get(`${routeValue}/addresses`, userAuth, getUserAddresses);
router.post(`${routeValue}/addresses`, userAuth, createUserAddress);
router.put(`${routeValue}/addresses/:addressId`, userAuth, updateUserAddress);
router.delete(`${routeValue}/addresses/:addressId`, userAuth, deleteUserAddress);
router.put(
  `${routeValue}/addresses/:addressId/default`,
  userAuth,
  setUserDefaultAddress
);

/** User-protected routes - End */

/** Admin-protected routes - Start */

router.get(`${routeValue}`, adminAuth, getUsers);
router.delete(`${routeValue}/:id`, adminAuth, deleteUser);
router.put(`${routeValue}/:id`, adminAuth, updateUser);
router.post(`${routeValue}/admin`, adminAuth, createAdmin);

// Address
router.get(`${routeValue}/:id/addresses`, adminAuth, getUserAddresses);
router.post(`${routeValue}/:id/addresses`, adminAuth, createUserAddress);
router.put(
  `${routeValue}/:id/addresses/:addressId`,
  adminAuth,
  updateUserAddress
);
router.delete(
  `${routeValue}/:id/addresses/:addressId`,
  adminAuth,
  deleteUserAddress
);
router.put(
  `${routeValue}/:id/addresses/:addressId/default`,
  adminAuth,
  setUserDefaultAddress
);

/** Admin-protected routes - End */

export default router;
