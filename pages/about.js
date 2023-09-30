import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidQuoteRight } from "react-icons/bi";
const About = () => {
 return (
  <>
   <section className="text-gray-600 body-font">
    <div className="px-5 pt-4 pb-20 mx-auto flex flex-col">
     <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
       <Image
        className=""
        alt="banner"
        src={require("../public/image/learning-banner-purple.png")}
       />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
       <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        <Image
         className="w-12 h-12 items-center justify-center inline-flex rounded-xl"
         src={require("../public/image/Hi.png")}
        />

        <div className="flex flex-col items-center text-center justify-center">
         <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
          Developer Speaking
         </h2>
         <div className="w-12 h-1 bg-[#5E17EB] rounded mt-2 mb-4" />
         <p className="text-base">
          A creative mind behind a groundbreaking learning platform designed to
          empower students.
         </p>
        </div>
       </div>
       <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <p className="leading-relaxed text-lg mb-4">
         A dedicated developer on a mission to make learning better for students
         of all ages.With a keen eye and innovation, they've skillfully blended
         their technical expertise with a deep understanding of teaching to
         create an easy-to-use platform that makes learning a breeze.
        </p>
        <Link href={"/courses"}>
         <button className="bg-[#5E17EB] text-white border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md  hover:border-t-2 hover:border-b outline-none duration-300 group text-lg ">
          <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Start Learning!
         </button>
        </Link>
        <Link href={"/contact"}>
         <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 duration-300  rounded text-lg">
          Contact
         </button>
        </Link>
       </div>
      </div>
     </div>
    </div>
    <div className="px-5 pb-[10rem] mx-auto">
     <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <BiSolidQuoteRight className="inline-block w-8 h-8 text-gray-400 mb-8" />

      <p className="leading-relaxed text-lg">
       "Education is the most powerful weapon you can use to change the world."
      </p>
      <span className="inline-block h-1 w-10 rounded bg-[#F46530] mt-8 mb-6" />
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
       Nelson Mandela
      </h2>
     </div>
    </div>
   </section>
  </>
 );
};

export default About;
