import React from "react";
import QuateMark from "../assets/images/webp/Quote_Mark.webp";
import CliImg from "../assets/images/webp/cli_img.webp";
import JpnlImg from "../assets/images/webp/jpnl_img.webp";
import BrandingImg from "../assets/images/webp/branding_img.webp";
import QuateGreenImg from "../assets/images/svg/green_quate_mark_img.svg";
import JpnlLongImg from "../assets/images/webp/jpnl_2_img.webp";
import KoraneImg from "../assets/images/webp/koran_img.webp";
import NadineImg from "../assets/images/webp/nadine_img.webp";
import BrandingLongImg from "../assets/images/webp/branding_2_img.webp";
import JangoImg from "../assets/images/webp/jango_class_img.webp";
import CliLongImg from "../assets/images/webp/cli_2_img.webp";
const RealStories = () => {
  return (
    <>
      <div
        id="blogs"
        className="container lg:px-14 xl:pr-[92px] xl:pl-[142px] pt-20 lg:pt-28  xl:pt-40 font-inter"
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="md:flex flex-col lg:items-end">
              {/* REAL STORIES REAL CUSTOMERS */}
              <div className="relative z-10 text-[#18191F] sm:px-8 lg:px-0 ">
                <h2 className="text-[25px] sm:text-[35px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-extrabold lg:leading-[55px] md:leading-[48px] xl:leading-[64px]">
                  Real Stories from <span className="md:block"></span> Real
                  Customers
                </h2>
                <img
                  loading="lazy"
                  className=" max-w-[50px] md:max-w-[80px] lg:max-w-[115px] xl:max-w-[143px] top-[-20px] left-[-8px] absolute md:top-[-30px] md:left-[-0px] lg:top-[-60px] xl:top-[-80px] lg:left-[-55px] xl:left-[-80px]"
                  src={QuateMark}
                  alt="QuateMark"
                />
                <p className="text-[16px] sm:text-[18px] font-normal mt-2">
                  Get inspired by these stories.
                </p>
              </div>
              <div className="bg-white sm:max-w-[500px] sm:mx-auto md:mx-0 md:max-w-[350px] rounded-[8px] pt-4 pb-4 md:pb-10 lg:pb-16 xl:pb-24 pr-6 xl:pr-8 pl-8 xl:pl-16 shadow-realStory mt-7 hover:shadow-xl transition-all ease-linear duration-300">
                <img
                  width={120}
                  height={120}
                  className="max-w-[120px]"
                  src={CliImg}
                  alt="CliImg"
                />
                <div className="relative">
                  <p className=" text-[15px] sm:text-[16px] text-black font-normal lg:leading-8 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                  <img
                    loading="lazy"
                    className="absolute top-0 left-[-25px]"
                    src={QuateGreenImg}
                    alt="QuateGreenImg"
                  />
                </div>
                <p className="font-bold text-[16px] sm:text-[18px]  text-[#18191F] mt-6">
                  Floyd Miles
                </p>
                <p className="font-medium  text-[14px] text-[#969BAB]">
                  Vice President, CLI
                </p>
              </div>
            </div>
          </div>
          {/* CARDS */}
          <div className="md:w-1/2 md:pl-[30px]">
            <div className="bg-white sm:max-w-[500px] sm:mx-auto md:mx-0 md:max-w-[455px] rounded-[8px] pt-4 lg:pt-10 pb-3 pr-6 xl:pr-8 lg:pl-16 pl-8 shadow-realStory mt-7 hover:shadow-xl transition-all ease-linear duration-300">
              <img
                width={78}
                height={50}
                loading="lazy"
                className="max-w-[78px] h-[50px]"
                src={JpnlImg}
                alt="JpnlImg"
              />
              <div className="relative">
                <p className=" text-[15px] sm:text-[16px]  text-black font-normal lg:leading-8 mt-4 lg:max-w-[350px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elem
                </p>
                <img
                  loading="lazy"
                  className="absolute top-0 left-[-25px]"
                  src={QuateGreenImg}
                  alt="QuateGreenImg"
                />
              </div>
              <p className="font-bold text-[16px] sm:text-[18px]  text-[#18191F] mt-6">
                Jane Cooper
              </p>
              <p className="font-medium  text-[14px] text-[#969BAB]">
                CEO, JPNL
              </p>
            </div>
            <div className="bg-white sm:max-w-[500px] md:max-w-[350px]  sm:mx-auto md:mx-0 rounded-[8px] pt-4 lg:pt-10 pb-4 lg:pb-8 pr-6 lg:pr-8 lg:pl-16 pl-8 shadow-realStory mt-7 lg:mt-8 hover:shadow-xl transition-all ease-linear duration-300">
              <img
                width={120}
                height={63}
                loading="lazy"
                className="max-w-[120px] h-[63px]"
                src={BrandingImg}
                alt="BrandingImg"
              />
              <div className="relative">
                <p className=" text-[16px] sm:text-[18px] text-black font-normal lg:leading-8 mt-4 ">
                  LemonWares saved our time in Hosting my company page.
                </p>
                <img
                  loading="lazy"
                  className="absolute top-0 left-[-25px]"
                  src={QuateGreenImg}
                  alt="QuateGreenImg"
                />
              </div>
              <p className="font-bold text-[16px] sm:text-[18px]  text-[#18191F] mt-6">
                Kristin Watson
              </p>
              <p className="font-medium  text-[14px] text-[#969BAB]">
                Co-Founder, LeeveOn Branding
              </p>
            </div>
          </div>
        </div>
        {/* We serve over 100 Nigerian Websites */}
        <div className="xl:mt-24 mt-12 lg:mt-16 pt-2 lg:flex justify-between">
          <div className="lg:w-1/2 text-center lg:text-start text-[#18191F]">
            <h2 className=" text-[25px] sm:text-[35px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-extrabold lg:leading-[64px]">
              We serve over 100 Nigerian Websites
            </h2>
            <p className=" text-[16px] sm:text-[18px] font-normal lg:leading-8 mt-2">
              Connect LemonWares with your favourite tools that
              <span className="lg:block"></span> you use daily and keep things
              on track.
            </p>
          </div>
          {/* NIGERIAN WEBSITES */}
          <div className="lg:w-1/2 lg:pl-6 xl:pl-20">
            <div className="grid items-center justify-items-center lg:justify-items-start w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
              <img
                width={120}
                height={120}
                loading="lazy"
                className="max-w-[100px] h-[80px] sm:max-w-[120px] sm:h-[120px]"
                src={JpnlLongImg}
                alt="JpnlLongImg"
              />
              <img
                width={120}
                height={120}
                loading="lazy"
                className="max-w-[100px] h-[80px] sm:max-w-[120px] sm:h-[120px]"
                src={KoraneImg}
                alt="KoraneImg"
              />
              <img
                width={120}
                height={120}
                loading="lazy"
                className="max-w-[100px] h-[80px] sm:max-w-[120px] xl:h-[120px]"
                src={NadineImg}
                alt="NadineImg"
              />
              <img
                width={120}
                height={120}
                loading="lazy"
                className="max-w-[100px] h-[80px] sm:max-w-[120px] sm:h-[120px]"
                src={BrandingLongImg}
                alt="BrandingLongImg"
              />
              <img
                width={120}
                height={120}
                loading="lazy"
                className="max-w-[100px] h-[80px] sm:max-w-[120px] sm:h-[120px]"
                src={JangoImg}
                alt="JangoImg"
              />
              <img
                width={120}
                height={120}
                loading="lazy"
                className="max-w-[100px] h-[80px] sm:max-w-[120px] sm:h-[120px]"
                src={CliLongImg}
                alt="CliLongImg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealStories;
