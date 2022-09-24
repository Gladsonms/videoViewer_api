import express from "express";
import {
  AddVideo,
  addView,
  deleteVideo,
  getVideos,
  randomVideos,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../Utlis/verifyToken.js";

const router = express.Router();

//@desc add video
//Route Post /video
//@acess private

router.post("/", verifyToken, AddVideo);

//@desc update video
//Route Put /Video
//@acess Private

router.put("/:id", verifyToken, updateVideo);

//@desc delete video
//Route delete /video
//@acess private
router.delete("/:id", verifyToken, deleteVideo);

//@desc get video
//Route get /video/find
//@acess public
router.get("/find/:id", getVideos);

//@desc put video count
//Route put /video/view
//@acess public
router.put("/view/:id", addView);

//@desc get video
//Route get /video/random
//@acess public
router.get("/random", randomVideos);

//@desc get video
//Route get /video/trend
//@acess public
router.get("/trend", trend);

//@desc get video
//Route get /video/sub
//@acess public
router.get("/sub", verifyToken, sub);

export default router;
