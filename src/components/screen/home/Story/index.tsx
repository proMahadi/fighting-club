import Image from "next/image";
import React from "react";
import karateIcon from "@/assets/karateIcon.svg";
import jiuJitsuIcon from "@/assets/jiuJitsuIcon.svg";

const StorySection = () => {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-story1Bg bg-no-repeat bg-center bg-cover w-full h-[390px] md:h-[531px] flex justify-center items-center">
          <div className="max-w-[432px] mx-auto p-6">
            <p className="font-figtree font-bold text-[32px] lg:text-[40px] text-center text-white">
              Started karate at the age of eleven years old.
            </p>
            <Image src={karateIcon} alt="karateIcon" className="mx-auto mt-4" />
          </div>
        </div>
        <div className="bg-story2Bg bg-no-repeat bg-center bg-cover w-full h-[390px] md:h-[531px] flex justify-center items-center">
          <div className="max-w-[412px] mx-auto p-6">
            <p className="font-figtree font-bold text-[32px] lg:text-[40px] text-center text-white">
              Jiu-Jitsu black belt under Firas Zahabi
            </p>
            <Image
              src={jiuJitsuIcon}
              alt="jiuJitsuIcon"
              className="mx-auto mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
