import React from "react";
import Typed from "typed.js";
import { motion } from "motion/react"

const Main = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer.", "Web Designer."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className=" flex items-center h-screen   ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
       
        className="left w-full mx-auto space-y-5 p-4 flex flex-col justify-center items-center text-center"
      >
        


        <h1 className="md:text-4xl text-3xl font-bold ">
          Hi , I'm <span className="text-[#b4cdf9]">Aakash Dalal</span>
        </h1>
        <div className="md:text-4xl text-3xl">and I am passionate</div>
        
        <div className="text-[#b4cdf9] text-4xl  ">
          <span ref={el} />
          <div className="text-white my-4 ">I build things for web</div>
        </div>

        <motion.div
        initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="btn my-5 mx-2 md:mx-10 flex items-center justify-center">
          <a
            href="/resume.pdf"
            download
            className="bg-[#b4cbf1] mx-2 p-2 text-black rounded-xl font-bold cursor-pointer  hover:bg-[#576785] hover:text-white  hover:scale-110 transition-transform duration-200"
          >
            Download Resume
          </a>
          

          <a
            href="https://github.com/aakashdalal108"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b4cbf1] mx-2 p-2 text-black rounded-xl font-bold cursor-pointer flex  items-center gap-2 hover:bg-[#576785] hover:text-white hover:scale-110 transition-transform duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 "
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52 -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07 -1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013  8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Visit Github
          </a>
        </motion.div>
      </motion.div>
      

      <motion.div
        initial={{ opacity: 0, x: 100 }}         
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="right w-full mx-auto hidden md:block  "
      >
        
        <img className="w-[90%] " src="/coderavtar.png" alt="" />
      </motion.div>
      
    </section>
  );
};

export default Main;
