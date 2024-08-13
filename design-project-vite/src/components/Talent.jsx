import React from "react";
import illustrationGirl from "../assets/illustrationGirl.svg";

const Talent = () => {
  return (
    <div className="w-full h-[875px] pt-[100px] gap-[60px] flex flex-col items-center">
      <div className="w-[1219px] h-[184px] flex flex-col gap-[20px] items-center">
        <h1 className="font-futura text-[20px] text-[#6596A1] border-[1px] border-[#C4C4C4] rounded-[20px] w-[186px] h-[38px] py-[8px] px-[16px] flex items-center">
          Masterful Design
        </h1>
        <h1 className="font-futura text-[50px] font-bold text-[#223236]">
          A New Era of <span className="text-[#6596A1]">Design Excellence</span>
        </h1>
        <div className="w-[478px] h-[48px]">
          <p className="font-lato text-[16px] text-center text-[#7F7D7D]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
        </div>
      </div>
      <div className="w-[1216px] h-[531px] gap-[140px] flex items-center">
        <div>
          <img src={illustrationGirl} alt="" />
        </div>
        <div className="flex flex-col w-[516px] h-[313px] gap-[28px] items-center">
          <div className="w-[516px] h-[83px] gap-[16px] flex flex-col">
            <div className="flex gap-[16px]">
              <p className="px-[13px] py-[7px] text-[12px] text-[#223236] border-[1px] items-center border-[#223236] rounded-full">1</p>
              <h3 className="font-futura text-[20px] text-[#223236] font-bold">Explore ideas together</h3>
            </div>
            <div className="flex w-full justify-end">
                <p className="text-[#7F7D7D] text-[16px] font-lato w-[465px] h-[48px]">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
            </div>
          </div>
          <div className="w-[516px] h-[83px] gap-[16px] flex flex-col">
          <div className="flex gap-[16px]">
              <p className="px-[13px] py-[7px] text-[12px] text-[#223236] border-[1px] items-center border-[#223236] rounded-full">2</p>
              <h3 className="font-futura text-[20px] text-[#223236] font-bold">Bring those ideas to life</h3>
            </div>
            <div className="flex w-full justify-end">
                <p className="text-[#7F7D7D] text-[16px] font-lato w-[465px] h-[48px]">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
            </div>
          </div>
          <div className="w-[516px] h-[83px] gap-[16px] flex flex-col">
          <div className="flex gap-[16px]">
              <p className="px-[13px] py-[7px] text-[12px] text-[#223236] border-[1px] items-center border-[#223236] rounded-full">3</p>
              <h3 className="font-futura text-[20px] text-[#223236] font-bold">Ship better outcomes</h3>
            </div>
            <div className="flex w-full justify-end">
                <p className="text-[#7F7D7D] text-[16px] font-lato w-[465px] h-[48px]">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
