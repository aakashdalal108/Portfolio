import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section
      id="projects"
      className="bg-white  mx-auto px-4 relative pb-8 md:pb-16"
    >
       <motion.div
          
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{delay:0.2, duration: 0.7 }}
          className="text-3xl mt-2 sm:text-5xl bg-white relative z-10 font-bold p-4 w-max mx-auto text-center text-cyan-500  sm:border-b-2 border-cyan-500">
        Projects
        
        </motion.div>
      

      <div className="relative mx-12">

        {/* Project-1 */}
        <div className="project1 flex md:gap-[80px] md:flex-row flex-col gap-4 mt-8 items-center relative md:mt-20">
          <div className="line hidden md:block h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 absolute top-1/2 right-1/2 left-1/4"></div>
          <div className="dot hidden md:block w-4 h-4 bg-white border-3 border-blue-400 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full"></div>

          <motion.a
            href="https://perpenny-travel-agency-kj95.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full relative justify-center md:justify-start"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col items-center relative group md:hover:scale-110 transition-transform duration-300">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10"
                src="/perpenny.avif"
                alt="Perpenny Project"
              />
            </div>
          </motion.a>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
              Perpenny - Travel Agency
            </h2>
            <p className="text-gray-800 text-sm text-justify md:text-base mt-2">
            Created a dark-themed, responsive homepage UI for a fictional travel agency as part of a selection assignment from Perpenny. The project emphasizes strong design and layout skills in a mobile-first setup.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl px-2  mx-2">
                React
              </span>
              <span className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl px-2  mx-2">
                Tailwind
              </span>
              
            </div>
          </motion.div>
        </div>

         {/* project-2 */}
         <div className="project2 flex md:gap-[80px] md:flex-row flex-col gap-4 mt-8 items-center relative md:mt-20">
          <motion.div
            className="order-2 md:order-1 w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl text-[#1379ff] font-semibold">
              Credex-SoftSell
            </h2>
            <p className="text-gray-800 text-justify text-sm md:text-base mt-2">
              {/* Received an assignment from Credex to design and develop a fully
              responsive landing page for a licensing sales company.Developed
              the landing page from scratch using */}
              Built a responsive, single-page marketing website as part of a web development internship selection assignment from Credex. The project showcases a fictional software resale startup named “SoftSell,” focusing on clean UI, responsive design, and modern frontend development practices. 
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-[#4185de] rounded-2xl px-2 mx-2"> React</span>
              <span className="bg-[#4185de] rounded-2xl px-2 mx-2">
                Tailwind CSS
              </span>
              <span className="bg-[#4185de] rounded-2xl px-2 mx-2">
                Framer Motion
              </span>
            </div>
          </motion.div>

          <div className="line hidden md:block h-[2px] bg-[#1379ff] absolute top-1/2 right-1/4 left-1/2"></div>
          <div className="dot hidden md:block w-4 h-4 bg-white border-3 border-[#1379ff] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full"></div>

          <motion.a
            href="https://credex-softsell.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="order-1 md:order-2 flex w-full relative justify-center md:justify-start"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col items-center relative group md:hover:scale-110 transition-transform duration-300 ml-auto">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10"
                src="/credex.avif"
                alt="credex Project"
              />
            </div>
          </motion.a>
        </div>

        {/* project-3 */}
        <div className="project3 flex md:gap-[80px] md:flex-row flex-col gap-4 mt-8 items-center relative md:mt-20">
          <div className="line hidden md:block h-[2px] bg-[#1DB954] absolute top-1/2 right-1/2 left-1/4"></div>
          <div className="dot hidden md:block w-4 h-4 bg-white border-3 border-[#1DB954] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full"></div>

          <motion.a
            href="https://theclonemaster.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full relative justify-center md:justify-start"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col items-center relative group md:hover:scale-110 transition-transform duration-300">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10"
                src="/spotify.avif"
                alt="Spotify Project"
              />
            </div>
          </motion.a>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-4xl text-[#1DB954] font-semibold">
              Spotify Clone
            </h2>
            <p className="text-gray-800 text-sm text-justify md:text-base mt-2">
              Designed to closely replicate Spotify’s layout and user
              experience, with a focus on clean styling and interactivity.
              Features include a sleek player interface, custom controls,
              playlists.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-[#1DB954] rounded-2xl px-2 text-black mx-2">
                HTML
              </span>
              <span className="bg-[#1DB954] rounded-2xl px-2 text-black mx-2">
                CSS
              </span>
              <span className="bg-[#1DB954] rounded-2xl px-2 text-black mx-2">
                Javascript
              </span>
            </div>
          </motion.div>
        </div>

        {/* project-4 */}
        <div className="project4 flex md:gap-[80px] md:flex-row flex-col gap-4 mt-8 items-center relative md:mt-20">
          <motion.div
            className="order-2 md:order-1 w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl text-[#1DA1F2] font-semibold">
              X/Twitter Clone
            </h2>
            <p className="text-gray-800 text-justify text-sm md:text-base mt-2">
              Designed with a clean dark interface, tweet layout, navigation
              bar, and mobile-first responsiveness. Mimics the look and feel of
              the real platform using
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-black rounded-2xl px-2 mx-2 text-white">
                HTML
              </span>
              <span className="bg-black rounded-2xl px-2 mx-2 text-white">
                Tailwind CSS
              </span>
            </div>
          </motion.div>

          <div className="line hidden md:block h-[2px] bg-[#1DA1F2] absolute top-1/2 right-1/4 left-1/2"></div>
          <div className="dot hidden md:block w-4 h-4 bg-white border-3 border-[#1DA1F2] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full"></div>

          <motion.a
            href="https://xclone.theclonemaster.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="order-1 md:order-2 flex w-full relative justify-center md:justify-start"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col items-center relative group md:hover:scale-110 transition-transform duration-300 ml-auto">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10"
                src="/twitterClone.avif"
                alt="twitter Project"
              />
            </div>
          </motion.a>
        </div>

        {/* project-5 */}
        <div className="project5 flex md:gap-[80px] md:flex-row flex-col gap-4 mt-8 items-center relative md:mt-20">
          <div className="line hidden md:block h-[2px] bg-cyan-700 absolute top-1/2 right-1/2 left-1/5"></div>
          <div className="dot hidden md:block w-4 h-4 bg-white border-3 border-cyan-700 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full"></div>

          <motion.a
            href="https://to-do-app-rust-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full relative justify-center md:justify-start"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col items-center relative group md:hover:scale-110 transition-transform duration-300">
              <img
                className="max-w-[300px] w-full mr-auto relative z-10"
                src="/todoapp.avif"
                alt="todo app"
              />
            </div>
          </motion.a>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-4xl text-cyan-700 font-semibold">
              TO-DO App
            </h2>
            <p className="text-gray-800 text-sm text-justify md:text-base mt-2">
            A beginner-friendly Todo App. It helped me learn key React concepts like state management, event handling, and component structure. The app also uses LocalStorage to save tasks, so everything stays even after a page refresh. 
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-cyan-700 rounded-2xl px-2  mx-2">
                React
              </span>
              <span className="bg-cyan-700 rounded-2xl px-2  mx-2">
                Tailwind CSS
              </span>
            </div>
          </motion.div>
        </div>

       
      </div>

      <div className="vertical w-[2px] hidden md:block bg-cyan-500 absolute top-0 bottom-0 left-1/2"></div>
    </section>
  );
};

export default Project;
