import express from "express";
import {
  activateUserWithOTP,
  googleAuth,
  loginUser,
  resendOTP,
  sendOTP,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", sendOTP);
router.post("/verify-otp", activateUserWithOTP);
router.post("/resend-otp", resendOTP);
router.post("/login", loginUser);

router.post("/google-login", googleAuth);

export default router;
