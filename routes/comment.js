import express from "express";
import { addComment, deleteComment, getComments } from "../controllers/comment";
import { verifyToken } from "../Utlis/verifyToken";

const router = express.Router();

// @desc   add comment
// @route POST /comment
// @access Private
router.post("/", verifyToken, addComment);

// @desc   delete  comment
// @route DELETE /comment/:id
// @access Private
router.delete("/:id", verifyToken, deleteComment);

// @desc   get comments
// @route GET /video
// @access Public
router.get("/", getComments);
export default router;
