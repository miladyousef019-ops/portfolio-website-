import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div id="about" className="pt-[100px] flex flex-col items-center justify-center">
      <h1 className="text-[25px] font-semibold text-gray-300 mt-4">Youssef Milad Ebrahim</h1>      
      <h1 className="text-[20px] font-semibold text-gray-300 mt-2">Front-end Developer</h1>   
      <p className="text-[18px] text-gray-300 px-4 max-w-[1000px] mt-4 text-center">"<span className="font-bold text-gray-200">Front-end React Developer</span> with a solid foundation in building responsive and interactive web applications using React, React Router DOM, and Tailwind CSS. Passionate about crafting seamless user experiences (UI/UX) and optimizing web performance. Eager to collaborate effectively within Agile teams, solve technical challenges, and continuously learn to deliver high-quality digital solutions."</p>   
      <div className="flex gap-4 mt-8">
        <button className="bg-[#525252bb] text-gray-300 text-lg font-semibold px-5 py-2 flex justify-center items-center gap-2 rounded-lg hover:scale-105 duration-200"> Contact me here <FaArrowRight className="text-sm" /></button>
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="text-lg font-semibold px-5 py-2 flex justify-center items-center gap-2 rounded-lg w-[193px] bg-gray-300 text-gray-800 hover:scale-105 duration-200"
        >
          Download CV <FaDownload className="text-sm" />
        </a>
      </div>
      <div className="flex gap-4 mt-8">
        <button className="text-lg font-semibold h-12 w-12 flex justify-center items-center gap-2 rounded-2xl bg-gray-300 text-gray-800 hover:scale-105 duration-200"><a href="https://www.linkedin.com/in/yousef-milad-657728419"><FaLinkedin className="text-3xl" /></a></button>
        <button className="text-lg font-semibold h-12 w-12 flex justify-center items-center gap-2 rounded-2xl bg-gray-300 text-gray-800 hover:scale-105 duration-200"><a href="https://github.com/miladyousef019-ops" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl" /></a></button>
      </div>
      <div className="w-1 mt-[70px] h-[100px] bg-gray-300 rounded-full "></div>
    </div>
  )
}

export default About