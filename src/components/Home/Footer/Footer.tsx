import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10">
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">About Us</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Careers</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Blog</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Gift Cards</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Megazine</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Supports</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Contact</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Legal Notice</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Privacy</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Term & Condition</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Sitemap</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Car Hire</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Activity Finder</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Tour List</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Flight Finder</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Travel Agent</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h2 className="text-sm text-gray-600">Our Mobile Number</h2>
            <h2 className="text-base font-semibold text-blur-950 mt-1">+62 123 456 789</h2>
          </div>
          <div className="mt-6">
            <h2 className="text-sm text-gray-600">Our Email</h2>
            <h2 className="text-base font-semibold text-blur-950 mt-1">example@email.com</h2>
          </div>
        </div>
      </div>
      <div className="mt-8 w-[80%] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center ">Copyright 2025 Traveleena. All rights reserved</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <Link href={"#"}>
            <FaTwitter className="text-gray-500 hover:text-gray-900" />
          </Link>
          <Link href={"#"}>
            <FaFacebook className="text-gray-500 hover:text-gray-900" />
          </Link>
          <Link href={"#"}>
            <FaInstagram className="text-gray-500 hover:text-gray-900" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
