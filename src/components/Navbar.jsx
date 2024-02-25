import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar...");
    setToggle((prevToggle) => {
      const newToggle = !prevToggle;
      console.log("New toggle state:", newToggle);
      return newToggle;
    });
  };
  return (
    <div className="w-full h-[74px] px-[123px] py-[18px] justify-center items-center gap-48 lg:gap-[500px] flex  bg-black  overflow-x-hidden overflow-y-hidden ">
      <div className=" ml-[-15px]  lg:ml-[123px] justify-center items-center border flex-col  ">
        <div
          className="text-white  text-2xl font-bold font-['Inter'] lg:text-start justify-center items-start
        "
        >
          Anil Yadav<span className="text-green-700">.</span>
        </div>
      </div>
      <div className="flex">
        <div className="text-white  navbar-center hidden lg:flex ">
          <div>
            <ul className=" flex gap-10 mt-3  ">
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#Service">
                <li>Service</li>
              </a>
              <a href="#work">
                <li>Work</li>
              </a>
             
              
            </ul>
          </div>

          <div className="gap-10 ml-10 px-4 py-2.5 border border-green-700 justify-start items-start  flex ">
           <a href="tel:9310718093"> <button>Contact</button></a>
          </div>
        </div>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <MdClose
              color="red"
              className="w-[28px] h-[28px] 
        object-contain"
              onClick={toggleSidebar}
            />
          ) : (
            <RiMenu3Fill
              color="red"
              className="w-[28px] h-[28px]  object-contain"
              onClick={toggleSidebar}
            />
          )}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-lg `}
        >
          <ul className="list-none  text-white rounded-sm bg-slate-600    justify-end items-center flex-1">
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#service">
              <li>Service</li>
            </a>
            <a href="#work">
              <li>Work</li>
            </a>
          
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
