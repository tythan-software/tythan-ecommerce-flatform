import express from "express";
import {
  createContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
  getUserContacts,
} from "../controllers/contactController.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

const routeValue = "/api/contacts";

/** User-protected routes - Start */

router.post(`${routeValue}`, userAuth, createContact);
router.get(`${routeValue}/my-contacts`, userAuth, getUserContacts);

/** User-protected routes - End */

/** Admin-protected routes - Start */

router.get(`${routeValue}`, adminAuth, getContacts);
router.get(`${routeValue}/:id`, adminAuth, getContact);
router.put(`${routeValue}/:id/status`, adminAuth, updateContactStatus);
router.delete(`${routeValue}/:id`, adminAuth, deleteContact);

/** Admin-protected routes - End */

export default router;
