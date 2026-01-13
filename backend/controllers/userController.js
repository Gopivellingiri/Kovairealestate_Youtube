import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import User from "../model/user.js";
import { sendToken } from "../utils/sendToken.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// api/v1/users/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists", 400));
  }
  user = await User.create({
    name,
    email,
    password,
  });
  sendToken(user, 200, res, "Your account has been registered successfully");
});
