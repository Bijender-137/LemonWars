import React from "react";
import { Whatsapp } from "./common/Icons";
import LeftIconTrangel from "../assets/images/svg/img_left_icon_red.svg";
import RightIconTop from "../assets/images/svg/mg_right_icon_top.svg";
import RightIconBottom from "../assets/images/svg/img_right_icon_bottom.svg";
const MakeWebsite = () => {
  return (
    <>
      <div id="contact" className="xl:pt-32 pt-20">
        <div className="container xl:px-[90px] sm:px-6 md:px-20">
          <div className="bg-[#F7FAFE] py-12 lg:py-16 xl:py-20 relative rounded-[16px]">
            <img
              className="absolute bottom-24 left-[-15px] hidden sm:block"
              src={LeftIconTrangel}
              alt="LeftIconTrangel"
            />
            <img
              className="absolute left-[35%] top-0 hidden sm:block"
              src={RightIconTop}
              alt="RightIconTop"
            />
            <img
              className="absolute right-[-20px] bottom-10 hidden sm:block"
              src={RightIconBottom}
              alt="RightIconBottom"
            />
            <h2 className="font-poppins font-semibold text-[#2e2e2e] lg:leading-[88px] fs_6xl text-center px-3">
              We're here to make your <span className="lg:block"></span> website
              awesome.
            </h2>
            <div className="flex justify-center mt-10 mb-2">
              <button className="bg_red w-[208px] flex justify-center gap-2 py-3 px-4 rounded-[8px] text-white text-[14px] font-normal lg:leading-6 hover:bg-black transition-all ease-in-out duration-300">
                <Whatsapp />
                Get in touch with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeWebsite;
