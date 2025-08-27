import { Router } from "express";
import { uploadUserAvatar } from "../controllers/fileController.mjs";
import { avatarUpload } from "../middleware/avatarUpload.mjs";
import adminAuth from "../middleware/adminAuth.js";

const router = Router();

const routeValue = "/api/files";

/** Admin-protected routes - Start */

router.post(
  `${routeValue}/upload-avatar`,
  adminAuth,
  avatarUpload.single("avatar"),
  uploadUserAvatar
);

/** Admin-protected routes - End */

export default router;