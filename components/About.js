import React from 'react'
import { motion, spring} from "framer-motion"
import { useState, useEffect } from 'react';


const About = () => {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
    console.log(mobile)
  }, []);
  return (
    <div name='about' className='w-full h-screen'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pt-4'>
            <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>About</h2>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <motion.p 
              initial={{transform: "translateX(-300px)"}} whileInView={{transform: "translateX(0px)"}} transition={{type: 'spring'}}
            >
              Hi, I am George, nice to meet you. Please take a look around.
            </motion.p>
          </div>
          <div className='bg-p1/70'>
            <motion.p
              initial={{transform: "translateY(100px)"}} whileInView={{transform: "translateY(0px)"}} transition={{type: 'spring'}}
            >
            I have been deeply engaged in guiding clients through their cloud migration journey, leveraging my expertise in proof of technologies and pilot projects for Cloud Platform Management encompassing vanilla Kubernetes and OpenShift. My passion for DevSecOps is evident in the workshops I design and conduct, facilitating smooth CI/CD adoption and efficient Day 2 management solutions for clients. As a specialized technical professional, my focus on AIOps has allowed me to demonstrate its invaluable role in proactively detecting hidden issues and optimizing business application availability for enhanced operational efficiency. Moreover, I have been working on some Blockchain and local GPT projects recently.
            </motion.p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About