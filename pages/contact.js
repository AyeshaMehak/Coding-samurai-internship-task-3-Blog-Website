import React from "react";
import Image from "next/image";
import { TbBulb } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import Link from "next/link";

const Contact = () => {
 return (
  <>
   <div className="contact" />
   {/* contact portion  */}
   <section className="body-font">
    <div
     className="shadow2 py-6 px-2 mx-auto sm:w-[30rem] shadow-lg  -mt-[32rem] rounded-3xl mb-24 flex-col sm:flex-row sm:space-x-4 sm:items-center"
     style={{ backdropFilter: "blur(10px)" }}
    >
     <div className="flex-1">
      <div className="flex flex-col text-center w-full my-2">
       <h1 className="sm:text-3xl text-2xl font-medium title-font text-white uppercase">
        Contact Us
       </h1>
      </div>
     </div>
     <div className="flex-1">
      <div className="lg:w-[80%] md:w-[70%] w-[70%] mx-auto">
       <div className="flex flex-col sm:flex-row sm:space-x-4 sm:items-start">
        <div className="p-2 sm:w-full">
         <div className="relative">
          <label htmlFor="name" className="leading-7 text-sm text-white">
           Name
          </label>
          <input
           type="text"
           id="name"
           name="name"
           className="w-full bg-white rounded border border-white focus:border-[#5E17EB] focus:ring-1 focus:ring-[#5E17EB] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
         </div>
        </div>
        <div className="p-2 sm:w-full">
         <div className="relative">
          <label htmlFor="email" className="leading-7 text-sm text-white">
           Email
          </label>
          <input
           type="email"
           id="email"
           name="email"
           className="w-full bg-white rounded border border-white focus:border-[#5E17EB] focus:ring-1 focus:ring-[#5E17EB] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
         </div>
        </div>
       </div>
       <div className="p-2 w-full">
        <div className="relative">
         <label htmlFor="message" className="leading-7 text-sm text-white">
          Message
         </label>
         <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-white focus:border-[#5E17EB] focus:ring-1 focus:ring-[#5E17EB] text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
         />
        </div>
       </div>
       <div className="p-2 w-full">
        <button className="flex mx-auto text-white bg-[#F46530] border-0 py-2 px-8 focus:outline-none hover:bg-[#ff6932] duration-200 rounded text-md">
         Send
        </button>
        <p className="text-[12px] text-gray-900 mt-3 ">
         By submitting this form you agree to our terms and conditions and our
         privacy policy.
        </p>
       </div>
      </div>
     </div>
    </div>
   </section>
   {/* end */}

   {/* suggestions  portion  */}
   <div>
    <section className="text-gray-600 body-font">
     <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap -m-4">
       <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-6 text-[#5E17EB] mt-10 ">
         Your Impact Matters!
         <div className="items-center justify-center flex">
          <span className="h-1 w-[12rem] bg-[#F46530] rounded mt-2" />
         </div>
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-700">
         We'd love to hear your side. Your every thought is a stepping stone in
         our journey of growth and development.
        </p>
       </div>
       <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-300 border-opacity-50 p-8 sm:flex-row flex-col">
         <div className="w-12 h-12 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#F46530] text-white flex-shrink-0">
          <TbBulb className="text-2xl" />
         </div>
         <div className="flex-grow">
          <h2 className="text-black text-lg title-font font-medium mb-3">
           Suggest Us New Course Ideas!
          </h2>
          <p className="leading-relaxed text-gray-700">
           Your contribution helps us create better courses for everyone.
          </p>
         </div>
        </div>
       </div>
       <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-300 border-opacity-50 p-8 sm:flex-row flex-col">
         <div className="w-12 h-12 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#F46530]  text-white flex-shrink-0">
          <VscFeedback className="text-2xl" />
         </div>
         <div className="flex-grow">
          <h2 className="text-black text-lg title-font font-medium mb-3">
           Share Your Thoughts!
          </h2>
          <p className="leading-relaxed text-gray-700">
           Please tell us what you think. Your feedback is important and helps
           us improve.
          </p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>
   </div>
   {/* end */}
   <Link href="/contact">
    <div className="flex justify-center items-center mx-auto -my-12">
     <button className="rounded-full text-white border-2 border-[#F46530] hover:text-[#F46530] bg-[#F46530] py-1 mb-24 px-6 focus:outline-none hover:bg-transparent text-sm duration-300">
      Let's Chat!
     </button>
    </div>
   </Link>
  </>
 );
};

export default Contact;
