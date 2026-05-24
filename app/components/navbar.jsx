"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// ADD THIS IMPORT
import { motion, AnimatePresence } from "framer-motion";

import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#232323] py-2">
      <div className="max-w-480 mx-auto">

        {/* Top Contact Bar */}
        <div className="w-380 mx-auto py-2 hidden lg:block">
          <p className="text-center text-white text-sm">
            For query contact me at:{" "}
            <span className="bg-zinc-900 px-2 py-1 rounded">
              <EmailIcon fontSize="small" />
              manishp02051999@gmail.com
            </span>{" "}
            or Call:{" "}
            <span className="bg-zinc-900 px-2 py-1 rounded">
              <CallIcon fontSize="small" />
              +91 0123456789
            </span>
          </p>
        </div>

        {/* Main Navbar */}
        <div className="lg:max-w-[1920px] px-4 lg:px-30">
          <div className="mx-auto flex items-center justify-between">

            {/* Logo */}
            <div className="lg:py-0.5">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={127}
                  height={55}
                  className="lg:p-2.5"
                />
              </Link>
            </div>

            {/* Desktop Search */}
            <div className="ms-auto hidden lg:block">
              <div className="relative 2xl:w-md w-xs">
                <input
                  type="search"
                  className="block w-full rounded-lg border border-gray-300 p-2.5 pl-4 pr-10 text-sm text-zinc-200"
                  placeholder="Search for Products & Services etc......"
                  aria-label="Search"
                />

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <ul className="gap-6 lg:flex justify-center items-center font-medium cursor-pointer text-white lg:text-base ms-10 hidden">
              <Link href="/">
                <li className="hover:text-primary">Home</li>
              </Link>

              <li className="hover:text-primary">Contact Us</li>

              <li className="hover:text-primary">About Us</li>
            </ul>

            {/* Desktop Button */}
            <button className="bg-primary hidden lg:block text-black font-semibold rounded-md hover:bg-white transition p-4 ms-14">
              Request a Quote
            </button>

            {/* Mobile Hamburger */}


            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white lg:hidden p-2 rounded-md hover:bg-zinc-800 transition duration-300"
            >
              <motion.div
                initial={false}
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}


      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#2b2b2b]/95 backdrop-blur-md text-white px-6 py-6 border-t border-zinc-700 shadow-2xl"
          >
            <ul className="flex flex-col gap-5 font-medium">

              <Link href="/" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-primary transition duration-300 hover:translate-x-1">
                  Home
                </li>
              </Link>

              <li className="hover:text-primary transition duration-300 hover:translate-x-1 cursor-pointer">
                Contact Us
              </li>

              <li className="hover:text-primary transition duration-300 hover:translate-x-1 cursor-pointer">
                About Us
              </li>

              <li className="hover:text-primary transition duration-300 hover:translate-x-1">
                <Link
                  href="/pages/categories/broadband-detectors"
                  onClick={() => setMenuOpen(false)}
                >
                  Category
                </Link>
              </li>

              <button className="bg-primary text-black font-semibold rounded-md hover:bg-white hover:scale-[1.02] transition duration-300 p-3 mt-3">
                Request a Quote
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Categories */}
      <div className="w-full py-3 bg-[#314555] hidden lg:block text-white">
        <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium mx-auto">

          <li className="flex items-center hover:text-amber-400 cursor-pointer">
            AMPLIFIERS <KeyboardArrowDownIcon fontSize="small" />
          </li>

          <li className="flex items-center hover:text-amber-400 cursor-pointer">
            <Link
              href="/pages/categories/broadband-detectors"
              className="flex items-center"
            >
              BROADBAND DETECTORS{" "}
              <KeyboardArrowDownIcon fontSize="small" />
            </Link>
          </li>

          <li className="flex items-center hover:text-amber-400 cursor-pointer">
            FILTERS <KeyboardArrowDownIcon fontSize="small" />
          </li>

          <li className="flex items-center hover:text-amber-400 cursor-pointer">
            FREQUENCY SOURCES{" "}
            <KeyboardArrowDownIcon fontSize="small" />
          </li>

          <li className="flex items-center hover:text-amber-400 cursor-pointer">
            MIXERS/FREQUENCY CONVERTERS{" "}
            <KeyboardArrowDownIcon fontSize="small" />
          </li>

          <li className="flex items-center hover:text-amber-400 cursor-pointer">
            MULTIPLIERS <KeyboardArrowDownIcon fontSize="small" />
          </li>

          <li className="flex items-center hover:text-amber-400 cursor-pointer">
            OTHERS <KeyboardArrowDownIcon fontSize="small" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;