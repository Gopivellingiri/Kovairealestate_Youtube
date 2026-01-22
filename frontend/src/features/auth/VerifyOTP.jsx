import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../shared/Layout";
import OtpPhoneAnimation from "../../common/OtpPhoneAnimation.jsx";
import { toast } from "react-toastify";
import {
  useResendOtpMutation,
  useVerifyOtpMutation,
} from "../../redux/api/userApi.js";

const VerifyOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  /* ---------------------------------- //otp --------------------------------- */
  const [otp, setOtp] = useState("");

  const otpHandler = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOtp(value);
    return value;
  };

  /* --------------------------------- //timer -------------------------------- */
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return ` ${minutes <= 0 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  /* -------------------------------- //submit -------------------------------- */
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (timeLeft <= 0) {
      toast.error("OTP has expired. Please request a new one.");
      return;
    }
    try {
      const res = await verifyOtp({ email, otp }).unwrap();
      toast.success(res.message || "Your account has been created");
      localStorage.removeItem("isInOtpFlow");
      navigate("/login");
    } catch (err) {
      if (err?.status === 429) {
        toast.error(err?.data?.message || "Invalid or expired OTP");
      }
    }
  };

  /* ------------------------------ //RESEND OTP ------------------------------ */

  const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  const handleResendOtp = async () => {
    try {
      setIsResendDisabled(true);
      const res = await resendOtp({ email }).unwrap();
      toast.success(res.message || "A new OTP has been sent to your email");

      setTimeLeft(10 * 60);
      setTimeout(() => setIsResendDisabled(false), 6000);
    } catch (err) {
      toast.error(err?.data?.message || "Failed to resend OTP. Try again");
      setIsResendDisabled(false);
    }
  };

  //redirect
  /*   useEffect(() => {
    if (localStorage.getItem("isInOtpFlow") !== "true") {
      toast.error("Unauthorized access. Please Register first");
      navigate("/register");
    }
  }, [navigate]);
 */
  return (
    <Layout>
      <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-max mx-auto">
        {/* OTP animations */}
        <div className="mb-6">
          <OtpPhoneAnimation />
        </div>

        <div className="max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Verify Your OTP
          </h2>
          <p className="text-sm text-gray-500 text-center mb-2">
            Enter the OTP sent to{" "}
            <span className="font-semibold text-slate-500">{email}</span>{" "}
          </p>

          {/* show timer */}
          <p className="text-center text-red-500 font-semibold mb-6">
            OTP expires in: {formatTime(timeLeft)}{" "}
          </p>

          {/* form */}
          <form onSubmit={handleVerifyOtp} className="flex flex-col space-y-4">
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={otpHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 foucs:outline-none text-center text-sm tracking-widest"
              placeholder="Enter 6-Digit OTP"
            />
            <button
              type="submit"
              disabled={timeLeft <= 0}
              className={`w-full py-2 rounded-lg text-base font-semibold transition-all ${timeLeft <= 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"} cursor-pointer `}
            >
              {isLoading ? "Verifying OTP..." : "Verify OTP"}
            </button>
          </form>
          <button
            onClick={handleResendOtp}
            disabled={isResendDisabled || isResending}
            className="w-full mt-3 text-blue-600 font-medium hover:underline disabled:text-gray-400 cursor-pointer"
          >
            {isResending ? "Resending OTP..." : "Resend OTP"}
          </button>
        </div>
        <div className="mt-3">
          <p className="bg-blue-100 rounded-md py-2 px-3 text-xs text-blue-600 text-center mb-6">
            <span className="mr-2">
              <FontAwesomeIcon icon={faBell} />
              If you haven't received the OTP email, please check your{" "}
              <span className="font-medium text-red-500">junk</span> folder
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyOTP;
