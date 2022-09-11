import express from "express";
import { deleteUser, update } from "../controllers/user.js";
import { verifyToken } from "../Utlis/verifyToken.js";
const router = express.Router();

// @desc   update profile
// @route POST /user/:id
// @access Private
router.put("/:id", verifyToken, update);

// @desc   delete
// @route POST /user/:id
// @access Private
router.delete("/:id", verifyToken, deleteUser);
export default router;
