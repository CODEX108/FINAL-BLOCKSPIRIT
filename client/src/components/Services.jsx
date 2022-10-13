import React from "react";
import { BsStar } from "react-icons/bs";
import { BsShieldFillCheck } from "react-icons/bs";
import { RiCoinFill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start blue-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient font-extrabold ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          BlockSpirit is a blockchain based learning platform provides you many things in one page.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2F80ED]"
          title="Market Visualation"
          icon={<BsStar fontSize={21} className="text-white" />}
          subtitle="Market visualation helps the user by providing abundant of data and insights about the market."
        />
        <ServiceCard
          color="bg-[#17B384]"
          title="Cross Blockchain Learnings"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Learn by best resources available in the internet and get better with Blockchain and technology."
        />
        <ServiceCard
          color="bg-[#696EFF]"
          title="Vitual Coins"
          icon={<RiCoinFill fontSize={21} className="text-white" />}
          subtitle="Experience the real market transactions by making one of it. Virtual Coins give you that power."
        />
      </div>
    </div>
  </div>
);

export default Services;