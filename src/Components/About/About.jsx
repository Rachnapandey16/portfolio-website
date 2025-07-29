import React from "react";
import Dp2 from "../../assets/image/Dp2.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
            <img
              src={Dp2}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold border-b-4 border-cyan-400 inline-block pb-1">
            About Me
          </h2>

          <div className="space-y-5">
            {/* Card 1 */}
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-600/20 p-2 rounded-full group-hover:bg-cyan-500/40 transition">
                  <IoArrowForward size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300">
                    Computer Science Student
                  </h3>
                  <p className="text-sm mt-1 text-gray-300">
                    Pursuing B.Tech in CSE at Sri Aurobindo Institute of
                    Technology (RGPV). I love turning ideas into real, working
                    products using clean code.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-600/20 p-2 rounded-full group-hover:bg-cyan-500/40 transition">
                  <IoArrowForward size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300">
                    Frontend Developer
                  </h3>
                  <p className="text-sm mt-1 text-gray-300">
                    Skilled in HTML, CSS, JavaScript, Bootstrap, and jQuery. I
                    built a responsive online food delivery website as part of
                    my personal learning journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-600/20 p-2 rounded-full group-hover:bg-cyan-500/40 transition">
                  <IoArrowForward size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300">
                    Always Learning
                  </h3>
                  <p className="text-sm mt-1 text-gray-300">
                    Continuously improving in C++, Python, and OOPs concepts. I
                    also focus on soft skills like teamwork, communication, and
                    time management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
