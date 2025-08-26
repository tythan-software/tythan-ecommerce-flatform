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
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
  getUserAddresses,
  deleteUser,
  createUser,
  createUserAddress,
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
  setDefaultAddress
);

/** User-protected routes - End */

/** Admin-protected routes - Start */

router.get(`${routeValue}`, adminAuth, getUsers);
router.delete(`${routeValue}/:id`, adminAuth, deleteUser);
router.put(`${routeValue}/:id`, adminAuth, updateUser);
router.post(`${routeValue}/admin`, adminAuth, createAdmin);

// Address
router.get(`${routeValue}/:id/addresses`, adminAuth, getUserAddresses);
router.post(`${routeValue}/:id/addresses`, adminAuth, addAddress);
router.put(
  `${routeValue}/:id/addresses/:addressId`,
  adminAuth,
  updateAddress
);
router.delete(
  `${routeValue}/:id/addresses/:addressId`,
  adminAuth,
  deleteAddress
);
router.put(
  `${routeValue}/:id/addresses/:addressId/default`,
  adminAuth,
  setDefaultAddress
);

/** Admin-protected routes - End */

export default router;
