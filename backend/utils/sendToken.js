import { parseExpireTime } from "./parseExpireTime.js";

export const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();
  const { password, resetPasswordToken, resetPasswordTime, ...userInfo } =
    user._doc || user;

  const cookieExpireMs = parseExpireTime(process.env.JWT_EXPIRES);

  const options = {
    expires: new Date(Date.now() + cookieExpireMs),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message: "Login successful",
    token,
    user: userInfo,
  });
};
