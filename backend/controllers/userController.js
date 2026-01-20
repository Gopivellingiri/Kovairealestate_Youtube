import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import User from "../model/user.js";
import { sendToken } from "../utils/sendToken.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import sendMail from "../utils/sendMail.js";

// api/v1/users/register
export const sendOTP = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists", 400));
  }
  //Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  const otpExpires = Date.now() + 10 * 60 * 1000;

  user = await User.create({
    name,
    email,
    password,
    otp,
    otpExpires,
  });

  await sendMail({
    email,
    subject: "Your OTP for Account Verification",
    message: `Your OTP is ${otp}, It will expire in 10 minutes`,
  });
  res.status(200).json({
    success: true,
    message: `OTP sent to ${email}`,
  });
});
