import React from 'react'
import Image from 'next/image'
import { motion, useScroll } from "framer-motion"

const Skill = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  const skills  = [
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},
    {name: 'HTML', image: '/assets/html.png', hints: 'HTML and CSS skills'},    
  ]
  return (
    <div id='skill' name='skill' className='w-full min-h-screen pt-[100px]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div>
          <p className='text-4xl inline border-b-4 border-pink-400 '>Skills</p>
          <p className='py-8'>There are the technologies I have worked with</p>
        </div>
        <motion.div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-0'
          variants={container} initial="hidden" whileInView="visible"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
              variants={item}
            >
              <Image width="50" height="50"className='w-20 mx-auto' alt={skill.name} src={skill.image}/>
              <p className='my-4'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  )
}

export default Skill