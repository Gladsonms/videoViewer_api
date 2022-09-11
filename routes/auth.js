import express from "express";
import { sigin, signup } from "../controllers/auth.js";
const router = express.Router();

// @desc   user signup
// @route POST /authsignup
// @access Public
router.post("/signup", signup);
// @desc   user login
// @route POST /auth/sigin
// @access Public
router.post("/sigin", sigin);
//GOOGLE AUTH

export default router;
