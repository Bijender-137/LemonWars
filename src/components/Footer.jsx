import React from "react";
import FooterLogo from "../assets/images/webp/footer_logo.webp";
import { HeartIcon } from "./common/Icons";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div id="services" className="bg-[#B00000] mt-20 xl:mt-28">
        <div className="container text-[#E6E6E6] text-[15px] sm:text-[16px]">
          <div className="py-10 lg:py-12 lg:pl-[60px] xl:pt-16 xl:pl-[104px] xl:pb-20 font-inter">
            <div className="xl:flex">
              <div className="xl:w-1/3">
                {/* FOOTER LOGO */}
                <a href="#">
                  <img
                    loading="lazy"
                    className="sm:max-w-[120px] h-14 sm:h-[80px] max-w-[80px]"
                    src={FooterLogo}
                    alt="footer_logo"
                  />
                </a>
                <p className="font-normal lg:leading-8 lg:max-w-[700px] xl:max-w-[296px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elem
                </p>
              </div>
              {/* FOOTER SERVICES */}
              <div className="xl:w-2/3 pt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-between mt-6 xl:mt-0">
                  <div className="font-normal lg:leading-8">
                    <ul>
                      <li className="font-bold text-white lg:leading-6">
                        Service
                      </li>
                      <li className="xl:mt-6 mt-4">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Domain
                        </a>
                      </li>
                      <li className="xl:mt-6 mt-3">
                        <a
                          href="#"
                          className=" after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Shared Hosting
                        </a>
                      </li>
                      <li className="xl:mt-6 mt-3">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Cloud Hosting
                        </a>
                      </li>
                      <li className="xl:mt-6 mt-3">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Private Hosting
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="font-normal lg:leading-8">
                    <ul>
                      <li className="font-bold text-white lg:leading-6 ">
                        Hosting
                      </li>
                      <li className="xl:mt-6 mt-4">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Cheap Hosting
                        </a>
                      </li>
                      <li className="xl:mt-6 mt-3">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Hosting Wordpress
                        </a>
                      </li>
                      <li className="xl:mt-6 mt-3">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Email Hosting
                        </a>
                      </li>
                      <li className="xl:mt-6 mt-3">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Hosting Unlimited
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 sm:mt-0 font-normal lg:leading-8">
                    <ul>
                      <li className="font-bold text-white lg:leading-6">
                        Company
                      </li>

                      <li className="xl:mt-6 mt-4">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          About
                        </a>
                      </li>
                      <li className="xl:mt-6 mt-3">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Career
                        </a>
                      </li>
                      <li className="xl:mt-6 mt-3">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 md:mt-0 font-normal lg:leading-8 ">
                    <ul>
                      <li className="font-bold text-white lg:leading-6">
                        Help
                      </li>

                      <li className="xl:mt-6 mt-4">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          FAQ
                        </a>
                      </li>
                      <li className="xl:mt-6 mt-3">
                        <a
                          href="#"
                          className="after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#DEEAF9] after:start-[50%] hover:after:w-full hover:after:start-0 overflow-hidden relative after:top-5 after:rounded-full"
                        >
                          Help support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="sm:text-[16px] text-[11px] font-normal mt-10 xl:mt-24 flex items-center">
              Built by Jeremiah with
              <span className="px-[6px]">
                <HeartIcon />
              </span>
              in Lagos. Copyright {year}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
