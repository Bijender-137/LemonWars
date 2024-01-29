import React, { useState } from "react";
import backToTop from "../assets/images/webp/back-to-top.webp";
const BackToTop = () => {
  const [visible, setvisible] = useState(true);
  const onTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setvisible(false);
    } else {
      setvisible(true);
    }
  });
  return (
    <div className="relative z-10 mt-[-20px]">
      <div className="z-10 h-[20px] w-[20px]">
        <img
          src={backToTop}
          height={40}
          onClick={() => onTop()}
          className={
            visible
              ? "hidden"
              : "block sm:end-[40px] !h-[60px] cursor-pointer end-1 sm:bottom-[40px] hover:shadow-black hover:shadow-md rounded-full bottom-1 fixed hover:scale-90 transition-all ease-linear"
          }
        />
      </div>
    </div>
  );
};

export default BackToTop;
