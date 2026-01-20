import express from "express";
import { sendOTP } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", sendOTP);

export default router;
