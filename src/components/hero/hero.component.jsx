import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className=" text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GRWOING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold">
            Fast, flexible, financing for
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-gray-600"
            strings={["BTB", "SASS", "BTC"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl sm:text-xl font-bold text-gray-600 md:pt-5">
          Monitor your data anlytics to increase revenue for BTB, BTC & SASS
          platform.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium text-black my-6 mx-auto py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
