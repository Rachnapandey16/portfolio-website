import React from "react";
import Dp from "../../assets/image/Dp.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      
      {/* Left Section - Text */}
      <div className="w-full lg:w-3/5 text-center lg:text-left">
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
          <TextChange />
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl tracking-tight">
          I’m a passionate Frontend Developer crafting responsive, user-friendly web experiences with clean code and creative design.
        </p>

        <button className="mt-6 text-sm sm:text-base md:text-lg xl:text-xl py-2 px-5 bg-[#465697] rounded-full font-semibold hover:scale-105 hover:opacity-85 transition duration-300">
          Contact Me
        </button>
      </div>

      {/* Right Section - Profile Image */}
      <div className="w-full lg:w-auto flex justify-center items-center">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
          <img
            src={Dp}
            alt="Profile"
            className=" w-[20vw] h-[20vw] object-cover rounded-full shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
