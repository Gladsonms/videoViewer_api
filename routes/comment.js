import express from "express";
import { verifyToken } from "../Utlis/verifyToken";

const router = express.Router();

router.post("/", verifyToken);

export default router;
