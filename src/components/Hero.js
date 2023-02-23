import React from "react";
import heroImg from "../assets/hero.png";
import btn1 from "../assets/btn1.png";
import btn2 from "../assets/btn2.png";
const Hero = () => {
  return (
    <div className="Hero mt-10 ml-10 grid grid-cols-1 content-center md:grid-cols-2 md:gap-x-10 md:py-10 lg:mt-14 lg:grid-cols-2 lg:gap-x-56">
      <div className="flex flex-col justify-start">
        <h1 className="text-white  flex flex-col justify-start items-start mb-5 text-3xl font-semibold md:text-2xl md:leading-9 lg:text-4xl lg:leading-[3.5rem]">
          <div className="flex items-center">
            Explore <img src={btn1} className="h-10 w-28 mx-5 rounded-lg" />
            <span>Mint</span>
          </div>
          TRADE RARE NFTs,
        </h1>
        <h1 className="text-purple-700 flex items-center mb-5 text-3xl font-semibold md:text-2xl md:leading-9 lg:text-4xl lg:leading-[3.5rem]">
          ON BITCOIN <img src={btn2} className="h-10 w-28 mx-5 rounded-lg" />
        </h1>
        <p className="mb-2 text-base text-gray-200 md:text-sm md:leading-6 lg:text-lg lg:leading-8">
          ONE STOP SHOP FOR ORDINALS & INSCRIPTIONS
        </p>
        <p className="mb-10 text-base text-gray-200 md:text-sm md:leading-6 lg:text-lg lg:leading-8">
          100% ON-CHAIN BITCOIN DIGITAL COLLECTIBLES{" "}
        </p>
        <div className="mb-7 flex items-center space-x-4">
          <a
            href="/Market"
            className="flex items-center space-x-2 whitespace-nowrap rounded-md border-2 border-solid border-white py-2 px-6 text-sm font-medium text-white hover:text-gray-100"
          >
            <span>Buy Now</span>
          </a>

          <a
            href="/Create"
            className=" flex items-center space-x-2 whitespace-nowrap rounded-md bg-purple-700  border-2 border-solid border-purple-700 py-2 px-6 text-sm font-medium text-white hover:text-gray-100"
          >
            <span>Read WhitePaper</span>
          </a>
        </div>
      </div>
      <img
        alt=""
        className="w-full max-w-3xl rounded-md -translate-y-16 scale-125"
        src={heroImg}
      />
    </div>
  );
};

export default Hero;
