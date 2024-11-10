import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='w-full h-[30vw] bg-black p-[0.1px]'>
      <div className="w-[100%] h-[5vw] bg-white flex items-center justify-around">
        <h1 className='text-xl font-medium'>Our Social Networks</h1>
        <a className='text-2xl hover:scale-150 duration-500' href=""><MdEmail/></a>
        <a className='text-2xl hover:scale-150 duration-500' href=""><FaGithub/></a>
        <a className='text-2xl hover:scale-150 duration-500' href=""><GrInstagram/></a>
        <a className='text-2xl hover:scale-150 duration-500' href=""><FaLinkedinIn/></a>
        <a className='text-2xl hover:scale-150 duration-500' href=""><FaFacebookF/></a>
      </div>
      <div className="bg-pink-200 w-full h-[20vw] flex p-[0.1px]">
        <div className="sidebar w-[30vw] h-[20vw] bg-yellow-200">
            <h4 className='mt-8 ml-10'>First Product</h4>
            <h4 className='mt-8 ml-10'>First Product</h4>
            <h4 className='mt-8 ml-10'>First Product</h4>
            <h4 className='mt-8 ml-10'>First Product</h4>
            <h4 className='mt-8 ml-10'>First Product</h4>
        </div>
        <div className="middlebar w-[30vw] h-[20vw] bg-blue-300 ml-[20vw]"></div>
        <div className="leftbar w-[30vw] h-[20vw] bg-red-200 ml-[20vw]"></div>
      </div>
      <div className="w-full h-[5vw] bg-pink-400 flex items-center justify-center">
      <AiOutlineCopyright/>
        <h1 className=''> All Right Reserved to LEPSES</h1>
      </div>
      
    </div>
  )
}

export default Footer
