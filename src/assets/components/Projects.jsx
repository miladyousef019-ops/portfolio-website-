import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import mediatro from '../Screenshot (1).png'
import ecommerce from '../ecommerce.png'
import booking from '../bocking.com.png'
import openlibirary from '../openlibirary.png'

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center">
      <h1 className="text-[25px] font-semibold text-gray-300 mt-18 mb-10">Projects</h1>

      <div className="w-full flex">
        {/* حاوية المشروع الرئيسية */}
        <div className="rounded-lg w-[90%] mx-auto sm:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row overflow-hidden shadow-lg mb-10">
          
          <div className="flex flex-col items-center justify-center lg:items-start p-4 lg:w-[500px] bg-[#686868ea]">
            <h1 className="text-2xl font-bold text-gray-300 mt-4 mb-5 ml-4">Medical Project</h1>
            <p className="px-4 text-gray-300 text-[18px] text-center lg:text-left">
              Online Medical Consultation App
              Built a medical platform featuring doctor search, appointment booking, patient/doctor dashboards, and authentication using React, React Router DOM, and Tailwind CSS.          
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 px-4 mt-4 w-full">
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">React</div>
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">React Router DOM</div>
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">Tailwind CSS</div>
            </div>
            <div className="flex gap-4 mt-8 mb-4 ml-4">
              <a 
                href="https://github.com/miladyousef019-ops/meditro" 
                target="_blank" 
                rel="noopener noreferrer"
                title="View Source Code"
                className="text-lg font-semibold h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 text-gray-800 hover:scale-105 duration-200"
              >
                <FaCode className="text-xl" />
              </a>

              {/* زر معاينة الموقع */}
              <a 
                href="https://meditro-five.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Live Preview"
                className="text-lg font-semibold h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 text-gray-800 hover:scale-105 duration-200"
              >
                <FaEye className="text-xl" />
              </a>
            </div>
          </div>  

          {/* قسم الصورة / الخلفية الحمراء (يمين النص في الـ lg) */}
          <div className="hidden lg:flex lg:w-[500px]  items-center justify-center text-white font-bold">
            <img src={mediatro} alt="Project Screenshot" className="w-full h-full object-cover flex items-center justify-center transition-transform duration-500 hover:scale-105 hover:rotate-3" />
          </div>

        </div>
      </div>





      <div className="w-full flex">
        {/* حاوية المشروع الرئيسية */}
        <div className="rounded-lg w-[90%] mx-auto sm:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row overflow-hidden shadow-lg mb-10">
          
          <div className="hidden lg:flex lg:w-[500px]  items-center justify-center text-white font-bold">
            <img src={ecommerce} alt="Project Screenshot" className="w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-105 hover:rotate-3 object-cover" />
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start p-4 lg:w-[500px] bg-[#686868ea]">
            <h1 className="text-2xl font-bold text-gray-300 mt-4 mb-5 ml-4">E-Commerce App</h1>
            <p className="px-4 text-gray-300 text-[18px] text-center lg:text-left">
             E-Commerce Web Application
             Developed a responsive online shopping platform. Built core frontend features including a product catalog with category and price filters, a dynamic shopping cart and checkout system, user authentication, and product detail views using React, React Router DOM, and Tailwind CSS.            
             </p> 
           <div className="flex flex-wrap justify-center lg:justify-start gap-2 px-4 mt-4 w-full">
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">React</div>
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">React Router DOM</div>
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">Tailwind CSS</div>
            </div>
            <div className="flex gap-4 mt-8 mb-4 ml-4">
              <a 
                href="https://github.com/miladyousef019-ops/online-shop" 
                target="_blank" 
                rel="noopener noreferrer"
                title="View Source Code"
                className="text-lg font-semibold h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 text-gray-800 hover:scale-105 duration-200"
              >
                <FaCode className="text-xl" />
              </a>

              {/* زر معاينة الموقع */}
              <a 
                href="https://online-shop-ashy-zeta.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Live Preview"
                className="text-lg font-semibold h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 text-gray-800 hover:scale-105 duration-200"
              >
                <FaEye className="text-xl" />
              </a>            
            </div>
          </div>  

          {/* قسم الصورة / الخلفية الحمراء (يمين النص في الـ lg) */}
          

        </div>
      </div>


      <div className="w-full flex">
        {/* حاوية المشروع الرئيسية */}
        <div className="rounded-lg w-[90%] mx-auto sm:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row overflow-hidden shadow-lg mb-10">
          
          <div className="flex flex-col items-center justify-center lg:items-start p-4 lg:w-[500px] bg-[#686868ea]">
            <h1 className="text-2xl font-bold text-gray-300 mt-4 mb-5 ml-4">Booking Web Application</h1>
            <p className="px-4 text-gray-300 text-[18px] text-center lg:text-left">
              Booking Web Application
              Developed a responsive reservation and booking platform. Built core frontend features including searchable listing catalogs, date and time selection interfaces, booking management dashboards, and user authentication using React, React Router DOM, and Tailwind CSS.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 px-4 mt-4 w-full">
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">React</div>
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">React Router DOM</div>
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">Tailwind CSS</div>
            </div>
            <div className="flex gap-4 mt-8 mb-4 ml-4">
              <a 
                href="https://github.com/miladyousef019-ops/Booking.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="View Source Code"
                className="text-lg font-semibold h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 text-gray-800 hover:scale-105 duration-200"
              >
                <FaCode className="text-xl" />
              </a>

              {/* زر معاينة الموقع */}
              <a 
                href="https://booking-com-ochre.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Live Preview"
                className="text-lg font-semibold h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 text-gray-800 hover:scale-105 duration-200"
              >
                <FaEye className="text-xl" />
              </a>
            </div>
          </div>  

          {/* قسم الصورة / الخلفية الحمراء (يمين النص في الـ lg) */}
          <div className="hidden lg:flex lg:w-[500px]  items-center justify-center text-white font-bold">
            <img src={booking} alt="Project Screenshot" className="w-full h-full object-cover flex items-center justify-center transition-transform duration-500 hover:scale-105 hover:rotate-3" />
          </div>

        </div>
      </div>


      <div className="w-full flex">
        {/* حاوية المشروع الرئيسية */}
        <div className="rounded-lg w-[90%] mx-auto sm:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row overflow-hidden shadow-lg mb-10">
          
          <div className="hidden lg:flex lg:w-[500px]  items-center justify-center text-white font-bold">
            <img src={openlibirary} alt="Project Screenshot" className="w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-105 hover:rotate-3 object-cover" />
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start p-4 lg:w-[500px] bg-[#686868ea]">
            <h1 className="text-2xl font-bold text-gray-300 mt-4 mb-5 ml-4">Open Libirary</h1>
            <p className="px-4 text-gray-300 text-[18px] text-center lg:text-left">
             Digital Library Web Application
             Developed a responsive book browsing and search platform integrated with the Open Library API. Built core frontend features including real-time book search, category filtering, detailed book views, and a reading list management system using React, React Router DOM, and Tailwind CSS.            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 px-4 mt-4 w-full">
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">React</div>
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">React Router DOM</div>
              <div className="badge-bg text-gray-300 px-4 py-2 rounded-full mt-4">Tailwind CSS</div>
            </div>
            <div className="flex gap-4 mt-8 mb-4 ml-4">
              <a 
                href="hhttps://github.com/miladyousef019-ops/Open-Libirary" 
                target="_blank" 
                rel="noopener noreferrer"
                title="View Source Code"
                className="text-lg font-semibold h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 text-gray-800 hover:scale-105 duration-200"
              >
                <FaCode className="text-xl" />
              </a>

              {/* زر معاينة الموقع */}
              <a 
                href="https://open-libirary.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Live Preview"
                className="text-lg font-semibold h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 text-gray-800 hover:scale-105 duration-200"
              >
                <FaEye className="text-xl" />
              </a>            
            </div>
          </div>  

          {/* قسم الصورة / الخلفية الحمراء (يمين النص في الـ lg) */}
          

        </div>
      </div>


    </div>
  )
}

export default Projects