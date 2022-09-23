import express from "express";
import { AddVideo, deleteVideo, updateVideo } from "../controllers/video";
import { verifyToken } from "../Utlis/verifyToken";

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
route.delete("/:id", verifyToken, deleteVideo);

//@desc get video
//Route get /video/find
//@acess public
route.get("/find/:id");

//@desc get video
//Route get /video/view
//@acess public
route.get("/view/:id");

//@desc get video
//Route get /video/random
//@acess public
route.get("/random");

//@desc get video
//Route get /video/trend
//@acess public
route.get("/trend");

//@desc get video
//Route get /video/sub
//@acess public
route.get("/sub");

export default router;
