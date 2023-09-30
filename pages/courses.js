import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
const Courses = () => {
 return (
  <>
   {/* course 1 */}
   {/* free code camp  */}
   <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
     <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-[20%] w-full mb-6 lg:mb-0">
       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        FreeCodeCamp
       </h1>
       <div className="h-1 w-20 bg-[#5E17EB] rounded" />
      </div>
      <p className="lg:w-[80%] text-justify w-full leading-relaxed text-gray-500 ">
       With Free Code Camp, anyone with internet access and a computer can
       explore a wealth of free coding resources, tutorials, and communities
       across various disciplines, from web development to data analysis,
       enabling them to embark on a coding adventure and pursue exciting career
       opportunities.
      </p>
     </div>
     <div className="flex flex-wrap -m-4">
      {/* machine learning*/}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/machine.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         machine learning course
        </h3>
        <Link
         target="blank"
         href={"https://www.youtube.com/watch?v=i_LwzRVP7bg&t=141s"}
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Discover the power of Next.js, the cutting-edge web framework for
         lightning-fast, SEO-friendly, and dynamic web applications. Stay ahead!
        </p>
       </div>
      </div>
      {/* api */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/api.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         api's for beginners
        </h3>
        <Link
         target="blank"
         href={"https://www.youtube.com/watch?v=WXsD0ZgxjRw"}
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Elevate your site with ChatGPT's AI voice assistant course, offering
         engaging, interactive, and cutting-edge user experiences. Future-proof
         your skills!
        </p>
       </div>
      </div>
      {/* flutter  */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/flutter.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         learn flutter (for beginners)
        </h3>
        <Link
         target="blank"
         href={"https://www.youtube.com/watch?v=VPvVD8t02U8"}
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Empower your website with Sanity.io – the modern content platform for
         seamless, structured, and scalable web experiences. Elevate your
         content!
        </p>
       </div>
      </div>
      {/* harvard cs50 */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/harvard.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         harvard cs50
        </h3>
        <Link
         target="blank"
         href={"https://www.youtube.com/watch?v=8mAITcNt710&t=2s"}
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Master HTML, CSS, and JavaScript for limitless web creativity and
         career opportunities. Build the future of the web today!
        </p>
       </div>
      </div>
     </div>
    </div>
    <div class="flex px-6 pb-8 sm:px-8 justify-center items-center">
     <Link
      href={"https://www.youtube.com/@freecodecamp"}
      target="_blank"
      rel="noopener noreferrer"
     >
      <button className="items-center justify-center w-[17rem] px-6 py-2.5 flex  text-center text-white duration-200 bg-[#5E17EB] border-2 border-[#5E17EB] rounded-full nline-flex hover:bg-transparent hover:border-[#5E17EB] hover:text-[#5E17EB] focus:outline-none focus-visible:outline-[#5E17EB] text-sm focus-visible:ring-[#5E17EB]">
       Explore More Courses{" "}
       <FiExternalLink className="font-bold text-xl ml-2" />
      </button>
     </Link>
    </div>
   </section>
   {/* course 2  */}
   {/* code with harry  */}
   <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
     <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-[20%] w-full mb-6 lg:mb-0">
       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        Code With Harry
       </h1>
       <div className="h-1 w-20 bg-[#5E17EB] rounded" />
      </div>
      <p className="lg:w-[80%] text-justify w-full leading-relaxed text-gray-500 ">
       Code With Harry is his attempt to teach basics and coding techniques to
       people in a short time, which took him ages to learn. At Code With Harry,
       he provides a quick and to-the-point demo along with resources of
       anything and everything he teaches. Source code and other resources are
       hosted on his website, CodeWithHarry.com. He provides source code (if
       any) in the description of every video. Quality programming videos in
       Hindi and also with English subtitles
      </p>
     </div>
     <div className="flex flex-wrap -m-4">
      {/* Next js Mastery */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/nextjs.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         Mastery in Next.js
        </h3>
        <Link
         target="blank"
         href={
          "https://www.youtube.com/playlist?list=PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG"
         }
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Discover the power of Next.js, the cutting-edge web framework for
         lightning-fast, SEO-friendly, and dynamic web applications. Stay ahead!
        </p>
       </div>
      </div>
      {/* AI voice assistant  */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/aichatgpt.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         AI voice assistant with Chatgpt
        </h3>
        <Link
         target="blank"
         href={"https://www.youtube.com/watch?v=pXvfcoag-VE"}
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Elevate your site with ChatGPT's AI voice assistant course, offering
         engaging, interactive, and cutting-edge user experiences. Future-proof
         your skills!
        </p>
       </div>
      </div>
      {/* sanity  */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/sanity.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         Sanity.io
        </h3>
        <Link
         target="blank"
         href={
          "https://www.youtube.com/playlist?list=PLu0W_9lII9ag1cN0n_UcNRN7fYIwNYJDQ"
         }
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Empower your website with Sanity.io – the modern content platform for
         seamless, structured, and scalable web experiences. Elevate your
         content!
        </p>
       </div>
      </div>
      {/* web development  */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/web.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         Web development for beginners
        </h3>
        <Link
         target="blank"
         href={
          "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
         }
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Master HTML, CSS, and JavaScript for limitless web creativity and
         career opportunities. Build the future of the web today!
        </p>
       </div>
      </div>
     </div>
    </div>
    <div class="flex px-6 pb-8 sm:px-8 justify-center items-center">
     <Link
      href={"https://www.youtube.com/@CodeWithHarry"}
      target="_blank"
      rel="noopener noreferrer"
     >
      <button className="items-center justify-center w-[17rem] px-6 py-2.5 flex  text-center text-white duration-200 bg-[#5E17EB] border-2 border-[#5E17EB] rounded-full nline-flex hover:bg-transparent hover:border-[#5E17EB] hover:text-[#5E17EB] focus:outline-none focus-visible:outline-[#5E17EB] text-sm focus-visible:ring-[#5E17EB]">
       Explore More Courses{" "}
       <FiExternalLink className="font-bold text-xl ml-2" />
      </button>
     </Link>
    </div>
   </section>
   {/* course 3 */}
   {/* great stack  */}
   <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
     <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-[20%] w-full mb-6 lg:mb-0">
       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        GreatStack
       </h1>
       <div className="h-1 w-20 bg-[#5E17EB] rounded" />
      </div>
      <p className="lg:w-[80%] text-justify w-full leading-relaxed text-gray-500 ">
       His name is Avinash, and he's a Software Developer with several years of
       experience in web development. He likes to teach aspiring web developers
       at "GreatStack" to learn to code and get their dream job.
      </p>
     </div>
     <div className="flex flex-wrap -m-4">
      {/* Javascript 30 days projects*/}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/js.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         30 days js projects for beginners
        </h3>
        <Link
         target="blank"
         href={
          "https://www.youtube.com/playlist?list=PLjwm_8O3suyOgDS_Z8AWbbq3zpCmR-WE9"
         }
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Discover the power of Next.js, the cutting-edge web framework for
         lightning-fast, SEO-friendly, and dynamic web applications. Stay ahead!
        </p>
       </div>
      </div>
      {/* Netflix web clone */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/netflix.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         Netflix web clone using html & css
        </h3>
        <Link
         target="blank"
         href={"https://www.youtube.com/watch?v=Tgat3-prVv4"}
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Elevate your site with ChatGPT's AI voice assistant course, offering
         engaging, interactive, and cutting-edge user experiences. Future-proof
         your skills!
        </p>
       </div>
      </div>
      {/* e-commerce website  */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/e-commerce.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         wordpress e-commerce website
        </h3>
        <Link
         target="blank"
         href={
          "https://www.youtube.com/playlist?list=PLjwm_8O3suyPYhCbBY8v4G-BOIm6ylRjZ"
         }
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Empower your website with Sanity.io - the modern content platform for
         seamless, structured, and scalable web experiences. Elevate your
         content!
        </p>
       </div>
      </div>
      {/* js dom */}
      <div className="xl:w-1/4 md:w-1/2 p-4">
       <div className="bg-gray-100 p-6 rounded-lg">
        <Image
         className="h-40 rounded w-full object-cover object-center mb-6"
         src={require("../public/image/jsdom.png")}
         alt="content"
        />
        <h3 className="tracking-widest text-[#5E17EB] text-xs font-medium title-font uppercase">
         js dom course
        </h3>
        <Link
         target="blank"
         href={"https://www.youtube.com/watch?v=WjxQRfZfZnw"}
         className="underline text-lg text-gray-900 font-medium title-font mb-4"
        >
         Start Learning
        </Link>
        <p className="leading-relaxed text-base">
         Master HTML, CSS, and JavaScript for limitless web creativity and
         career opportunities. Build the future of the web today!
        </p>
       </div>
      </div>
     </div>
    </div>
    <div class="flex px-6 pb-8 sm:px-8 justify-center items-center">
     <Link
      href={"https://www.youtube.com/@GreatStackDev"}
      target="_blank"
      rel="noopener noreferrer"
     >
      <button className="items-center justify-center w-[17rem] px-6 py-2.5 flex  text-center text-white duration-200 bg-[#5E17EB] border-2 border-[#5E17EB] rounded-full nline-flex hover:bg-transparent hover:border-[#5E17EB] hover:text-[#5E17EB] focus:outline-none focus-visible:outline-[#5E17EB] text-sm focus-visible:ring-[#5E17EB]">
       Explore More Courses{" "}
       <FiExternalLink className="font-bold text-xl ml-2" />
      </button>
     </Link>
    </div>
   </section>
  </>
 );
};

export default Courses;
