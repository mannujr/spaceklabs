import React from "react";
import Image from "next/image";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from '@mui/icons-material/Email';
const Navbar = () => {
  return (
    <div className="bg-[#232323]">
      <div className="max-w-480 mx-auto">
        {/* Top Contact Bar */}
        <div className="w-380 mx-auto py-2 hidden lg:block">
          <p className="text-center text-white text-sm ">
            For query contact me at:{" "}
            <span className="bg-zinc-900 px-2 py-1 rounded">
              <EmailIcon fontSize="small" />
              manishp02051999@gmail.com
            </span>{" "}
            or Call:{" "}
            <span className="bg-zinc-900 px-2 py-1 rounded ">
              <CallIcon fontSize="small" />
              +91 0123456789
            </span>
          </p>
        </div>

        {/* Main Navbar */}
        <div className="lg:max-w-[1920px] px-30">
          <div className="mx-auto flex items-center">
            {/* Logo */}
            <div className="lg:py-0.5">
              <Link  href="/">
              <Image src="/logo.png" alt="Logo" width={127} height={55} className="lg:p-2.5"/>
              </Link>
            </div>

            {/* Search */}
            <div className="ms-auto">
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

            {/* Nav Links */}
            <ul className="gap-6 lg:flex justify-center items-center font-medium cursor-pointer lg:text-base ms-10 hidden lg:block">
           <Link href='/'>   <li className="hover:text-primary">Home</li>  </Link>
              <li className="hover:text-primary">Contact Us</li>
              <li className="hover:text-primary">About Us</li>
            </ul>

            {/* Button */}
            <button className="bg-primary hidden lg:block text-black font-semibold rounded-md hover:bg-white transition p-4 ms-14">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
        {/* Categories */}
        <div className="w-full py-3 bg-[#314555] hidden lg:block  ">
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium mx-auto">
            <li className="flex items-center hover:text-amber-400 cursor-pointer">
              AMPLIFIERS <KeyboardArrowDownIcon fontSize="small" />
            </li>

            <li className="flex items-center hover:text-amber-400 cursor-pointer">
              <Link href="/pages/categories/broadband-detectors" className="flex items-center">
                BROADBAND DETECTORS <KeyboardArrowDownIcon fontSize="small" />
              </Link>
            </li>

            <li className="flex items-center hover:text-amber-400 cursor-pointer">
              FILTERS <KeyboardArrowDownIcon fontSize="small" />
            </li>

            <li className="flex items-center hover:text-amber-400 cursor-pointer">
              FREQUENCY SOURCES <KeyboardArrowDownIcon fontSize="small" />
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
