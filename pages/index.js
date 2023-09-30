import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";

export default function Home() {
 return (
  <>
   <Head>
    <link
     href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
     rel="stylesheet"
    />
   </Head>
   {/* hero section  */}
   <section className="hero text-gray-600 body-font items-center justify-center flex">
    <div
     className="items-center flex h-[60%] -mt-16 w-[80%] max-sm:w-full sm:rounded-3xl rounded"
     style={{ backgroundColor: " rgba(255, 255, 255, 0.8)" }}
    >
     <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 max-sm:m-0 items-center text-center ml-7 max-md:ml-0">
       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        LearnCodeNest
       </h1>
       <p className="mb-8 leading-relaxed sm:text-sm text-[14px] font-sm ">
        <span className="text-[#F46530]"> Welcome to LearnCodeNest:</span> Your
        comfy spot to learn coding. Like a bird's nest, we're here to nurture
        and protect your coding journey. Join us in this safe, supportive space,
        and let's grow your coding skills together.
       </p>
       <div className="flex justify-center flex-wrap max-sm:flex-col ">
        <Link href={"/courses"}>
         <button className="items-center justify-center rounded-full w-[8rem] inline-flex text-white border-2 border-[#F46530] hover:text-[#F46530] bg-[#F46530] py-1 px-6 focus:outline-none hover:bg-transparent text-sm duration-300 my-1">
          Get Started
         </button>
        </Link>
        <Link href={"/contact"}>
         <button className="ml-3 inline-flex w-[6rem] items-center justify-center text-gray-400 border-2 border-gray-400 py-1 px-6 focus:outline-none rounded-full text-sm hover:border-transparent duration-300 ease-out-in my-1 max-sm:ml-0 ">
          Contact
         </button>
        </Link>
       </div>

       <div className="mt-7 text-sm text-gray-500 w-full inline-flex max-lg:text-[11px] max-md:justify-center">
        <span className="px-2 flex items-center">
         <FaFreeCodeCamp className="mr-2 text-lg" /> Free Courses
        </span>
        <span className="mx-2 px-2 flex items-center">
         <FaChalkboardTeacher className="mr-2" /> Experienced Mentor
        </span>
       </div>
      </div>
      <div className=" max-md:hidden">
       <Image
        src={require("../public/image/laptop.png")}
        width={400}
        height={400}
        className="max-lg:w-[20rem]"
       />
      </div>
     </div>
    </div>
   </section>
  </>
 );
}
