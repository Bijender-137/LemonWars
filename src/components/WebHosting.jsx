import React from "react";
import PanelImg from "../assets/images/webp/Panel_img.webp";
import SecuredImunify from "../assets/images/webp/secured_imunify.webp";
import LiteSpeed from "../assets/images/webp/litespeed_img.webp";
import SoftaColor from "../assets/images/webp/softcular.webp";
import WordPress from "../assets/images/webp/word_press_img.webp";
import CloudFair from "../assets/images/webp/cloudfare_img.webp";
import UptimeImg from "../assets/images/webp/uptime_img.webp";
import BlazingHosting from "../assets/images/webp/blazing_hosting_img.webp";
import SslCertificate from "../assets/images/webp/ssl_certificates.webp";
import SupportImg from "../assets/images/webp/services_img.webp";
const WebHosting = () => {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="lg:pl-14 lg:pr-16 xl:pl-18 xl:pr-[70px] pt-20 pb-1">
            <div className="lg:flex pb-2">
              <div className="lg:w-1/2 text-center lg:text-start lg:pe-4 xl:pe-0">
                <h2 className="font-extrabold font-poppins color_light_black fs_4xl xl:leading-[64px]">
                  True Cloud Web Hosting
                </h2>
                <p className="fs_sm font-inter font-normal sm:px-2 lg:px-0 color_light_black lg:max-w-[575px] xl:leading-[32px] pt-4 xl:pt-6">
                  True Cloud Web Hosting. All of the hosting packages we offer
                  are deployed instantly on our SSD powered cloud. We don’t use
                  dedicated servers that operate on single pieces of hardware.
                  Our entire infrastructure is built to be reliable, secure, and
                  scalable.
                </p>
              </div>
              <div className="lg:w-1/2 w-full mt-6 xl:mt-4">
                <div className="grid items-center justify-items-center lg:justify-items-start grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                  <img
                    className="w-[100px] h-6 sm:h-[30px] sm:w-[140px] lg:mx-auto"
                    src={PanelImg}
                    alt="PanelImg"
                  />
                  <img
                    className="sm:w-[125px] sm:h-[50px] h-10 w-[100px] lg:mx-auto"
                    src={SecuredImunify}
                    alt="SecuredImunify"
                  />
                  <img
                    className="sm:w-[125px] w-[100px] sm:h-[53px] h-10 lg:mx-auto ps-1"
                    src={LiteSpeed}
                    alt="LiteSpeed"
                  />
                  <img
                    className="sm:w-[172px] w-[120px] sm:h-[92px] h-16 lg:mx-auto lg:mt-5"
                    src={SoftaColor}
                    alt="SoftaColor"
                  />
                  <img
                    className="sm:w-[168px] w-[120px] sm:h-[56px] h-11 lg:mx-auto lg:mt-5"
                    src={WordPress}
                    alt="WordPress"
                  />
                  <img
                    className="sm:w-[143px] w-[110px] h-[47px] lg:mx-auto lg:mt-5"
                    src={CloudFair}
                    alt="CloudFair"
                  />
                </div>
              </div>
            </div>
            {/* SECOND ROW */}
            <div className="flex flex-wrap xl:flex-nowrap xl:justify-between items-center justify-center xl:px-10 w-full pt-10 md:pt-14 lg:pt-20 xl:pt-28">
              <div className="px-4 lg:px-0 sm:mt-0 w-[340px] sm:w-1/2 sm:px-8 lg:w-4/12 xl:w-3/12 duration-200 hover:scale-105 text-center ">
                <img
                  className="w-[80px] md:w-[100px] mx-auto"
                  src={UptimeImg}
                  alt="UptimeImg"
                />
                <h3 className="text-black font-poppins text-base font-bold pt-3">
                  99.9% Uptime
                </h3>
                <p className="font-light text-black font-poppins text-[12px] sm:px-3 lg:px-6 pt-1">
                  We Keep Your Web build Online 24x7x365. Downtime not only
                  costs you lost visitors but also damages your reputation and
                  search engine rankings.
                </p>
              </div>
              <div className="px-4 lg:px-0 mt-6 sm:mt-0 w-[340px] sm:w-1/2 sm:px-8 lg:w-4/12 xl:w-3/12 duration-200 hover:scale-105 text-center">
                <img
                  className="w-[80px] md:w-[100px] mx-auto"
                  src={BlazingHosting}
                  alt="BlazingHosting"
                />
                <h3 className="text-black font-poppins text-base font-bold pt-3">
                  Blazing Fast Web Hosting
                </h3>
                <p className="font-light text-black font-poppins text-[12px] sm:px-3 lg:px-6 pt-1">
                  We Keep Your Web build Online 24x7x365. Downtime not only
                  costs you lost visitors but also damages your reputation and
                  search engine rankings.
                </p>
              </div>
              <div className="px-4 lg:px-0 mt-6 lg:mt-0 w-[340px] sm:w-1/2 sm:px-8 lg:w-4/12 xl:w-3/12 duration-200 hover:scale-105 text-center">
                <img
                  className="w-[80px] md:w-[100px] mx-auto"
                  src={SslCertificate}
                  alt="SslCertificate"
                />
                <h3 className="text-black font-poppins text-base font-bold pt-3">
                  Free SSL Certificates
                </h3>
                <p className="font-light text-black font-poppins text-[12px] sm:px-3 lg:px-6 pt-1">
                  We Keep Your Web build Online 24x7x365. Downtime not only
                  costs you lost visitors but also damages your reputation and
                  search engine rankings.
                </p>
              </div>
              <div className="px-4 lg:px-0 mt-6  w-[340px] sm:w-1/2 sm:px-8 lg:w-4/12 xl:w-3/12 duration-200 hover:scale-105 text-center xl:mt-0">
                <img
                  className="w-[80px] md:w-[100px] mx-auto"
                  src={SupportImg}
                  alt="SupportImg"
                />
                <h3 className="text-black font-poppins text-base font-bold pt-3">
                  24x7 Friendly Support
                </h3>
                <p className="font-light text-black font-poppins text-[12px] sm:px-3 lg:px-6 pt-1">
                  We Keep Your Web build Online 24x7x365. Downtime not only
                  costs you lost visitors but also damages your reputation and
                  search engine rankings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebHosting;
