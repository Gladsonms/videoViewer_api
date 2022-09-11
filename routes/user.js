import express from "express";
import { update } from "../controllers/user.js";
import { verifyToken } from "../Utlis/verifyToken.js";
const router = express.Router();

// @desc   update profile
// @route POST /user/updateprofile
// @access Private
router.put("/:id", verifyToken, update);

export default router;
