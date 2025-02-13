import React from "react";

const Experience: React.FC = () => {
  return (
    <section className="bg-black">
      <div className="py-24 bg-experienceBg bg-center bg-no-repeat bg-cover px-5 lg:px-0 relative overflow-hidden">
        <div className="text-center">
          <h3 className="font-inter font-black italic text-[40px] sm:text-5xl lg:text-[64px] text-white">
            EXPERIENCE
          </h3>
          <p className="font-figTree font-light text-2xl md:text-3xl lg:text-4xl text-white mt-6">
            Over fifteen years of international experience.
          </p>
        </div>
        <div className="max-w-[1112px] w-full mx-auto mt-[61px]">
          <div className=" border-2 border-white p-6 w-full">
            <h4 className="font-inter font-medium text-4xl text-white italic text-center">
              Professional{" "}
              <span className="hidden sm:inline-block">MMA Record</span>
            </h4>
            <div className="mt-[18px] hidden sm:flex gap-[15%] justify-center items-center mr-16 ">
              <h5 className="font-inter font-extrabold text-4xl lg:text-[52px] text-white italic">
                SUB 3-1
              </h5>
              <h5 className="font-inter font-extrabold text-5xl lg:text-7xl text-white italic">
                13-4
              </h5>
              <h5 className="font-inter font-extrabold text-4xl lg:text-[52px] text-white italic">
                KO 8
              </h5>
            </div>
            <div className="mt-[18px] flex flex-col items-center sm:hidden ">
              <h5 className="font-inter font-extrabold text-[56px] md:text-7xl text-white italic">
                13-4
              </h5>
              <div className="flex gap-10">
                <h5 className="font-inter font-extrabold text-4xl md:text-[52px] text-white italic">
                  SUB 3-1
                </h5>
                <h5 className="font-inter font-extrabold text-4xl md:text-[52px] text-white italic">
                  KO 8
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[1112px] mx-auto ">
          <div className="w-full border-2 border-white p-6">
            <p className="font-inter font-medium italic text-[32px] sm:whitespace-pre-line text-center text-white">{`Amateur MMA \nRecord`}</p>
            <h5 className="font-inter font-extrabold text-[56px] md:text-[64px] text-white italic text-center mt-11 mb-11">
              9-0
            </h5>
          </div>
          <div className="w-full border-2 border-white p-6">
            <p className="font-inter font-medium italic text-[32px] sm:whitespace-pre-line text-center text-white">{`Amateur Jiu-Jitsu \nRecord`}</p>
            <h5 className="font-inter font-extrabold text-[56px] md:text-[64px] text-white italic text-center mt-11 mb-11">
              3-1
            </h5>
          </div>
          <div className="w-full border-2 border-white p-6">
            <p className="font-inter font-medium italic text-[32px] sm:whitespace-pre-line text-center text-white">{`Amateur Boxing \nRecord`}</p>
            <h5 className="font-inter font-extrabold text-[56px] md:text-[64px] text-white italic text-center mt-11 mb-11">
              3-1
            </h5>
          </div>
          <div className="w-full border-2 border-white p-6">
            <p className="font-inter font-medium italic text-[32px] sm:whitespace-pre-line text-center text-white">{`Amateur Muay Thai \nRecord`}</p>
            <h5 className="font-inter font-extrabold text-[56px] md:text-[64px] text-white italic text-center mt-11 mb-11">
              3-1
            </h5>
          </div>
        </div>
        <div className="w-full h-[117px] bg-gradient-to-t from-black to-transparent absolute bottom-0 z-10"/>
      </div>
    </section>
  );
};

export default Experience;
