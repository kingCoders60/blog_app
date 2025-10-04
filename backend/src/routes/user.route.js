import express from "express";
import { syncClerkUser } from "../controllers/user.controller.js";
import { requireAuth } from "../middlewares/clerkAuth.js";

const router = express.Router();
router.post('/sync',requireAuth,syncClerkUser);

export default router;
