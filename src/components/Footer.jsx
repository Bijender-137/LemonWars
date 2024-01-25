import React from "react";
import FooterLogo from "../assets/images/webp/footer_logo.webp";
import { HeartIcon } from "./common/Icons";
const Footer = () => {
  return (
    <>
      <div id="services" className="bg_red mt-20 xl:mt-28">
        <div className="container">
          <div className="py-10 lg:pt-12 lg:pl-[60px]  lg:pb-12 xl:pt-16 xl:pl-[104px]  xl:pb-20">
            <div className="xl:flex">
              <div className="xl:w-1/3">
                <a href="#">
                  <img
                    className="sm:max-w-[120px] h-16 sm:h-[80px] max-w-[100px]"
                    src={FooterLogo}
                    alt="footer_logo"
                  />
                </a>
                <p className="font-inter font-normal lg:leading-8 color_light_e6 lg:max-w-[700px] xl:max-w-[296px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elem
                </p>
              </div>
              <div className="xl:w-2/3 pt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-between mt-6">
                  <div>
                    <ul>
                      <li className="font-bold font-inter text-white fs_xs lg:leading-6">
                        Service
                      </li>
                    </ul>
                    <li className="lg:mt-6 mt-4">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Domain
                      </a>
                    </li>
                    <li className="lg:mt-6 mt-3">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Shared Hosting
                      </a>
                    </li>
                    <li className="lg:mt-6 mt-3">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Cloud Hosting
                      </a>
                    </li>
                    <li className="lg:mt-6 mt-3">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Private Hosting
                      </a>
                    </li>
                  </div>
                  <div>
                    <ul>
                      <li className="font-bold font-inter text-white fs_xs lg:leading-6 ">
                        Hosting
                      </li>
                    </ul>
                    <li className="lg:mt-6 mt-4">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Cheap Hosting
                      </a>
                    </li>
                    <li className="lg:mt-6 mt-3">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Hosting Wordpress
                      </a>
                    </li>
                    <li className="lg:mt-6 mt-3">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Email Hosting
                      </a>
                    </li>
                    <li className="lg:mt-6 mt-3">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Hosting Unlimited
                      </a>
                    </li>
                  </div>
                  <div className="mt-6 sm:mt-0">
                    <ul>
                      <li className="font-bold font-inter text-white fs_xs lg:leading-6">
                        Company
                      </li>
                    </ul>
                    <li className="lg:mt-6 mt-4">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        About
                      </a>
                    </li>
                    <li className="lg:mt-6 mt-3">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Career
                      </a>
                    </li>
                    <li className="lg:mt-6 mt-3">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Contact Us
                      </a>
                    </li>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <ul>
                      <li className="font-bold font-inter text-white fs_xs lg:leading-6">
                        Help
                      </li>
                    </ul>
                    <li className="lg:mt-6 mt-4">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="lg:mt-6 mt-3">
                      <a
                        href="#"
                        className="fs_xs color_light_e6 font-normal font-inter lg:leading-8 after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                      >
                        Help support
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <p className="sm:text-[16px] text-[11px] font-inter font-normal color_light_e6 lg:mt-16 mt-10 xl:mt-24 flex items-center">
              Built by Jeremiah with
              <span className="px-1">
                <HeartIcon />
              </span>
              in Lagos. Copyright 2021
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
