import Lottie from "lottie-react";
import OtpAnimation from "../assets/OtpAnimation.json";

const OtpPhoneAnimation = () => {
  return (
    <div className="w-50 h-50">
      <Lottie animationData={OtpAnimation} loop autoplay></Lottie>
    </div>
  );
};

export default OtpPhoneAnimation;
