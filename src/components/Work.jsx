import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import hoobank from "../assets/hoobank.png";
import rozar from "../assets/rozar.png";
import sound from "../assets/sound.png";
import gallery from "../assets/gallery.png"
const Work = () => {
  return (
    <section className="w-full h-fulll bg-zinc-800">
      <div className="justify-center items-center md:flex md:gap-96 ">
        <div className="w-[300px] h-full p-10 md:ml-6 ">
          <div className="flex ">
            <div className="w-[50px] h-[0px] mt-3 border-2 border-green-700"></div>
            <div className="text-green-700 text-xl font-bold font-['Inter']">
              Recent Work
            </div>
          </div>
          <h1 className="text-white text-2xl font-['Inter']">
            Some of my favorite projects.
          </h1>
        </div>

        <div>
          <a href="https://github.com/anilyadav6803?tab=repositories">
            <div className="w-[140px] ml-16 h-[38px] px-4 py-2.5 border border-green-700 justify-start items-start mr-2 inline-flex">
              <div className="text-white text-sm font-bold font-['Inter'] leading-[18px]">
                View All Project
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* project section */}
      <div className="md:flex justify-center items-center ">
        <div className="p-3">
          <a href="https://github.com/anilyadav6803/web_bank?tab=readme-ov-file">
            <img
              src={hoobank}
              className="w-[400px] h-[268px] md:w-[550px] md:h-[368px] bg-black bg-opacity-20"
            />
            <h1 className="text-white text-[28px] font-bold font-['Inter'] ">
              Hoobank - secure payment interface
            </h1>
            <a href="https://github.com/anilyadav6803/web_bank?tab=readme-ov-file">
              <div className="inline-flex">
                <h3 className="text-green-700 text-xl font-medium font-['Inter']">
                  See project
                </h3>
                <GoArrowUpRight className="text-green-700 h-6 w-6  " />
              </div>
            </a>
          </a>
        </div>
        <div className="p-3">
          <a href="https://github.com/anilyadav6803/razerpayclone">
            <img
              src={rozar}
              className="w-[400px] h-[268px] md:w-[550px] md:h-[368px] bg-black bg-opacity-20"
            />
            <h1 className="text-white text-[28px] font-bold font-['Inter'] ">
              RozarPay Clone
            </h1>
            <a href="https://github.com/anilyadav6803/razerpayclone">
              <div className="inline-flex">
                <h3 className="text-green-700 text-xl font-medium font-['Inter']">
                  See project
                </h3>
                <GoArrowUpRight className="text-green-700 h-6 w-6  " />
              </div>
            </a>
          </a>
        </div>
        <div className="p-3">
          <a href="https://github.com/anilyadav6803/SoundDZing">
            <img
              src={sound}
              className="w-[400px] h-[268px] md:w-[550px] md:h-[368px] bg-black bg-opacity-20"
            />
            <h1 className="text-white text-[28px] font-bold font-['Inter'] ">
              soundDzing(under process)
            </h1>
            <a href="https://github.com/anilyadav6803/SoundDZing">
              <div className="inline-flex">
                <h3 className="text-green-700 text-xl font-medium font-['Inter']">
                  See project
                </h3>
                <GoArrowUpRight className="text-green-700 h-6 w-6  " />
              </div>
            </a>
          </a>
        </div>
        <div className="p-3">
          <a href="https://github.com/anilyadav6803/My_studio">
            <img
              src={gallery}
              className="w-[400px] h-[268px] md:w-[550px] md:h-[368px] bg-black bg-opacity-20"
            />
            <h1 className="text-white text-[28px] font-bold font-['Inter'] ">
              Photo Gallery
            </h1>
            <a href="https://github.com/anilyadav6803/My_studio">
              <div className="inline-flex">
                <h3 className="text-green-700 text-xl font-medium font-['Inter']">
                  See project
                </h3>
                <GoArrowUpRight className="text-green-700 h-6 w-6  " />
              </div>
            </a>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
