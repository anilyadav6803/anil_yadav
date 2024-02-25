import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";


const Media = () => {
  return (
  <section className='w-full p-3  h-full justify-center items-start bg-black overflow-x-hidden'>
    <div className='text-green-700 justify-center    ml-10 gap-10  flex '>
      <a href='https://www.instagram.com/anil_yadav6803/'><AiFillInstagram   className="w-[50px] h-[50px]"/></a>
      <a href='https://github.com/anilyadav6803'><IoLogoGithub className="w-[50px] h-[50px]"/></a>
      <a href='https://www.linkedin.com/in/anil-yadav-97a980227/'><IoLogoLinkedin className="w-[50px] h-[50px]"/></a>
      <a href='https://twitter.com/anilyadav6803'><FaSquareXTwitter className="w-[50px] h-[50px]"/></a>
    </div>
  </section>
  )
}

export default Media