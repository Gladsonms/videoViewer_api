import express from "express";
import { AddVideo, updateVideo } from "../controllers/video";
import { verifyToken } from "../Utlis/verifyToken";

const router = express.Router();

//@desc add video
//Route Post /video
//@acess private

router.post("/", verifyToken, AddVideo);

//@desc update video
//Route Put /Video
//@acess Private

router.put("/", verifyToken, updateVideo);

export default router;
