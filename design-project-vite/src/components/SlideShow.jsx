import React, { useEffect, useState } from "react";

const Slideshow = ({ cardData, interval = 3000 }) => {
  const length = cardData.length / 3;
  const indicateArr = Array.from({ length }, (_, i) => i + 1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= cardData.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? cardData.length - (cardData.length % 3 || 3)
        : prevIndex - 3
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  return (
    <div className="relative flex justify-center items-center min-h-[300px]">
      <div
        name="card"
        className="w-[1211px] h-[211px] gap-[32px] grid grid-flow-row grid-cols-1"
      >
        <div className=" grid grid-flow-row grid-cols-3 gap-[32px]">
          {cardData.slice(currentIndex, currentIndex + 3).map((data, index) => (
            <div
              key={index}
              className="bg-[#F0F5F6] py-[24px] px-[32px] border-[1px] gap-[24px] rounded-[20px] border-[#F7F7F7] shadow-lg hover:shadow-custom-shadow transition-all duration-300"
            >
              <div className="flex justify-between">
                <img src={data.img} alt={`Slide ${currentIndex}`} />
                <button className="w-[88px] h-[46px] rounded-[8px] border-[1px] py-[8px] px-[18px] border-[#6596A1] text-[#6596A1] text-[14px] font-lato">
                  View All
                </button>
              </div>
              <div className="pt-5 flex flex-col">
                <h1 className="text-[25px] font-bold text-[#223236]">
                  {data.title}
                </h1>
                <p className="text-[16px] font-lato text-[#7F7D7D]">
                  {data.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-500 p-2 rounded-l"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-500 p-2 rounded-r"
      >
        ❯
      </button>
      <div className="absolute bottom-0 right-1/2 transform -translate-y-1/2 flex gap-2">
        {indicateArr.map((i) => (
          <div
          key={i}
          className={`size-2.5 ${
            i === currentIndex / 3 + 1 ? "bg-gray-500" : "bg-gray-200"
          } rounded-full`}
        ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
