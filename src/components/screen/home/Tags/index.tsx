import Image from "next/image";
import React from "react";
import starIcon from "@/assets/starIcon.svg";
import Marquee from "react-fast-marquee";

const TagsSection: React.FC = () => {
  const tags = [
    {
      id: "1",
      name: "UFC",
    },
    {
      id: "2",
      name: "MuayThai",
    },
    {
      id: "3",
      name: "Boxing",
    },
    {
      id: "4",
      name: "Jiu Jitsu",
    },
    {
      id: "5",
      name: "Fitness",
    },
    {
      id: "6",
      name: "Wrestling",
    },
  ];
  return (
    <div className="h-[78px] md:h-[108px] bg-white flex items-center overflow-x-hidden relative ">

        <Marquee speed={150}>
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-[26px] text-nowrap ml-14 "
            >
              <Image src={starIcon} alt="starIcon" />
              <p className="text-gray2 font-figTree font-black italic text-[34px] md:text-5xl">
                {tag.name}
              </p>
            </div>
          ))}
        </Marquee>
    </div>
  );
};

export default TagsSection;
