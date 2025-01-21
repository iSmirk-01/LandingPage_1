import React from "react";
import Logo from "../svg/Logo";
import AndroidStore from "../svg/AndroidStore";
import AppleStore from "../svg/AppleStore";

function Footer() {
  return (
    <footer className="min-h-[288px] w-full grid grid-cols-1 md:grid-cols-2 bg-black p-10 gap-9">
      {/* Left Section */}
      <div className="flex flex-col gap-6 items-start justify-center">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6">
          {/* Top Links */}
          <li className="flex gap-6">
            <span className="cursor-pointer text-white">Download Now</span>
            <span className="cursor-pointer text-white">License</span>
          </li>

          {/* Grid of Links */}
          <li className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <span className="cursor-pointer text-white">About</span>
            <span className="cursor-pointer text-white">Features</span>
            <span className="cursor-pointer text-white">Pricing</span>
            <span className="cursor-pointer text-white">News</span>
            <span className="cursor-pointer text-white">Help</span>
            <span className="cursor-pointer text-white">Contact</span>
          </li>
        </ul>

        {/* Footer Note */}
        <p className="text-sm text-slate-500">
          © 2021 Landify UI Kit. All rights reserved. Cloned by Federico for Practice
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-4 items-start md:items-end justify-center text-white">
        <p>Get the App</p>
        <AndroidStore />
        <AppleStore />
      </div>
    </footer>
  );
}

export default Footer;
