import React, { useState } from "react";
import { LemonWars, Premium } from "./common/Helper";
import { RightIcon } from "./common/Icons";
const LemonWares = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const handleToggleChange = () => {
    setIsYearly(!isYearly);
  };
  const activeCards = isYearly ? Premium : LemonWars;

  return (
    <>
      <div id="account ">
        <div className="container">
          <div className="xl:px-40 lg:px-4 pt-20 xl:pt-32 sm:px-4">
            <div className="text-center">
              <h2 className="text-black font-semibold font-poppins text-[25px] sm:text-[38px] md:text-[40px] lg:text-[45px] xl:text-[50px] lg:leading-[60px]">
                Ready to get started with <span className="lg:block"></span>
                Lemon Wares?
              </h2>
              <p className="text-black font-poppins lg:leading-[25px] font-normal text-[18px] sm:text-[21px] md:text-[23px] xl:text-[25px] pt-4 sm:pt-5 lg:pt-7 xl:pt-9">
                Choose the package that suits you
              </p>
              <div className="mt-6 xl:mt-14 font-poppins text-black flex sm:justify-center items-center overflow-x-scroll sm:overflow-x-hidden w-[320px] sm:w-full mx-auto px-2">
                <p
                  className={`text-[18px] sm:text-[21px] md:text-[23px] xl:text-[25px] lg:leading-[25px] font-normal cursor-pointer ${
                    !isYearly ? "" : ""
                  }`}
                  onClick={() => {
                    setIsYearly(false);
                  }}
                >
                  Monthly
                </p>
                <div className="ms-6 md:ms-8 my-4 sm:my-0">
                  <label
                    for="toggle"
                    className="flex justify-center sm:justify-normal items-center cursor-pointer border-0 w-full"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="toggle"
                        className="sr-only"
                        checked={isYearly}
                        onChange={handleToggleChange}
                      />
                      <div className="block bg-[#B00000] w-[64px] sm:w-[93px] h-8 sm:h-12 rounded-full"></div>
                      <div className="dot absolute left-1 top-[6px] sm:top-2 bg-white max-w-5 h-5 sm:max-w-[30px] w-full sm:h-[30px] rounded-full transition-all"></div>
                    </div>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <p
                    className={`text-[18px] sm:text-[21px] md:text-[23px] xl:text-[25px] lg:leading-[25px] font-normal ms-6 cursor-pointer ${
                      isYearly ? "" : ""
                    }`}
                    onClick={() => {
                      setIsYearly(true);
                    }}
                  >
                    Yearly
                  </p>
                  <p className="text-[10px] bg-[#FFE87A] whitespace-nowrap rounded-[8px] ms-4 py-[5px] px-3">
                    20% discount
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[856px] mx-auto flex after:content-[''] after:w-full after:absolute after:h-1 after:bg-[#E5E5E5] after:bottom-0 relative mt-6 lg:mt-10 md:mt-8 xl:mt-16 pt-2 text-[20px] sm:text-[25px] md:text-[27px] lg:text-[30px] font-poppins font-semibold ">
              <div
                className={`text-center w-[50%] cursor-pointer ${
                  activeTab === 1
                    ? "border-b-4 border-[#B00000] z-10 inline"
                    : ""
                }`}
                onClick={() => handleTabClick(1)}
              >
                <p className="relative">Basic</p>
              </div>
              <div
                className={`text-center w-[50%] cursor-pointer ${
                  activeTab === 2 ? "border-b-4 border-[#B00000] z-10" : ""
                }`}
                onClick={() => handleTabClick(2)}
              >
                <p className="relative">Premium</p>
              </div>
            </div>
            {/* CARDS */}
            <div className="flex flex-wrap xl:gap-16 lg:flex-nowrap justify-center gap-7 md:gap-8 lg:gap-4 lg:justify-between lg:mt-18 sm:mt-10 md:mt-14 mt-8 xl:mt-20 pt-1">
              {/* MAP FUNCTION */}
              {activeCards.map((data) => (
                <div key={data.Id}>
                  <div className="border-[#C4C4C4] duration-300 ease-linear hover:scale-105 border-[1.5px] rounded-[15px] pt-6 md:pt-[34px] pr-5 md:pr-[29px] pb-6 md:pb-12 pl-5 md:pl-[35px] max-w-[400px] mx-auto text-black font-poppins">
                    <h2 className="font-semibold lg:leading-6 text-[19px] sm:text-[23px] md:text-[25px] lg:text-[28px]">
                      {data.heading}
                    </h2>
                    <p className="text-[12px] font-normal lg:leading-[18px] w-[237px] mt-2 md:mt-3">
                      with all your customers via all conversation channels in
                      one central dashboard.
                    </p>
                    <p className="font-semibold text-[21px] sm:text-[30px] md:text-[32px] lg:text-[40px] xl:text-[42px] lg:leading-8 mt-3 md:mt-7">
                      {data.pricing}
                    </p>
                    <p className="text-[14px] font-light pt-2 md:pt-3">
                      {data.para}
                    </p>
                    <button className="lg:mt-8 mt-4 sm:mt-6 border-[2px] border-black bg-white rounded-[12px] w-full py-2 lg:leading-[30px] hover:border-transparent hover:bg-[#B00000] hover:text-white transition-all ease-linear duration-300">
                      Choose this Plan
                    </button>
                    <div className="text-[15px] sm:text-[16px] font-inter font-bold text-[#808080] md:leading-6">
                      <div className="flex items-center mt-4 sm:mt-6 md:mt-[35px]">
                        <RightIcon />
                        <p className="ms-6">{data.subtitle}</p>-all
                      </div>
                      <div className="flex items-center mt-3 sm:mt-4">
                        <RightIcon />
                        <p className="ms-6">{data.bandwidth}</p>
                      </div>
                      <div className="flex items-center mt-3 sm:mt-4">
                        <RightIcon />
                        <p className="ms-6">{data.accounts}</p>
                      </div>
                      <div className="flex items-center mt-3 sm:mt-4">
                        <RightIcon />
                        <p className="ms-6">Unlimited Database</p>
                      </div>
                      <div className="flex items-center mt-3 sm:mt-4">
                        <RightIcon />
                        <p className="ms-6">{data.subdomain}</p>
                      </div>
                      <div className="flex items-center mt-3 sm:mt-4">
                        <RightIcon />
                        <p className="ms-6">{data.parkdomain}</p>
                      </div>
                      <div className="flex items-center mt-3 sm:mt-4">
                        <RightIcon />
                        <p className="ms-6">{data.websites}</p>
                      </div>
                      <div className="flex items-center mt-3 sm:mt-4">
                        <RightIcon />
                        <p className="ms-6">Free SSL</p>
                      </div>
                      <div className="flex items-center mt-3 sm:mt-4">
                        <RightIcon />
                        <p className="ms-6">Softaculous</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LemonWares;
