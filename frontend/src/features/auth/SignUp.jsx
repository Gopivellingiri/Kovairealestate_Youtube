import { useState } from "react";
import HeroImg from "../../assets/heroimg.png";
import Layout from "../../shared/Layout";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Layout>
      <div className="flex items-start lg:items-center justify-center lg:flex-row xl:flex-row gap-4">
        <div>
          <div>
            <h1 className="text-3xl font-bold text-sky-800 mb-4">
              Register your Account
            </h1>
            <form className="flex flex-col items-center text-left">
              <input
                type="text"
                className="mt-6 bg-white border border-[#D0dadd] outline-none py-3 px-3 w-full rounded-md"
                placeholder="Enter Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                className="mt-6 bg-white border border-[#D0dadd] outline-none py-3 px-3 w-full rounded-md"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="mt-6 bg-white border border-[#D0dadd] outline-none py-3 px-3 w-full rounded-md"
                placeholder="Enter Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full">
                <button
                  type="submit"
                  className="font-semibold text-md text-white rounded-full space-y-0 bg-orange-500 py-3 px-6 hover:bg-orange-600 transition-all duration-300 w-full mt-3"
                >
                  Sign Up
                </button>
              </div>
              <div className="w-full mt-3">
                <div className="flex items-center gap-2 w-full">
                  <hr className="border border-gray-200 w-1/2" />
                  <span className="font-semibold text-gray-200 text-base">
                    Or
                  </span>
                  <hr className="border border-gray-200 w-1/2" />
                </div>
                <div className="w-full mt-3">
                  <button className="flex items-center justify-center gap-2 py-3 px-6 bg-gray-800 rounded-full text-center text-white w-full font-semibold hover:bg-gray-900 transition-colors duration-300">
                    Continue with Google
                  </button>
                </div>
                <p className="text-base font-semibold text-sky-800 mt-3 text-center">
                  Have an account already?
                  <Link to="/login">
                    <span className="text-orange-500 hover:underline pl-1">
                      Sing In
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* right section */}
        <div>
          <img className="hidden md:block" src={HeroImg} alt="Hero img" />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
