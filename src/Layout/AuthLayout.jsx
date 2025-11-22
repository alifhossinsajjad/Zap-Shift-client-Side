import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Logo */}
      <div className="max-w-7xl mx-auto w-full px-4 py-6">
        <Logo />
      </div>

      {/* Main Section */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE (FORM) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
          <img src={authImage} className="w-3/4 lg:w-[80%] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
