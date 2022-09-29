import express from "express";
import {
  deleteUser,
  getUser,
  subscribeChannel,
  unSubscribeChannel,
  update,
} from "../controllers/user.js";
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

//@desc subscribe user
//@route PUT  /user/sub/:id
//@access private
router.put("/sub/:id", verifyToken, subscribeChannel);

//@desc unsubcribe user
//@route PUT /user/unsub/:id
//@access  Private
router.put("/unsub/:id", verifyToken, unSubscribeChannel);

//@desc like  video
//@route PUT /user/like/:id
//@access  Private
router.put("/like/:videoId", verifyToken, unSubscribeChannel);

//@desc dislike  video
//@route PUT /user/dilike/:id
//@access  Private
router.put("/dislike/:videoId", verifyToken, unSubscribeChannel);
export default router;
