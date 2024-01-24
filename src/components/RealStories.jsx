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
      <div className="container lg:px-14 xl:pr-[92px] xl:pl-[142px] pt-20 lg:pt-28 px-8 xl:pt-40">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="md:flex flex-col items-end">
              <div className="relative z-10">
                <h2 className="color_light_black font-inter fs_4xl font-extrabold xl:leading-[64px]">
                  Real Stories from <span className="md:block"></span> Real
                  Customers
                </h2>
                <img
                  className=" max-w-[50px] md:max-w-[80px] lg:max-w-[143px] top-0 left-[-25px] absolute md:top-[-20px] md:left-[-30px] lg:top-[-55px] lg:left-[-95px]"
                  src={QuateMark}
                  alt="QuateMark"
                />
                <p className="color_light_black font-inter fs_sm font-normal mt-2">
                  Get inspired by these stories.
                </p>
              </div>
              <div className="bg-white sm:max-w-[500px] sm:mx-auto md:mx-0 md:max-w-[350px] rounded-[8px] pt-4 pb-4 md:pb-10 lg:pb-16 xl:pb-24  pr-6 xl:pr-8 pl-8 xl:pl-16 shadow-md mt-6 hover:shadow-xl transition-all ease-in-out duration-300">
                <img className="max-w-[120px]" src={CliImg} alt="CliImg" />
                <div className="relative">
                  <p className="font-inter fs_xs text-black font-normal lg:leading-8 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                  <img
                    className="absolute top-0 left-[-25px]"
                    src={QuateGreenImg}
                    alt="QuateGreenImg"
                  />
                </div>
                <p className="font-bold fs_sm text-black font-inter color_light_black mt-6">
                  Floyd Miles
                </p>
                <p className="font-medium font-inter text-[14px] text-[#969BAB]">
                  Vice President, CLI
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-[30px]">
            <div className="bg-white sm:max-w-[500px] sm:mx-auto md:mx-0 md:max-w-[455px] rounded-[8px] pt-4 lg:pt-10 pb-3 pr-6 xl:pr-8 lg:pl-16 pl-8 shadow-md mt-6 hover:shadow-xl transition-all ease-in-out duration-300">
              <img
                className="max-w-[78px] h-[50px]"
                src={JpnlImg}
                alt="JpnlImg"
              />
              <div className="relative">
                <p className="font-inter fs_xs text-black font-normal lg:leading-8 mt-4 lg:max-w-[350px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elem
                </p>
                <img
                  className="absolute top-0 left-[-25px]"
                  src={QuateGreenImg}
                  alt="QuateGreenImg"
                />
              </div>
              <p className="font-bold fs_sm text-black font-inter color_light_black mt-6">
                Jane Cooper
              </p>
              <p className="font-medium font-inter text-[14px] text-[#969BAB]">
                CEO, JPNL
              </p>
            </div>
            <div className="bg-white  sm:max-w-[500px] md:max-w-[350px]  sm:mx-auto md:mx-0 rounded-[8px] pt-4 lg:pt-10 pb-4 lg:pb-8 pr-6 lg:pr-8 lg:pl-16 pl-8 shadow-md mt-6 lg:mt-8 hover:shadow-xl transition-all ease-in-out duration-300">
              <img
                className="max-w-[120px] h-[63px]"
                src={BrandingImg}
                alt="BrandingImg"
              />
              <div className="relative">
                <p className="font-inter fs_sm text-black font-normal lg:leading-8 mt-4 ">
                  LemonWares saved our time in Hosting my company page.
                </p>
                <img
                  className="absolute top-0 left-[-25px]"
                  src={QuateGreenImg}
                  alt="QuateGreenImg"
                />
              </div>
              <p className="font-bold fs_sm text-black font-inter color_light_black mt-6">
                Kristin Watson
              </p>
              <p className="font-medium font-inter text-[14px] text-[#969BAB]">
                Co-Founder, LeeveOn Branding
              </p>
            </div>
          </div>
        </div>
        {/* SECOND ROW IN THIS SECTION */}
        <div className="xl:mt-24 mt-12 lg:mt-16 pt-1 lg:flex justify-between">
          <div className="lg:w-1/2">
            <h2 className="font-inter fs_4xl color_light_black font-extrabold lg:leading-[64px]">
              We serve over 100 Nigerian Websites
            </h2>
            <p className="font-inter fs_sm font-normal color_light_black lg:leading-8 mt-2">
              Connect LemonWares with your favourite tools that
              <span className="lg:block"></span> you use daily and keep things
              on track.
            </p>
          </div>

          <div className="lg:w-1/2 lg:pl-20 mt-6 lg:mt-0">
            <div className="grid items-center w-full gap-8 xl:gap-14 grid-cols-2 sm:grid-cols-3  lg:grid-cols-3">
              <img
                className="max-w-[120px]"
                src={JpnlLongImg}
                alt="JpnlLongImg"
              />
              <img className="max-w-[120px]" src={KoraneImg} alt="KoraneImg" />
              <img className="max-w-[120px]" src={NadineImg} alt="NadineImg" />
              <img
                className="max-w-[120px]"
                src={BrandingLongImg}
                alt="BrandingLongImg"
              />
              <img className="max-w-[120px]" src={JangoImg} alt="JangoImg" />
              <img
                className="max-w-[120px]"
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
