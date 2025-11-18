import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Sheard/Footer";
import Navbar from "../Pages/Sheard/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default RootLayout;
