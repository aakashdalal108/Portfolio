import React from 'react'
import { motion } from "motion/react"

import './Abot.css'


const About = () => {
  return (
    <section id='about'>
      <div className=' container mx-auto flex gap-10 items-center  my-10'>
        <div className='w-full hidden md:block h-1 mb-8 bg-white'></div>
        <div className='w-full mb-8 '>
          <h1 className='text-5xl text-[#b4cdf9]  text-center'>About Me</h1>
        </div>
        <div className='w-full hidden md:block h-1 mb-8 bg-white'></div>
      </div>

      <div className='container mx-auto flex md:flex-row flex-col  gap-10'>

        <div className='w-1/2 md:w-full mx-auto '>
          <motion.img
            className="profileuser bg-[#3f506d]"
            src="/avtar.png"
            alt=""
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
         
        </div>
        <motion.div
          className="right w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
      
          <h2 className='md:text-4xl text-3xl text-center text-[#b4cdf9]'>Hi i'm Aakash Dalal</h2>
          <div className='text-lg md:text-xl p-3 space-y-4 m-4 text-gray-300 '>
            <p>
              A passionate Frontend Developer with a strong eye for detail and a love for creating visually engaging, user-friendly web interfaces.</p>

            <p>With hands-on experience in <strong className='text-[#b4cdf9]'>React.js, Tailwind CSS, JavaScript, and responsive design principles</strong>, I specialize in building modern web applications that are fast, accessible, and optimized for all devices.</p>

            <p>I enjoy turning complex problems into simple, elegant solutions and constantly strive to stay updated with the latest in web technologies.  I aim to deliver a seamless user experience every time.</p>
          </div>

          <div>
            <div className='flex gap-7 items-center p-3 m-4'>

              <span>
                <img className='w-12' src="/html.svg" alt="" />
              </span>

              <span>
                <img className='w-12' src="/css.svg" alt="" />
              </span>

              <span>
                <img className='w-12' src="/js.svg" alt="" />
              </span>

              <span>
                <img className='w-12' src="/react.svg" alt="" />
              </span>

              <span>
                <img className='w-12' src="/tailwind.png" alt="" />
              </span>
            </div>
          </div>

        </motion.div>
        </div>
    </section>
  )
}

export default About
