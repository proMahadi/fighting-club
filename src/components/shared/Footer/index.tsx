import Image from "next/image";
import React from "react";
import footerLogo from "@/assets/footerLogo.png";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <section className="bg-black pt-12 pb-[59px] md:pt-[67px] md:pb-8">
      <div>
        <Image src={footerLogo} alt="footerLogo" className="mx-auto h-[84px] w-[84px] object-cover" />
        <p className=" font-figTree font-normal text-xl text-white mt-2.5 text-center">
          Montreal, QC
        </p>
      </div>
      <div className="text-light flex items-center justify-center md:gap-[38px] gap-[30px] text-3xl md:text-[40px] mt-10 mb-[19px] md:mb-[30px]">
        <FaFacebook />
        <RiInstagramFill />
        <FaLinkedin />
      </div>
      <p className=" font-figTree font-normal text-xl text-white mt-2.5  text-center">
      Bektic Boxe / Private Martial Art Club <span className="sm:inline block">&copy; {new Date().getFullYear()} All rights reserved. </span>
      </p>
    </section>
  );
};

export default Footer;
