import express from "express";
import { deleteUser, getUser, update } from "../controllers/user.js";
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

//@desc get user
//@route GET  /user/find/:id
//@access Public
router.get("/find/:id", getUser);

export default router;
