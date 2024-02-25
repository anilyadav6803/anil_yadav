import React from "react";

const Service = (id ) => {
  return (
    <div className="w-full h-full  flex-col justify-start items-start  sm:inline-flex bg-black overflow-x-hidden ">
      <div className=" sm:ml-72 justify-start items-start gap-[30px] sm:flex sm:gap-72 ">
        <div className="text-white ml-3 mb-7 text-[46px] font-bold font-['Inter'] leading-[56px]">
          1+ years experience
          <br />
          working
        </div>
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-center items-center gap-2 flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-[50px] h-[0px] ml-3 border-2 border-green-700"></div>
              <div className="text-green-700 text-xl font-bold font-['Inter']">
                Services
              </div>
            </div>
          </div>
          <div className="w-[300px] ml-3 h-[41px] text-zinc-500 text-base font-normal font-['Inter']  ">
            Discover the best services I offer, designed to ensure the success
            of your project.
          </div>
        </div>
      </div>
      <div className="w-full ml-4 mt-10 md:ml-72  justify-between items-center flex-col mb-10   :inline-flex">
        <div className="flex-col justify-start items-start inline-flex ">
          <div className="px-[25px] py-[68px] bg-zinc-800 flex-col justify-start items-start gap-[6px] flex">
            <div className="w-[50px] h-[47px] relative">
              <div className="w-[30px] h-[30px] left-[20px] top-[17px] absolute bg-green-700 rounded-full"></div>
              <div className="w-[42px] h-[33.60px] left-0 top-0 absolute"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
              <div className="text-white text-[26px] font-bold font-['Inter'] leading-loose">
                Product design
              </div>
              <div className="w-[310px] text-zinc-500 text-base font-normal font-['Inter']">
                I offer innovative and attention-grabbing product design
                services. From initial ideation to implementation.
              </div>
            </div>
          </div>
          <div className="w-[360px] h-1.5 bg-green-700"></div>
        </div>
        <div className="flex-col justify-start items-start inline-flex">
          <div className="px-[25px] py-[68px] bg-zinc-800 flex-col justify-start items-start gap-[6px] flex">
            <div className="w-[50px] h-[47px] relative">
              <div className="w-[30px] h-[30px] left-[20px] top-[17px] absolute bg-green-700 rounded-full"></div>
              <div className="w-[41.25px] h-[33px] left-0 top-0 absolute"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
              <div className="text-white text-[26px] font-bold font-['Inter'] leading-loose">
                Frontend develop
              </div>
              <div className="w-[310px] text-zinc-500 text-base font-normal font-['Inter']">
                Specialize in responsive and interactive front-end development.
                With a deep understanding of HTML, CSS, and JS.
              </div>
            </div>
          </div>
          <div className="w-[360px] h-1.5 bg-green-700"></div>
        </div>
        <div className="flex-col justify-start items-start inline-flex ">
          <div className="px-[25px] py-[68px] bg-zinc-800 flex-col justify-start items-start gap-[6px] flex">
            <div className="w-[50px] h-[47px] relative">
              <div className="w-[30px] h-[30px] left-[20px] top-[17px] absolute bg-green-700 rounded-full"></div>
              <div className="w-[33px] h-[33px] left-0 top-0 absolute"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
              <div className="text-white text-[26px] font-bold font-['Inter'] leading-loose">
                Brand strategy
              </div>
              <div className="w-[310px] text-zinc-500 text-base font-normal font-['Inter']">
                I help design strong and captivating brand strategies. Through
                thorough research and market analysis.
              </div>
            </div>
          </div>
          <div className="w-[360px] h-1.5 bg-green-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
