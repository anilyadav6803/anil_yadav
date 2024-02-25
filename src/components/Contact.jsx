import React from "react";
import { VscCallOutgoing } from "react-icons/vsc";

const Contact = () => {
  return (
    <div className="w-full p-10  h-full bg-black justify-center items-center bg-fixed overflow-x-hidden   ">
      <div className=" md:ml-56 md:inline-flex md:gap-96 ">
        <div className="ml-3  ">
          <h1 className="text-white text-[38px] font-bold  ">
            Have any project in mind ?
          </h1>
          <p className="w-[550px] h-[25px] text-zinc-500 text-base font-normal leading-7">
            Feel free to contact me or just say friendly hello!
          </p>
        </div>

        <div className="w-[200px] ml-3 h-[54px] px-7 py-[18px] bg-green-700 justify-start items-start gap-2.5 mt-8 flex-col md:inline-flex">
         <a href="tel:9310718093">
         <div className="text-white text-lg font-bold font-['Inter'] gap-3 flex leading-[18px]">
            Contact Me
            <VscCallOutgoing/>
          </div>
         </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
