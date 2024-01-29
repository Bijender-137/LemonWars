import React, { useState } from "react";
import Pagelogo from "../assets/images/webp/page_logo.webp";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import { MobileIcon } from "./common/Icons";
const Header = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div>
        <nav className="pt-6 xl:pt-10">
          <div className="container mx-auto">
            <div className="flex justify-between items-center lg:pl-14  lg:pr-20 xl:pl-28 xl:pr-44">
              <div className="flex items-center">
                {/* NAV LOGO */}
                <a href="#">
                  <img loading="lazy"
                    src={Pagelogo}
                    alt="Pagelogo"
                    className="md:max-w-[90px] md:h-[60px] sm:h-[40px] max-w-[50px] h-[40px]"
                  />
                </a>
                <ul className="hidden lg:flex">
                  <li className="ps-8 xl:ps-16">
                    <a
                      href="#services"
                      className="text-[15px] font-semibold text-black font-poppins after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#B00000] after:start-[50%] hover:after:w-[80%] hover:after:start-[10%] overflow-hidden relative after:top-6 after:rounded-[10px]"
                    >
                      Our Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:mr-12 xl:mr-24">
                <ul
                  className={`flex gap-5 lg:gap-8 items-center justify-center z-20  flex-col lg:flex-row min-h-full lg:min-h-fit bg-white fixed lg:relative lg:bg-transparent start-[-100%] lg:start-0 top-0 w-full transition-all duration-300 ease-linear ${
                    head ? "" : "!left-0"
                  }`}
                >
                  <li className="lg:hidden">
                    <a
                      href="#services"
                      className="text-[20px] sm:text-[24px] lg:text-[15px] md font-semibold text-black font-poppins after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#B00000] after:start-[50%] hover:after:w-[80%] hover:after:start-[10%] overflow-hidden relative after:top-6 after:rounded-[10px]"
                      onClick={showUl}
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-black text-[20px] sm:text-[24px] lg:text-[15px] md font-semibold font-poppins after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#B00000] after:start-[50%] hover:after:w-[80%] hover:after:start-[10%] overflow-hidden relative after:top-6 after:rounded-[10px]"
                      onClick={showUl}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black text-[20px] sm:text-[24px] lg:text-[15px] md font-semibold font-poppins after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#B00000] after:start-[50%] hover:after:w-[80%] hover:after:start-[10%] overflow-hidden relative after:top-6 after:rounded-[10px]"
                      href="#blogs"
                      onClick={showUl}
                    >
                      Blog&News
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black text-[20px] sm:text-[24px] lg:text-[15px] md font-semibold font-poppins after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#B00000] after:start-[50%] hover:after:w-[80%] hover:after:start-[10%] overflow-hidden relative after:top-6 after:rounded-[10px]"
                      href="#contact"
                      onClick={showUl}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="lg:hidden">
                    <a
                      className="text-black text-[20px] sm:text-[24px] lg:text-[15px] md font-semibold font-poppins after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#B00000] after:start-[50%] hover:after:w-[80%] hover:after:start-[10%] overflow-hidden relative after:top-6 after:rounded-[10px]"
                      href="#account"
                      onClick={showUl}
                    >
                      Account
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                {/* CONTACT LOGO */}
                <ul className="items-center hidden lg:flex">
                  <li>
                    <a
                      className="text-black text-[15px] font-semibold font-poppins  after:content-[''] after:w-0 transition-all ease-linear after:duration-500 after:absolute after:h-[2px] after:bg-[#B00000] after:start-[50%] hover:after:w-[80%] hover:after:start-[10%]  overflow-hidden relative after:top-6 after:rounded-[10px]"
                      href="#account"
                      onClick={showUl}
                    >
                      Account
                    </a>
                  </li>
                  <li className="mx-[31px] hidden lg:flex">
                    <span className="h-5 w-[1px] bg_gray block"></span>
                  </li>
                  <li>
                    <a
                      target="blank"
                      href="tel:+2349067322844"
                      className="flex items-center"
                    >
                      <MobileIcon />
                      <span className="text-black font-semibold fs_xs font-poppins ps-[6px]">
                        +2349067322844
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div onClick={showUl} className="z-20 lg:hidden">
                <h3 className="text-black text-4xl">
                  {head ? <BiMenu /> : <RxCross1 />}
                </h3>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
