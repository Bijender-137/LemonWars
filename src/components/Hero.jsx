import React, { useState } from "react";
import WebHostingGirl from "../assets/images/webp/webhosting_girl_img.webp";
import RightIconTop from "../assets/images/svg/mg_right_icon_top.svg";
import RightIconBottom from "../assets/images/svg/img_right_icon_bottom.svg";
import Webhosting2 from "../assets/images/webp/small_screen_girl_img.webp";
import Header from "./Header";
const Hero = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <div className="md:flex sm:px-4 md:px-0 lg:pl-14 lg:pr-20 xl:pl-28 xl:pr-[126px] pt-10 md:pt-14 xl:pt-20">
            <div className="md:w-1/2 md:pe-4 h-[280px] sm:h-[320px]">
              <div className="flex items-center justify-center md:justify-normal gap-6 after:content-[''] after:w-[262px] after:absolute after:h-[2px] after:bg-[#E5E5E5] after:bottom-[-4px] relative after:rounded-[10px] text-[15px] font-poppins font-semibold">
                <div
                  className={`cursor-pointer relative font-semibold ${
                    activeTab === 1 ? "text-[#b00000] z-10" : "text-[#DBD9D9]"
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  Hosting
                  {activeTab === 1 && (
                    <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-4/5 h-[2px] bg-[#B00000]" />
                  )}
                </div>
                <div
                  className={`cursor-pointer relative ${
                    activeTab === 2 ? "text-[#b00000] z-10" : "text-[#DBD9D9]"
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  Domain
                  {activeTab === 2 && (
                    <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-4/5 h-[2px] bg-[#B00000]" />
                  )}
                </div>
                <div
                  className={`cursor-pointer relative ${
                    activeTab === 3 ? "text-[#b00000] z-10" : "text-[#DBD9D9]"
                  }`}
                  onClick={() => handleTabClick(3)}
                >
                  SEO
                  {activeTab === 3 && (
                    <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-4/5 h-[2px] bg-[#B00000]" />
                  )}
                </div>
                <div
                  className={`cursor-pointer relative ${
                    activeTab === 4 ? "text-[#B00000] z-10" : "text-[#DBD9D9]"
                  }`}
                  onClick={() => handleTabClick(4)}
                >
                  Email
                  {activeTab === 4 && (
                    <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-4/5 h-[2px] bg-[#B00000]" />
                  )}
                </div>
              </div>
              <h1 className="pt-[26px] text-[#2E2E2E] font-bold text-[25px] sm:text-[40px] md:text-[42px] lg:text-[46px] xl:text-[64px] font-poppins text-center md:text-start md:leading-[46px] lg:leading-[58px] xl:leading-[77px]">
                {activeTab === 1 && "Premium Web Hosting for Your Website"}
                {activeTab === 2 && "Premium Web Domain for Your Website"}
                {activeTab === 3 && "Premium SEO Services"}
                {activeTab === 4 && "Premium Email Services"}
              </h1>
              <p className="font-inter font-normal text-[15px] sm:text-[16px] text-[#808080] pt-5 lg:pt-[34px] text-center md:text-start tracking-[0.8px]">
                Blazing fast web hosting for individuals and
                <span className="lg:block"></span> businesses of all sizes
                backed by 24x7x365 Support.
              </p>
              <div className="flex items-center justify-center md:justify-normal pt-5 md:pt-10 xl:pt-[60px] font-poppins font-normal text-[13px] sm:text-[14px]">
                <button
                  type="button"
                  className="w-[160px] text-white border border-transparent bg-[#B00000] hover:border-black hover:bg-black transition-all ease-linear duration-300 p-2 sm:p-3 rounded-[8px] shadow-default lg:shadow-lg leading-[22px] "
                >
                  Create an Account
                </button>
                <button
                  type="button"
                  className="w-[160px] text-black border border-black hover:bg-black hover:border-transparent transition-all ease-linear duration-300 p-2 sm:p-3 rounded-[8px] leading-[22px] hover:shadow-default hover:lg:shadow-lg ml-3 sm:ml-6 hover:text-white"
                >
                  Choose your plan
                </button>
              </div>
            </div>
            {/* WEB HOSTING GIRL */}
            <div className="md:w-1/2">
              <div className="w-full pt-8 md:pt-0 relative">
                <img
                  loading="lazy"
                  className="w-[400px] mx-auto hidden sm:block md:ms-auto md:mx-0 md:w-[390px] lg:w-[527px] xl:h-[504px] "
                  src={WebHostingGirl}
                  alt="WebHostingGirl"
                />
                <img
                  loading="lazy"
                  className="w-[400px]  sm:hidden mx-auto md:ms-auto md:mx-0 md:w-[400px] lg:w-[527px] xl:h-[504px] "
                  src={Webhosting2}
                  alt="Webhosting2"
                />
                <img
                  className="absolute w-8 lg-w-[42px] hidden sm:block top-[12%] sm:right-[18%] md:right-[-5px] lg:right-[-18px]
                  "
                  src={RightIconTop}
                  alt="RightIconTop"
                />
                <img
                  className="absolute w-[40px] lg:w-[70px] hidden sm:block sm:right-[17%] bottom-[41px] md:right-[-5px] lg:right-[-25px]
                  "
                  src={RightIconBottom}
                  alt="RightIconBottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
