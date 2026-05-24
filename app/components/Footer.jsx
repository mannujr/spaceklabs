import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="footer bg-[#F8FAFC] p-4 rounded-4xl max-w-[1280px] mx-auto mt-10 ">
      <div className="bg-blue-950 text-white rounded-4xl lg:flex lg:flex-col lg:py-10  ">
        <p className="lg:text-4xl  text-center py-2">
          Subscribe to our newsletter
        </p>
        <form action="submit" className="p-2  lg:flex lg:flex-row lg:items-center lg:justify-center lg:py-2 ">
          <div className="lg:w-1/2  lg:flex lg:gap-2 lg:flex-row text-white">
            <input
              type="text"
              placeholder="Name"
              className="w-full lg:h-[60px] text-xs p-2 border mb-2 rounded-4xl lg:p-4"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full lg:h-15 text-xs p-2 border mb-2 rounded-4xl lg:p-4"
            />
            <button className="mx-auto w-full p-4 lg:w-87.5 lg:h-15 bg-white font-semibold text-black rounded-[999]">
              Subscribe
            </button>
          </div>
        </form>
      </div>


      <div className="bottomSec">
        <div className="logoNdetail mt-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
          <div className="logo mx-auto w-full flex items-center flex-col justify-center">
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
            <p className="text-zinc-600 text-center text-xs mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              doloribus sapiente, quae cupiditate expedita perspiciatis a
            </p>
          </div>

          <div className="mainLinks lg:w-3/2 text-xs  border-zinc-400 lg:flex lg:flex-row lg:justify-around">
            <ul className="flex  flex-col items-center justify-center mb-8 gap-2">
              <li className="text-blue-600 font-semibold ">COMPANY</li>
              <li className="text-zinc-700">About</li>
              <li className="text-zinc-700">Features</li>
              <li className="text-zinc-700">Works</li>
              <li className="text-zinc-700">Career</li>
            </ul>
            <ul className="flex flex-col items-center justify-center mb-8 gap-2">
              <li className="text-blue-600 font-semibold">HELP</li>
              <li className="text-zinc-700">Customer Support</li>
              <li className="text-zinc-700">Delivery Details</li>
              <li className="text-zinc-700">Terms & Conditions</li>
              <li className="text-zinc-700">Privacy Policy</li>
            </ul>
            <ul className="flex flex-col items-center justify-center mb-8 gap-2">
              <li className="text-blue-600 font-semibold">RESOURCES</li>
              <li className="text-zinc-700">Free eBooks</li>
              <li className="text-zinc-700">Development Tutoria</li>
              <li className="text-zinc-700">How to - Blog</li>
              <li className="text-zinc-700">Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="rights border-t-2 py-4 border-black mt-5">
                  <p className="text-zinc-600 text-center text-xs">© Copyright 2022, All Rights Reserved by MM-WAVE TECHNOLOGY</p>
 
        </div>
      </div>
    </div>
  );
};
