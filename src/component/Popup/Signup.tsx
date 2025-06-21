"use client";
import React from "react";

interface SignupProps {
  toggleModal: () => void;
  switchModal: () => void;
}

const Signup: React.FC<SignupProps> = ({ toggleModal, switchModal }) => {
  return (
    <section>
      <div className="">
        <div className="bg-white rounded-xl p-6 signup-container max-w-md mx-auto shadow-lg relative max-h-screen">
          <div className="card">
            <span
              onClick={toggleModal}
              className="signup-closemodal cursor-pointer"
            >
              ✕
            </span>
          </div>
          <h2 className="text-2xl font-bold text-center text-pink-600 uppercase">Sign Up</h2>

          <form className="space-y-4">
            <input
            type="text"
            placeholder="Full Name" required
            className="w-full mt-2 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800"
          />
          <input
            type="text"
            placeholder="Address" required
            className="w-full mt-2 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800"
          />
          <input
            type="tel"
            placeholder="Phone Number" required
            className="w-full mt-2 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800"
          />
          <input
            type="email"
            placeholder="Email" required
            className="w-full mt-2 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800"
          />
          <input
            type="password"
            placeholder="Password" required
            className="w-full mt-2 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800"
          />

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-pink-600" />
              <span className="text-sm text-gray-700 mt-1">Remember me</span>
            </label>

            <button
              type="button"
              className="text-sm text-pink-600 hover:underline font-medium"
              onClick={() => console.log("Redirect to Forgot Password")}
            >
              Forgot Password?
            </button>
          </div>
            <button
              type="submit"
              className="w-full text-2xl mt-4 bg-pink-600 text-white py-4 px-2 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={switchModal}
              className="text-pink-600 hover:underline font-semibold"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
