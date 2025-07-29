import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaGoogle,
  FaAmazon,
  FaBootstrap,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiCplusplus } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">Experience</h1>
      <div className="flex flex-wrap items-start justify-between gap-8">
        {/* Skills Section */}
        <div className="flex flex-wrap w-full md:w-2/5 gap-6 md:p-6 py-4">
          {[
            { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML" },
            { icon: <FaCss3 color="#1572B6" size={50} />, name: "CSS" },
            { icon: <FaJs color="#F7DF1E" size={50} />, name: "JavaScript" },
            { icon: <FaReact color="#61DAFB" size={50} />, name: "React" },
            { icon: <SiTailwindcss color="#38BDF8" size={50} />, name: "Tailwind CSS" },
            { icon: <FaBootstrap color="#7952B3" size={50} />, name: "Bootstrap" },
            { icon: <SiMongodb color="#47A248" size={50} />, name: "MongoDB" },
            { icon: <FaDatabase color="#00758F" size={50} />, name: "SQL" },
            { icon: <SiCplusplus color="#00599C" size={50} />, name: "C++" },
            { icon: <FaCode color="#F472B6" size={50} />, name: "OOPs" },
          ].map((item, index) => (
            <span
              key={index}
              className="p-4 bg-zinc-900 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center w-[80px] h-[80px]"
              title={item.name}
            >
              {item.icon}
            </span>
          ))}
        </div>

        {/* Experience Section */}
        <div className="flex flex-col w-full md:w-[55%] gap-6">
          {/* Google */}
          <div className="flex gap-6 bg-slate-900 bg-opacity-50 rounded-lg p-4 items-center hover:bg-opacity-70 transition">
            
              <span className="text-white">
              <h2 className="text-lg font-semibold">Web Developer Intern , The Skybrisk</h2>
              <p className="text-sm font-thin">July 2025 - Present</p>
              <ul className="text-sm mt-1 pl-4 list-disc">
                <li>Work as software developer</li>
                <li>Senior SDE-developer</li>
              </ul>
            </span>
          </div>

          {/* Netflix */}
          <div className="flex gap-6 bg-slate-900 bg-opacity-50 rounded-lg p-4 items-center hover:bg-opacity-70 transition">
           
            <span className="text-white">
              <h2 className="text-lg font-semibold">Trainee Intern, Tech Mahindra</h2>
              <p className="text-sm font-thin">July 2024 - Dec 2024</p>
              <ul className="text-sm mt-1 pl-4 list-disc">
                <li>Flipkart Process</li>
                
              </ul>
            </span>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Experience;
