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
          className="text-3xl mt-2 sm:text-5xl bg-white relative z-10 font-bold p-4 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
        Projects
        </motion.div>
      

      <div className="relative mx-12">
        {/* project-1 */}
        <div className="project1 flex md:gap-[80px] md:flex-row flex-col gap-4 mt-8 items-center relative md:mt-20">
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
                src="/spotify.png"
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

        {/* project-2 */}
        <div className="project2 flex md:gap-[80px] md:flex-row flex-col gap-4 mt-8 items-center relative md:mt-20">
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
                src="/twitterClone.png"
                alt="twitter Project"
              />
            </div>
          </motion.a>
        </div>

        {/* project-3 */}
        <div className="project1 flex md:gap-[80px] md:flex-row flex-col gap-4 mt-8 items-center relative md:mt-20">
          <div className="line hidden md:block h-[2px] bg-[#312c84] absolute top-1/2 right-1/2 left-1/4"></div>
          <div className="dot hidden md:block w-4 h-4 bg-white border-3 border-[#312c84] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full"></div>

          <motion.a
            href="https://react-todo-app-six-ecru.vercel.app/"
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
                src="/todoapp.png"
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
            <h2 className="text-2xl md:text-4xl text-[#312c84] font-semibold">
              TO-DO App
            </h2>
            <p className="text-gray-800 text-sm text-justify md:text-base mt-2">
              <li>A responsive Todo List web app</li>
              <li>Add, edit, delete, and complete tasks</li>
              <li>Data saved locally in browser</li>
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-[#c6d2ff] rounded-2xl px-2 text-black mx-2">
                React
              </span>
              <span className="bg-[#c6d2ff] rounded-2xl px-2 text-black mx-2">
                Tailwind CSS
              </span>
            </div>
          </motion.div>
        </div>

        {/* project-4 */}
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
              Received an assignment from Credex to design and develop a fully
              responsive landing page for a licensing sales company.Developed
              the landing page from scratch using
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
                src="/credex.png"
                alt="Softsell Project"
              />
            </div>
          </motion.a>
        </div>
      </div>

      <div className="vertical w-[2px] hidden md:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2"></div>
    </section>
  );
};

export default Project;
