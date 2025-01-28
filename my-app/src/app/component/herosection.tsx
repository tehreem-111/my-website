import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <main className="w-full h-auto md:h-[663px] flex flex-col-reverse md:flex-row justify-between items-center bg-[#F2F0F1] px-6 md:px-16 py-8">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-[577px] mt-6 md:mt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-sm sm:text-base mt-3 text-gray-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="bg-black py-2 px-6 sm:px-8 rounded-[16px] mt-4 text-sm sm:text-base text-white hover:bg-gray-800">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="relative flex justify-center md:justify-end w-full md:w-auto">
        {/* Profile Image */}
        <Image
          src={"/profile.png"}
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px]"
          width={550}
          height={550}
          alt="profile"
        />
        {/* Star Images */}
        <Image
          src={"/star.png"}
          className="w-[50px] sm:w-[70px] md:w-[100px] absolute top-[50%] left-[10%] md:top-[300px] md:left-[-50px]"
          width={100}
          height={100}
          alt="star"
        />
        <Image
          src={"/star.png"}
          className="w-[50px] sm:w-[70px] md:w-[100px] absolute top-[10px] right-[10px] md:top-[50px] md:right-[30px]"
          width={100}
          height={100}
          alt="star"
        />
      </div>
    </main>
  );
};

export default Herosection;