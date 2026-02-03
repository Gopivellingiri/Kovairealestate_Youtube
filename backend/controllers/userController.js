import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import User from "../model/user.js";
import { sendToken } from "../utils/sendToken.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { sendEmail } from "../utils/sendMail.js";

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

  await sendEmail({
    from: "Kovai Real Esate < noreply@realestatekovai.online>",
    to: email,
    subject: "Your OTP for Account verification",
    html: `<h2>Account Verification</h2>
            <p>Your OTP is:</p>
            <h1>${otp}</h1>
            <p>This OTP will expire in 10 minutes.</p>
    `,
  });

  res.status(200).json({
    success: true,
    message: `OTP sent to ${email}`,
  });
});

//api/v1/users/verify-otp
export const activateUserWithOTP = catchAsyncErrors(async (req, res, next) => {
  const { email, otp } = req.body;
  let user = await User.findOne({ email }).select("+otp +otpAttempts");
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  if (user.otpExpires < Date.now()) {
    return next(
      new ErrorHandler("OTP expired. Please request a new one.", 400),
    );
  }
  if (user.otp !== otp) {
    user.otpAttempts += 1;
    if (user.otpAttempts >= 5) {
      return next(
        new ErrorHandler("Too many failed attempts. Try again later.", 429),
      );
    }
    await user.save();
    return next(new ErrorHandler("Invalid OTP. Please try again", 400));
  }
  user.isVerified = true;
  user.otp = undefined;
  user.otpExpires = undefined;
  user.otpAttempts = 0;

  await user.save();
  sendToken(user, 200, res, "Your account has been activated successfully");
});

//api/v1/users/resend-otp
export const resendOTP = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  const otp = Math.floor(100000 + Math.random() * 900000);
  user.otp = otp;
  user.otpExpires = Date.now() + 10 * 60 * 1000;
  user.otpAttempts = 0;

  await user.save();

  await sendMail({
    from: "Kovai Real Estate <noreply@realestatekovai.online>",
    to: email,
    subject: "Your New OTP",
    html: `<h2>Kovai Real Estate</h2>
            <p>Your new OTP is:</p>
            <h1>${otp}</h1>
            <p>This OTP will expire in 10 minutes.</p>
            <p>If you did not request this. Please ignore this email.</p>
    `,
  });
  res.status(200).json({ success: true, message: "new OTP sent" });
});

// api/v1/users/login
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please provide all field", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("User doesn't exist", 400));
  }
  if (!user.isVerified) {
    return next(
      new ErrorHandler("please verify your email before signing in.", 400),
    );
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return next(new ErrorHandler("Invalid credentials", 400));
  }
  sendToken(user, 200, res, "Welcome back!");
});
