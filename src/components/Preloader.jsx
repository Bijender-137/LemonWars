import React from "react";
export const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 3000);

  return (
    <div
      id="none"
      className="min-h-screen w-100 top-0 start-0 h-full w-full fixed bg-[#B00000] z-50"
    >
      <div className="flex justify-center items-center min-h-screen">
        <div class="w-full bg-[#B00000]">
          <svg className="preloader_text w-full h-full">
            <text
              className=" font-poppins font-extrabold text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px]"
              x="50%"
              y="50%"
              dy=".35em"
              text-anchor="middle"
            >
              LEMON WARS
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};
