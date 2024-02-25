import React from "react";

const Footer = () => {
  return (
    <section className=" w-full h-full justify-center items-center overflow-x-hidden bg-black">
      <div>
        <div className="w-full p-10 ml-3 mb-10 md:ml-56 h-[17px] justify-start items-start gap-8 md:gap-[700px] leading-10 md:flex">
          <div className="">
            <span className="text-white  text-sm font-normal font-['Inter']">
              Design and develop by
            </span>

            <span className="text-green-700  text-sm font-normal font-['Inter']">
              Anil yadav
            </span>
          </div>
          <div className="text-white text-sm font-normal font-['Inter']">
            Copyright ©2024
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
