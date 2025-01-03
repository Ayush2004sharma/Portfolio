import { MdDownload } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const Intro = () => {
  return (
<div className="absolute top-24 left-44 flex flex-col space-y-6">
  <h1 className="text-4xl font-bold text-black">
    Hi There,
  </h1>
  <h1 className="text-4xl font-bold">
    I'm Ayush  
    <span className="text-orange-500"> Sharma</span>
  </h1>
  <h2 className="text-xl font-bold text-gray-800">
    I Am into <span className="text-red-900">Web Develop|</span>
  </h2> 
  <button className="px-7 py-2 bg-blue-900 text-white rounded-2xl flex items-center space-x-2 hover:bg-blue-400 hover:text-black w-40">
    <span className="font-semibold">About Me</span>
    <MdDownload />
  </button>

<div className="Social-links flex justify-between space-x-4">
  <button className="flex items-center justify-center rounded-full bg-blue-400 w-10 h-10 text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300">
    <AiFillInstagram />
  </button>
  <button className="flex items-center justify-center rounded-full bg-blue-400 w-10 h-10 text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300">
    <FaTwitter />
  </button>
  <button className="flex items-center justify-center rounded-full bg-blue-400 w-10 h-10 text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300">
    <IoLogoGithub />
  </button>
  <button className="flex items-center justify-center rounded-full bg-blue-400 w-10 h-10 text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300">
    <FaLinkedin />
  </button>
  <button className="flex items-center justify-center rounded-full bg-blue-400 w-10 h-10 text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300">
    <TbBrandLeetcode />
  </button>
</div>


</div>

  );
};

export default Intro;
