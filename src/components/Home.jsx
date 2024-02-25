import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";


const Home = () => {
  return (
    <section className="flex   overflow-x-hidden sm:flex-col  bg-black  ">
   <div className="mt-14 ml-3 sm:ml-72  w-[800px] justify-center items-center  ">
    <div className=" flex ">
      <h1 className="text-green-700 text-[30px]  sm:text-[30px] font-bold font-['Inter'] ">Hello, I'm Anil Yadav <br></br> <span className="text-white text-[60px] sm:text-[88px] font-bold font-['Inter'] leading-[64px] sm:leading-[94px] ">Web Developer</span></h1>
    </div>
    <div className="leading-7 mt-10">
      <p className="text-zinc-500 sm:w-[600px]" >As a beginner web developer, your journey involves learning the foundational skills <br/>  necessary to build and maintain websites. Web development encompasses creating visually appealing, user-friendly websites that function efficiently across various devices.</p>
    </div>
    <div className="mt-10 mb-10 inline-flex gap-9  ">
       <a href="mailto:anilyadav6803@gmail.com"><button className="text-white w-[136px] h-[54px] px-7 rounded-xl py-[18px] bg-green-700 justify-start items-start gap-2.5 inline-flex">Email me</button></a>
      <div className="mt-3 flex  ">
      <MdOutlineFileDownload color="white " className="w-[25px] h-[25px] cursor-pointer "/>
      <a href="https://drive.google.com/file/d/1tzflIoallnLT4NsdgXbyWjHC7uCulrvJ/view?usp=drive_link"><button className="text-zinc-500 text- font-bold font-['Inter'] leading-[18px]">Download CV</button></a>
      </div>
    </div>
   </div>
    </section>
  );
};

export default Home;
