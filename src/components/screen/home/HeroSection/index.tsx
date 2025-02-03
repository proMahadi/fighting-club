import Image from "next/image";
import React from "react";
import fighterImage from "@/assets/fighterImage.webp";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="h-[800px] bg-heroBg bg-no-repeat bg-center bg-cover relative lg:flex items-center justify-center hidden">
        {/* desktop device */}
        <div className="lg:flex items-center  justify-center mt-[150px] gap-[30%] xl:gap-[40%] hidden  ">
          <div className="xl:mb-[86px]">
            <h1 className="text-white lg:font-black  text-7xl lg:text-8xl xl:text-9xl font-inter">
              Mirsad
            </h1>
            <p className="text-gray1 font-figTree italic text-4xl text-nowrap">
              Private Martial Art Club
            </p>
          </div>
          <Image
            src={fighterImage}
            alt="fighterImage"
            className="absolute w-[45%] z-10 bottom-0 "
          />
          <div className="xl:mb-[86px]">
            <h1 className="text-white lg:font-black  text-7xl lg:text-8xl xl:text-9xl font-inter">
              Bektic
            </h1>
            <p className="text-gray1 font-figTree italic text-4xl text-nowrap">
              Professional Fighter
            </p>
          </div>
        </div>
        {/* desktop device */}
        <button className="text-white py-5 px-[60px] text-[28px] font-normal font-figTree rounded-xl bg-background absolute right-[60px] bottom-10 z-20">
          Learn More
        </button>
      </section>
      <section className="h-[750px] bg-heroBg bg-no-repeat bg-center bg-cover relative flex items-end justify-center  lg:hidden ">
        <div>
          <div className="text-center">
            <p className="text-gray1 font-figTree italic text-xl text-nowrap">
              Professional Fighter
            </p>
            <h1 className="text-white font-black  text-7xl font-inter whitespace-pre-line">{`Mirsad \nBektic`}</h1>
            <p className="text-gray1 font-figTree italic text-xl text-nowrap">
              Private Martial Art Club
            </p>
            <button className="text-white py-3 px-[38px] text-lg font-normal font-figTree rounded-lg bg-background mt-[22px]">
              Learn More
            </button>
          </div>
          <Image
            src={fighterImage}
            alt="fighterImage"
            className="w-full max-w-[500px] mt-6"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
