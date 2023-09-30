import React, { useState } from "react";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { CgMenuOreos } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
 const [openMenu, setOpenMenu] = useState(false);

 const handleMenu = () => {
  setOpenMenu(!openMenu);
 };

 return (
  <div className="sticky top-0 z-10 shadow-md w-full">
   <nav
    className="text-black body-font max-md:h-20"
    style={{ backdropFilter: "blur(10px)" }}
   >
    <div className="container mx-auto flex flex-wrap py-4 flex-col md:flex-row items-center">
     <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 max-md:justify-start max-md:left-2 ml-4 xl:ml-1 max-md:absolute">
      <FaLaptopCode className="w-10 h-10 text-white p-2 bg-[#5E17EB] rounded-full" />
      <span className="ml-3 text-xl">LearnCodeNest</span>
     </div>
     <div className="md:hidden absolute right-4">
      <button
       className="inline-flex items-center justify-center p-2 mr-2 focus:outline-none"
       onClick={handleMenu}
      >
       <span className="sr-only">Open main menu</span>
       {openMenu ? (
        <AiOutlineCloseCircle className="text-2xl" />
       ) : (
        <CgMenuOreos className="text-2xl" />
       )}
      </button>
     </div>
     <div
      className={`${
       openMenu ? "block" : "max-md:hidden"
      } md:mr-auto max-md:flex-col max-md:mt-6 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center max-md:space-y-3 max-md:bg-white max-md:w-full max-md:h-[12rem]`}
     >
      <Link
       href={"/"}
       className="mr-11 hover:text-[#F46530] duration-200 ease-in-out cursor-pointer text-black font-mono"
      >
       Home
      </Link>
      <Link
       href={"/about"}
       className="mr-11 hover:text-[#F46530] duration-200 ease-in-out cursor-pointer text-black font-mono"
      >
       About
      </Link>
      <Link
       href={"/courses"}
       className="mr-11 hover:text-[#F46530] duration-200 ease-in-out cursor-pointer text-black font-mono"
      >
       Courses
      </Link>
      <Link
       href={"/contact"}
       className="mr-11 hover:text-[#F46530] duration-200 ease-in-out cursor-pointer text-black font-mono"
      >
       Contact
      </Link>
     </div>
     <div className="flex xl:w-[30%] max-lg:hidden max-md:hidden max-sm:hidden justify-center items-end">
      <div className="relative w-full text-left">
       <input
        type="text"
        className="w-full focus:ring-2 focus:ring-indigo-50 focus:bg-transparent border border-gray-300 focus:border-[#5E17EB] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-gray-200 h-11 placeholder:text-[#5E17EB] placeholder:opacity-50 resize-none rounded-full p-2"
        placeholder="Search your interests here..."
       ></input>
      </div>
      <button className="text-[#5E17EB] rounded p-2 duration-200 flex justify-center items-center h-11 ml-1 w-10 ">
       <ImSearch />
      </button>
     </div>
    </div>
   </nav>
  </div>
 );
};

export default Navbar;
