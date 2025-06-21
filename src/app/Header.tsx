"use client";
import SignIn from "@/component/Popup/Signin";
import Signup from "@/component/Popup/Signup";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openLoginModal = () => {
    setIsSignUp(false);
    setIsModalOpen(true);
  };

  const openSignupModal = () => {
    setIsSignUp(true);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(false);
  };

  const switchModal = () => {
    setIsSignUp(prev => !prev);
  };

  return (
    <div className="">
      <div className="absolute top-4 right-12 flex gap-5">
        {/* Login Button */}
        <button
          onClick={openLoginModal}
          className="text-sm font-semibold uppercase text-gray-700 hover:text-yellow-500"
        >
          Login
        </button>

        <button
          onClick={openSignupModal}
          className="text-sm font-semibold uppercase text-gray-700 hover:text-yellow-500"
        >
          Sign Up
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          {isSignUp ? (
            <Signup toggleModal={toggleModal} switchModal={switchModal} />
          ) : (
            <SignIn toggleModal={toggleModal} switchModal={switchModal} />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
