import Image from "next/image";
import React from "react";
import service1 from "@/assets/servicesImg/service1.webp";
import icon1 from "@/assets/servicesImg/icon1.svg";
import { servicesData } from "@/data/servicesData";

const Services: React.FC = () => {
  return (
    <section className="bg-black px-11 py-[52px] lg:px-[88px] lg:py-[70px] w-full">
      <h3 className="uppercase font-inter text-[32px] lg:text-5xl xl:text-[64px] text-white font-black italic text-center md:text-left">
        SERVICES
      </h3>
      <div className=" mt-8 md:mt-16xl:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="relative w-full">
            <Image
              src={service.img}
              alt="serviceImage"
              className="rounded-lg object-cover w-full"
            />
            <div className=" flex gap-5 absolute left-4 bottom-5 z-10">
              <h5 className="font-figTree font-bold text-2xl md:text-[32px] text-white">
                {service.name}
              </h5>
              <Image src={service.icon} alt="iconImg" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <button className="text-white py-3 px-[38px] text-lg font-normal font-figTree rounded-lg bg-background mt-[50px] w-full sm:w-max mx-auto hover:bg-white hover:text-background duration-200 ">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Services;
