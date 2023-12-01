import {HiArrowNarrowRight} from 'react-icons/hi'
import {useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {motion, useScroll, useMotionValueEvent, useMotionValue} from 'framer-motion'
const Hero = () => {
  // const [opacity, setOpacity] = useState(1)
  // useEffect(() => {
  //   const changeOpacity = () => {
  //     if(window.scrollY >= 90) {
  //       setOpacity(1)
  //     } else {
  //       setOpacity(0)
  //     }
  //   }
  //   window.addEventListener('scroll', changeOpacity);
  // }, [])  
  // const scrollRef = useRef(null)
  // const {scrollYProgress} = useScroll({
  //   target: scrollRef,
  //   offset: ["start start", "end end"]
  // })
  // useEffect(() => {
  //   console.log(scrollYProgress)
  // },[scrollYProgress])

  // const { scrollYProgress } = useScroll()

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })

  return (
    <div name="hero" className='w-full h-screen'>
      {/* Container */}
      <motion.div className="max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full"
      >
        {/* <p className='text-s2 pb-2'>Hi, my name is</p> */}
        <motion.h3 className='text-4xl sm:text-7xl font-bold text-s1' 
          initial={{transform: "translateY(-600px)"}} animate={{transform: "translateY(0px)"}} exit={{opacity: 0}} transition={{duration: 1, delay: 0.7}}
        >
          George Cheng 
        </motion.h3>
        <motion.h3 className='text-3xl sm:text-5xl font-bold text-p2 py-4'
          initial={{transform: "translateX(-800px)"}} animate={{transform: "translateX(0px)"}} transition={{duration: 1, delay: 0.7}}
        >
          IT Specialist
        </motion.h3>
        <motion.p className='text-p2 py-4 max-w-[50rem]'
          initial={{scale:0, opacity: 0}} animate={{scale:1, opacity:1}} transition={{duration: 1, delay: 0.7}}
        >
          I am an IT expert specializing in building and designing exceptional digital experiences. Currently, I am focused on building microservice architecture, DevSecOps, AIOps, Web 3.0 solutions and Graphic Design.
        </motion.p>
        <motion.div className='mt-8'
          initial={{scale:0, opacity: 1}} animate={{rotate: 360, scale:1, opacity:1}} transition={{type: 'spring',duration: 2, delay: 2}} 
        >
          <Link href="/#project">
          <button className='text-s1 group border-2 border-s1 px-6 py-3 my-2 flex items-center hover:bg-s2 hover:border-s2 hover:text-a1'>
            View Projects 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero