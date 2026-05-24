import Image from "next/image";
import { ProductCategorycards } from "./components/productCategorycards";
import Link from "next/link";
import WavesIcon from "@mui/icons-material/Waves";
import { BlogCards } from "./components/blogCards";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className=" flex flex-col flex-1 items-center bg-white font-sans ">
      {/* Hero Section */}
      <div className="bg-black h-[750px] lg:h-150 lg:px-50 lg:mx-auto p-4 ">
        <div className="HeroSection flex flex-col xl:flex-row h-150 lg:mx-auto">
          <div className="LeftSideContent flex flex-col gap-4 lg:w-180 justify-center">
            <span className="text-blue-500 text-xs font-semibold p-2 px-5  bg-blue-950  w-fit rounded-2xl">
              NEXT-GEN OF TsECH
            </span>
            <h1 className="text-5xl lg:text-5xl font-semibold">
              MICROWAVE & MILLIMETER-WAVE{" "}
              <span className="text-amber-200">COMPONENTS</span>
            </h1>
            <p className="text-zinc-300">
              Delivering mission-critical microwave and millimeter-wave
              components for aerospace, defense, and telecommunications.
              <br></br> Engineered for zero-fail performance.
            </p>
            <button className="bg-amber-400 text-black font-semibold w-55 px-5 py-5 rounded-md hover:bg-amber-300 mt-10 transition">
              Request a Quote
            </button>
          </div>
          <div className="RightSideSection flex flex-col justify-center items-start  ">
            <Image src="/heroImage.png" alt="Logo" width={900} height={600} />
          </div>
        </div>
      </div>

      {/* Number Section */}
      <div className="Number Section flex flex-col gap-10 py-10 lg:py-10 lg:flex lg:flex-row lg:gap-18">
        <div className="flex flex-col items-center gap-1">
          <p className="text-blue-950 text-5xl font-semibold  lg:text-6xl">
            15
          </p>
          <p className="text-zinc-700 text-xs lg:text-xl">Years of Expertise</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-blue-950 text-5xl font-semibold lg:text-6xl">
            221+
          </p>
          <p className="text-zinc-700 text-xs lg:text-xl">
            Business Collaborations
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-blue-950 text-5xl font-semibold lg:text-6xl">
            57+
          </p>
          <p className="text-zinc-700 text-xs lg:text-xl">Manufacturers</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-blue-950 text-5xl font-semibold lg:text-6xl">
            22.5+
          </p>
          <p className="text-zinc-700 text-xs lg:text-xl">Sales</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-blue-950 text-5xl font-semibold lg:text-6xl">
            1.5k+
          </p>
          <p className="text-zinc-700 text-xs lg:text-xl">
            Trusts by Businesses
          </p>
        </div>
      </div>

      {/* Product Categoriesssssssss */}
      <div className="productSection mt-5 ">
        <div className="mainProdctSec lg:max-w-[1280px]  ">
          <div className="w-fit mx-auto mb-5">
            <p className="text-black text-[18px] lg:text-4xl  font-semibold border-b text-center">
              PRODUCT CARTEGORIES
            </p>
          </div>
          <div className="mt-5 justify-center hidden lg:block mb-5 ">
            <p className="text-xs text-zinc-600">PRODUCT ECOSYSTEM</p>
            <div className="flex justify-between items-end ">
              <p className="text-black text-2xl font-semibold ">
                Industrial Grade Hardware
              </p>
              <a className="text-sm text-blue-600 ">See All Products</a>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-6 ">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCategorycards key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features p-2">
        <div className="bg-zinc-200  rounded-[99px] flex flex-wrap gap-2 lg:gap-3items-center justify-center p-4 lg:p-3 mt-10 lg:rounded-[180] lg:w-fit lg:h-fit ">
          <div className="bg-white p-2 w-42.5 h-[170px] lg:w-[210px] lg:h-[210px] flex flex-col items-center justify-center rounded-[999]">
            <div className="text-black">
              <WavesIcon />
            </div>
            <div className="flex flex-col items-center mt-4">
              <p className="text-black font-semibold text-[14px] lg:text-[16px] truncate">
                Wide Frequency Range
              </p>
              <p className="text-zinc-700 text-[10px] lg:text-[14px]">
                DC to 110 GHz
              </p>
            </div>
          </div>
          <div className="bg-white p-2 w-[170px] h-[170px] lg:w-[210px] lg:h-[210px] flex flex-col items-center justify-center rounded-[999]">
            <div className="text-black">
              <WavesIcon />
            </div>
            <div className="flex flex-col items-center mt-4">
              <p className="text-black font-semibold text-[14px] lg:text-[16px] truncate wrap-break-word text-center">
                Wide Frequency Range
              </p>
              <p className="text-zinc-700 text-[10px] lg:text-[14px]">
                DC to 110 GHz
              </p>
            </div>
          </div>
          <div className="bg-white p-2 w-[170px] h-[170px] lg:w-[210px] lg:h-[210px] flex flex-col items-center justify-center rounded-[999]">
            <div className="text-black">
              <WavesIcon />
            </div>
            <div className="flex flex-col items-center mt-4">
              <p className="text-black font-semibold text-[14px] lg:text-[16px] truncate">
                Wide Frequency Range
              </p>
              <p className="text-zinc-700 text-[10px] lg:text-[14px]">
                DC to 110 GHz
              </p>
            </div>
          </div>
          <div className="bg-white p-2 w-[170px] h-[170px] lg:w-[210px] lg:h-[210px] flex flex-col items-center justify-center rounded-[999]">
            <div className="text-black">
              <WavesIcon />
            </div>
            <div className="flex flex-col items-center mt-4">
              <p className="text-black font-semibold text-[14px] lg:text-[16px] truncate">
                Wide Frequency Range
              </p>
              <p className="text-zinc-700 text-[10px] lg:text-[14px]">
                DC to 110 GHz
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SPACELAB NEWZ */}
      <div className="w-full mt-10">
        <div className="blogCardsSec lg:max-w-[1280px]  mx-auto">
          <div className="heading mt-5 w-fit mx-auto">
            <p className="text-black text-[18px] lg:text-4xl  font-semibold border-b text-center">
              SPACELAB NEWZ
            </p>
          </div>

          <div className="lg:max-w-[1280px] mx-auto mt-5 justify-center hidden lg:block mb-5 ">
            <p className="text-xs text-zinc-600">PRODUCT ECOSYSTEM</p>
            <div className="flex justify-between items-end ">
              <p className="text-black text-2xl font-semibold ">
                Technical Resources
              </p>
              <a className="text-sm text-blue-600 ">View All</a>
            </div>
          </div>

          <div className="blogCards lg:flex lg:max-w-7xl mx-auto lg:flex-row lg:gap-4 overflow-x-scroll">
            <BlogCards />
            <BlogCards />
            <BlogCards />
            <BlogCards />
            <BlogCards />
          </div>
        </div>
      </div>
    </div>
  );
}
