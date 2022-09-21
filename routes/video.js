import express from "express";
import { verifyToken } from "../Utlis/verifyToken";

const router = express.Router();

//@desc add video
//Route Post /video
//@acess private

router.post("/", verifyToken);

export default router;
