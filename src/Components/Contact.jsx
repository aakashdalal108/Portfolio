import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-white mt-18">
      <div className="flex items-center justify-center my-6 p-7">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-3 border-[#1788ae] rounded-xl text-4xl font-semibold p-4 text-[#1788ae]"
        >
          Let's Connect
        </motion.h1>
      </div>

      <div className="container mx-auto flex gap-10">
        <motion.div
          className="left w-full hidden md:block"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src="contact.svg" alt="contact" />
        </motion.div>

        <motion.div
          className="right w-full text-black"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form className="px-3" action="https://formspree.io/f/mkgrejeg" method="post">
            <label className="flex gap-2 my-2 items-center" htmlFor="Name">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Name
            </label>
            <input className="w-full md:w-[70%] border border-[#1788ae] p-1 rounded-md" type="text" name="Name" required />

            <label className="flex gap-1.5 my-2 items-center" htmlFor="email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-at-sign">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
              </svg>
              Email
            </label>
            <input className="w-full md:w-[70%] border border-[#1788ae] p-1 rounded-md" type="email" name="email" required />

            <label className="flex gap-1.5 my-2 items-center" htmlFor="message">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Message
            </label>
            <textarea className="border border-[#1788ae] w-full md:w-[70%] p-1 rounded-md" name="message" id="message" cols="25" rows="10" required></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-[70%] bg-[#1788ae] text-white my-4 p-3 cursor-pointer rounded-lg"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>



      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center justify-center gap-6 mt-6 pb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="https://www.linkedin.com/in/aakashdalal108/" target="_blank" rel="noopener noreferrer">
            <motion.img whileHover={{ scale: 1.2 }} className="w-5 cursor-pointer" src="/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://x.com/aakashdalal108" target="_blank" rel="noopener noreferrer">
            <motion.img whileHover={{ scale: 1.2 }} className="w-5 cursor-pointer" src="/x.svg" alt="x" />
          </a>
          <a href="https://www.instagram.com/dalalaakash/?hl=en" target="_blank" rel="noopener noreferrer">
            <motion.img whileHover={{ scale: 1.2 }} className="w-5 cursor-pointer" src="/instagram.svg" alt="instagram" />
          </a>
          <a href="mailto:aakashdalal108@gmail.com" target="_blank" rel="noopener noreferrer">
            <motion.img whileHover={{ scale: 1.2 }} className="w-6 cursor-pointer" src="/email.svg" alt="email" />
          </a>
          <a href="https://github.com/aakashdalal108" target="_blank" rel="noopener noreferrer">
            <motion.img whileHover={{ scale: 1.2 }} className="w-5 cursor-pointer" src="/github.svg" alt="github" />
          </a>
        </motion.div>
      </motion.footer>

    </section>
  );
};

export default Contact;
