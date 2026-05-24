import React from "react";
import Image from "next/image";

export const BlogCards = () => {
  return (
    <div className="relative w-full hover:bg-zinc-50 lg:min-w-[583px] lg:h-fit flex lg:flex-col px-2 py-3 gap-2  lg:gap-4 ">
      <div className="blogcard min-w-[80px] lg:w-full lg:h-[350px] border border-zinc-300 flex items-center justify-center ">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
        <button className="hidden lg:block  absolute bottom-38 right-6 bg-black text-white text-[10px] lg:text-sm px-4 py-4 rounded-full">
          Read
        </button>
      </div>
      <div>
        <div className=" text-black font-semibold flex items-center justify-start gap-2  ">
          <p className="text-[8px] lg:text-[12px] text-start">
            UPLOADED ON 08, Oct 24
          </p>
          <p className="text-[8px] lg:text-[10px] px-2 py-1 bg-amber-200 rounded-4xl">
            BLOG CATEGORY
          </p>
        </div>
        <div className="w-fit mt-2">
          <p className="text-[12px] lg:text-[24px] text-black font-semibold">
            26.5 to 50 GHz Amplifier Deliv....
          </p>
          <p className="text-[10px] lg:text-[14px] text-zinc-500">
            Spacek Labs’ solid-state amplifier, Model SGKaQ-4 ier, Model SGKaQ-4
            ier, Model SGKaQ-4 0-10, has excellen...
          </p>
        </div>
      </div>
    </div>
  );
};
