import React from 'react';
import BgImage from '../assets/Background.svg';

const Hero = () => {
  return (
    <div className="w-full h-[938.66px] bg-no-repeat bg-center bg-cover flex flex-col items-center" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className='w-[640px] h-[475px] py-[80px] flex justify-center'>
      <p className='text-[#6596A1]'>The Art of UI Design</p>
      </div>
    </div>
  );
};

export default Hero;
