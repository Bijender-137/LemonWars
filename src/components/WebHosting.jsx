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
      <div>
        <div className="container">
          <div className="lg:pl-14 lg:pr-20 xl:pl-18 xl:pr-20 pt-20 pb-1">
            <div className="lg:flex pb-3">
              <div className="lg:w-1/2">
                <h2 className="font-extrabold font-poppins color_light_black fs_4xl xl:leading-[64px]">
                  True Cloud Web Hosting
                </h2>
                <p className="fs_sm font-inter font-normal color_light_black max-w-[800px] lg:max-w-[575px] xl:leading-[32px] pt-4 xl:pt-6">
                  True Cloud Web Hosting. All of the hosting packages we offer
                  are deployed instantly on our SSD powered cloud. We don’t use
                  dedicated servers that operate on single pieces of hardware.
                  Our entire infrastructure is built to be reliable, secure, and
                  scalable.
                </p>
              </div>
              <div className="lg:w-1/2 w-full mt-6 xl:mt-4">
                <div className="grid items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                  <img
                    className="w-[140px] lg:mx-auto"
                    src={PanelImg}
                    alt="PanelImg"
                  />
                  <img
                    className="w-[125px] lg:mx-auto"
                    src={SecuredImunify}
                    alt="SecuredImunify"
                  />
                  <img
                    className="w-[125px] lg:mx-auto ps-1"
                    src={LiteSpeed}
                    alt="LiteSpeed"
                  />
                  <img
                    className="w-[172px] lg:mx-auto lg:mt-5"
                    src={SoftaColor}
                    alt="SoftaColor"
                  />
                  <img
                    className="w-[168px] lg:mx-auto lg:mt-5"
                    src={WordPress}
                    alt="WordPress"
                  />
                  <img
                    className="w-[143px] lg:mx-auto lg:mt-5"
                    src={CloudFair}
                    alt="CloudFair"
                  />
                </div>
              </div>
            </div>
            {/* SECOND ROW */}
            <div className="flex items-center pt-10 md:pt-14 lg:pt-20 xl:pt-28">
              <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
                <div className="text-center">
                  <img
                    className="w-[100px] mx-auto"
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
                <div className="text-center">
                  <img
                    className="w-[100px] mx-auto"
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
                <div className="text-center">
                  <img
                    className="w-[100px] mx-auto"
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
                <div className="text-center">
                  <img
                    className="w-[100px] mx-auto"
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
      </div>
    </>
  );
};

export default WebHosting;
