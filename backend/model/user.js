import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
      minLength: [6, "Password should be at least 6 characters long"],
      select: false,
    },
    avatar: {
      url: {
        type: String,
        default: null,
      },
      public_id: { type: String, default: null },
    },
    phoneNumber: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    socialMediaLinks: {
      facebook: { type: String, default: null },
      youtube: { type: String, default: null },
      instagram: { type: String, default: null },
    },
    role: {
      type: String,
      enum: ["buyer", "seller", "admin"],
      default: "buyer",
    },
    isVerified: { type: Boolean, default: false },
    otp: { type: String, select: false },
    otpExpires: Date,
    otpAttempts: {
      type: Number,
      default: 0,
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
