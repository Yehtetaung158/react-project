import React from "react";
import BgImage from "../assets/Background.svg";

const Hero = () => {
  return (
    <div
      className="w-full h-[938.66px] bg-no-repeat bg-center bg-cover flex flex-col items-center content-start"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="w-[885px] h-[475px] py-[80px] flex flex-col justify-center items-center">
        <p className="text-[#6596A1] font-futura text-[22px]">
          The Art of UI Design
        </p>
        <div className="flex flex-col items-center ">
          <p className="text-[61px] font-futura text-center text-[#223236] font-bold">
            Come for the <span className="text-[#6596A1]">features</span> of it.
            Stay for best ever help.
          </p>
          <div className="w-[521px]">
            <p className="text-center text-[#7F7D7D] text-[20px] mb-[20px]">
              We’ve been told it is possible to revolutionize the payment
              industry. We have not reinvented the wheel, we decide{" "}
            </p>
          </div>
          <div className="w-[286] flex justify-center items-center gap-[16px] h-[46px]">
            <button className="border-[1px] border-[#6596A1] rounded-[8px] px-[20px] py-[8px] text=[#6596A1]">Learn More</button>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
