import React, { useState } from "react";
import { LemonWars, Premium } from "./common/Helper";
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
      <div id="account">
        <div className="container">
          <div className="xl:px-40 lg:px-12 pt-20 xl:pt-32">
            <div className="text-center">
              <h2 className="text-black font-semibold font-poppins fs_5xl lg:leading-[60px]">
                Ready to get started with <span className="lg:block"></span>
                Lemon Wares?
              </h2>
              <p className="text-black font-poppins lg:leading-[25px] font-normal fs_lg pt-4 sm:pt-5 lg:pt-7 xl:pt-9">
                Choose the package that suits you
              </p>
              <div className="mt-6 xl:mt-14 sm:flex justify-center items-center">
                <p
                  className={`font-poppins fs_lg text-black lg:leading-[25px] font-normal cursor-pointer ${
                    !isYearly ? "" : ""
                  }`}
                  onClick={() => {
                    setIsYearly(false);
                  }}
                >
                  Monthly
                </p>
                <div className="sm:ms-8 my-4 sm:my-0">
                  <label
                    for="toggle"
                    class="flex justify-center sm:justify-normal items-center cursor-pointer border-0 w-full"
                  >
                    <div class="relative">
                      <input
                        type="checkbox"
                        id="toggle"
                        class="sr-only"
                        checked={isYearly}
                        onChange={handleToggleChange}
                      />
                      <div class="block bg_red w-[64px] sm:w-[90px] h-8 sm:h-12 rounded-full"></div>
                      <div class="dot absolute left-1 top-[6px] sm:top-2 bg-white max-w-5 h-5 sm:max-w-[30px] w-full sm:h-[30px] rounded-full transition"></div>
                    </div>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <p
                    className={`font-poppins fs_lg text-black lg:leading-[25px] font-normal ms-6 cursor-pointer ${
                      isYearly ? "" : ""
                    }`}
                    onClick={() => {
                      setIsYearly(true);
                    }}
                  >
                    Yearly
                  </p>
                  <p className="text-black text-[10px] bg-[#FFE87A] rounded-[8px] ms-4 py-[6px] px-2">
                    20% discount
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[856px] mx-auto flex after:content-[''] after:w-full after:absolute after:h-[4px] after:bg-[#E5E5E5] after:bottom-0 relative mt-6 lg:mt-10 md:mt-8 xl:mt-16 pt-2">
              <div
                className={`text-center w-[50%] cursor-pointer ${
                  activeTab === 1
                    ? "border-b-4 border-[#B00000] z-10 inline"
                    : ""
                }`}
                onClick={() => handleTabClick(1)}
              >
                <p className="fs_xxl font-poppins font-semibold relative">
                  Basic
                </p>
              </div>
              <div
                className={`text-center w-[50%] cursor-pointer ${
                  activeTab === 2 ? "border-b-4 border-[#B00000] z-10" : ""
                }`}
                onClick={() => handleTabClick(2)}
              >
                <p className="fs_xxl font-poppins font-semibold relative">
                  Premium
                </p>
              </div>
            </div>
            {/* CARDS */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6  lg:justify-between lg:mt-18 sm:mt-10 md:mt-14 mt-8 xl:mt-20 pt-1">
              {/* MAP FUNCTION */}
              {activeCards.map((data) => (
                <div key={data.Id}>
                  <div className="border-[#C4C4C4] border-[1.5px] rounded-[15px] shadow-md pt-6 md:pt-[34px] pr-5 md:pr-[29px] pb-6 md:pb-12 pl-5 md:pl-[35px] max-w-[300px] mx-auto">
                    <h2 className="font-poppins font-semibold lg:leading-6 fs_xl text-black">
                      {data.heading}
                    </h2>
                    <p className="font-poppins text-[12px] text-black font-normal lg:leading-[18px] w-[237px] mt-2 md:mt-3">
                      {data.description}
                    </p>
                    <p className="font-semibold font-poppins fs_2xl text-black lg:leading-8 mt-3 md:mt-7">
                      {data.pricing}
                    </p>
                    <p className="font-poppins text-[14px] font-light text-black pt-2 md:pt-3">
                      {data.para}
                    </p>
                    <button className="lg:mt-8 mt-4 sm:mt-6 border-[2px] border-black bg-white rounded-[12px] w-full py-2 lg:leading-[30px] hover:border-transparent hover:bg-[#B00000] hover:text-white transition-all ease-linear duration-300">
                      {data.button}
                    </button>
                    <div className="flex items-center mt-4 sm:mt-6 md:mt-[35px]">
                      {data.cardImage}
                      <p className="ms-6 font-inter font-bold color_gray md:leading-6">
                        {data.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-4">
                      {data.cardImage}
                      <p className="ms-6 font-inter font-bold color_gray md:leading-6">
                        {data.bandwidth}
                      </p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-4">
                      {data.cardImage}
                      <p className="ms-6 font-inter font-bold color_gray md:leading-6">
                        {data.accounts}
                      </p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-4">
                      {data.cardImage}
                      <p className="ms-6 font-inter font-bold color_gray md:leading-6">
                        {data.database}
                      </p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-4">
                      {data.cardImage}
                      <p className="ms-6 font-inter font-bold color_gray md:leading-6">
                        {data.subdomain}
                      </p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-4">
                      {data.cardImage}
                      <p className="ms-6 font-inter font-bold color_gray md:leading-6">
                        {data.parkdomain}
                      </p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-4">
                      {data.cardImage}
                      <p className="ms-6 font-inter font-bold color_gray md:leading-6">
                        {data.websites}
                      </p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-4">
                      {data.cardImage}
                      <p className="ms-6 font-inter font-bold color_gray md:leading-6">
                        {data.freessl}
                      </p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-4">
                      {data.cardImage}
                      <p className="ms-6 font-inter font-bold color_gray md:leading-6">
                        {data.softcolus}
                      </p>
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
