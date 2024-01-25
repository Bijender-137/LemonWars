import React, { useState } from "react";
import WebHostingGirl from "../assets/images/webp/webhosting_girl_img.webp";
import RightIconTop from "../assets/images/svg/mg_right_icon_top.svg";
import RightIconBottom from "../assets/images/svg/img_right_icon_bottom.svg";
import Webhosting2 from "../assets/images/webp/small_screen_girl_img.webp";
const Hero = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div className="container">
        <div className="md:flex sm:px-4 md:px-0 lg:pl-14 lg:pr-20 xl:pl-28 xl:pr-[126px] pt-10 md:pt-14 xl:pt-20">
          <div className="md:w-1/2 md:pe-4 h-[280px] sm:h-[320px]">
            <div className="flex items-center justify-center md:justify-normal gap-6 after:content-[''] after:w-[262px] after:absolute after:h-[2px] after:bg-[#E5E5E5] after:bottom-0 relative after:rounded-[10px]">
              <div
                className={`cursor-pointer font-semibold text-[15px] font-poppins ${
                  activeTab === 1
                    ? "color_red border-b-2 border-[#b00000] z-10"
                    : "color_lightGray"
                }`}
                onClick={() => handleTabClick(1)}
              >
                Hosting
              </div>
              <div
                className={`cursor-pointer font-semibold text-[15px] font-poppins ${
                  activeTab === 2
                    ? "color_red border-b-2 border-[#b00000] z-10"
                    : "text-[#DBD9D9]"
                }`}
                onClick={() => handleTabClick(2)}
              >
                Domain
              </div>
              <div
                className={`cursor-pointer font-semibold text-[15px] font-poppins ${
                  activeTab === 3
                    ? "color_red border-b-2 border-[#b00000] z-10"
                    : "text-[#DBD9D9]"
                }`}
                onClick={() => handleTabClick(3)}
              >
                SEO
              </div>
              <div
                className={`cursor-pointer font-semibold text-[15px] font-poppins ${
                  activeTab === 4
                    ? "color_red border-b-2 border-[#b00000] z-10"
                    : "text-[#DBD9D9]"
                }`}
                onClick={() => handleTabClick(4)}
              >
                Email
              </div>
            </div>

            <h1 className="pt-[26px] text-[#2E2E2E] font-bold fs_6xl font-poppins text-center md:text-start xl:leading-[77px]">
              {activeTab === 1 && "Premium Web Hosting for Your Website"}
              {activeTab === 2 && "Premium Web Domain for Your Website"}
              {activeTab === 3 && "Premium SEO Services"}
              {activeTab === 4 && "Premium Email Services"}
            </h1>

            <p className="font-inter fs_xs color_gray pt-5 lg:pt-[34px] text-center md:text-start tracking-[0.8px]">
              Blazing fast web hosting for individuals and{" "}
              <span className="lg:block"></span> businesses of all sizes backed
              by 24x7x365 Support.
            </p>
            <div className="flex items-center justify-center md:justify-normal pt-5 md:pt-10 xl:pt-[60px]">
              <button
                type="button"
                className="text-[13px] sm:text-[14px] w-[160px] font-poppins font-normal text-white border border-transparent bg-[#B00000] hover:border-black hover:bg-black transition-all ease-linear duration-300 p-2 sm:p-3 rounded-[8px] buttons_shadow leading-[22px] "
              >
                Create an Account
              </button>
              <button
                type="button"
                className="text-[13px] sm:text-[14px] w-[160px] font-poppins font-normal text-black border border-black hover:bg-black hover:border-transparent hover:color_red transition-all ease-linear duration-300 p-2 sm:p-3 rounded-[8px] leading-[22px] buttons ml-3 sm:ml-6 hover:text-white"
              >
                Choose your plan
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="w-full pt-8 md:pt-0 relative">
              <img
                className="w-[400px] mx-auto hidden sm:block md:ms-auto md:mx-0 md:w-[390px] lg:w-[527px] xl:h-[504px] "
                src={WebHostingGirl}
                alt="WebHostingGirl"
              />
              <img
                className="w-[400px] sm:hidden mx-auto md:ms-auto md:mx-0 md:w-[400px] lg:w-[527px] xl:h-[504px] "
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
    </>
  );
};

export default Hero;
