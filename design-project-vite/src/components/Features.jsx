import React from "react";
import profile from '../assets/profile1.svg';
import profile2 from '../assets/profile2.svg';
import profile3 from '../assets/profile3.svg'
const Features = () => {
  return (
    <div className="w-full h-[763px] flex flex-col items-center py-[100px] gap-[24px]">
      <div className="w-[1216px] h-[184px] flex flex-col items-center gap-[16px]">
        <p className="font-futura text-[#6596A1] text-[20px] border-[1px] rounded-[20px] border-[#C4C4C4] py-[8px] px-[16px] flex items-center w-[145px] h-[38px] gap-[10px] text-center">
          The Best UI
        </p>
        <div className="w-[814px] h-[130px] flex flex-col items-center gap-[16px]">
          <div>
            <h1 className="font-futura text-[50px] font-bold text-[#223236]">Crafting Seamless <span className="text-[#6596A1]">Experiences</span></h1>
          </div>
          <div className="w-[481px] h-[48px]">
            <p className="text-center text-[16px] font-lato text-[#7F7D7D]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          </div>
        </div>
      </div>
      <div className="w-[1211px] h-[211px] gap-[32px] grid grid-flow-row grid-cols-3 mt-24">
        <div className="bg-[#F0F5F6] py-[24px] px-[32px] border-[1px] gap-[24px] rounded-[20px] border-[#F7F7F7] shadow-lg">
          <div className="flex justify-between">
            <img src={profile} alt="" />
            <button className="w-[88px] h-[46px] rounded-[8px] border-[1px] py-[8px] px[18px] border-[#6596A1] text-[#6596A1] text-[14px] font-lato">View All</button>
          </div>
          <div className="pt-5 flex flex-col">
            <h1 className="text-[25px] font-bold text-[#223236]">Wireless</h1>
            <p className=" text-[16px] font-lato text-[#7F7D7D]">Enim nec rhoncus volutpat nullam eros sapien pharetra.</p>
          </div>
        </div>
        <div className="bg-[#F0F5F6] py-[24px] px-[32px] border-[1px] gap-[24px] rounded-[20px] border-[#F7F7F7] shadow-lg">
        <div className="flex justify-between">
            <img src={profile2} alt="" />
            <button className="w-[88px] h-[46px] rounded-[8px] border-[1px] py-[8px] px[18px] border-[#6596A1] text-[#6596A1] text-[14px] font-lato">View All</button>
          </div>
          <div className="pt-5 flex flex-col">
            <h1 className="text-[25px] font-bold text-[#223236]">Synergistic</h1>
            <p className=" text-[16px] font-lato text-[#7F7D7D]">Neque ut integer nulla tellus semper amet id scelerisque eros.</p>
          </div>
        </div>
        <div className="bg-[#F0F5F6] py-[24px] px-[32px] border-[1px] gap-[24px] rounded-[20px] border-[#F7F7F7] shadow-lg">
        <div className="flex justify-between">
            <img src={profile3} alt="" />
            <button className="w-[88px] h-[46px] rounded-[8px] border-[1px] py-[8px] px[18px] border-[#6596A1] text-[#6596A1] text-[14px] font-lato">View All</button>
          </div>
          <div className="pt-5 flex flex-col">
            <h1 className="text-[25px] font-bold text-[#223236]">Distributed</h1>
            <p className=" text-[16px] font-lato text-[#7F7D7D]">Aliquet et cras nam sed mauris laoreet bibendum et.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
