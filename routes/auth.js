import express from "express";
import { sigin, signup } from "../controllers/auth.js";
const router = express.Router();

//CREATE A USER
router.post("/signup", signup);
//SIGIN IN
router.post("/sigin", sigin);
//GOOGLE AUTH

export default router;
