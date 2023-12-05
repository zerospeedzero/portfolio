import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skill from "@/components/Skill"
import Project from "@/components/Project"
import Contact from "@/components/Contact"
import React, { useState, useEffect, useRef } from 'react'
// import GLOBE from 'vanta/dist/vanta.globe.min'
import GLOBE from '@/components/Globe/VantaGlobe'
// import GLOBE from 'vanta/src/vanta.globe'
import { motion, useScroll } from "framer-motion"
import Head from "next/head"
// import Head from  "next/script"
import Script from 'next/script';
 
export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  const changeRotation = () => {
    setVantaEffect(GLOBE({
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 10.00,
      size: 1,
      scale: 1,
      backgroundColor: 0x171737,
      rotation: 4,
      color: 0xff44ff,
    }))    
  }
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 10.00,
        size: 1,
        scale: 1,
        backgroundColor: 0x171737,
        color: 0xEF476E,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />      
      <motion.div className='bg-p1 fixed top-20 bottom-0 left-0 right-0 z-[-10]' ref={myRef}
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2, delay: 2.8}}
      >
      </motion.div>
      <Navbar/>
      <Hero/>
      {/* <button className="w-5 h-5 text-white" onClick={()=> {changeRotation();}}>Click</button> */}
      <About/>
      <Project/>
      <Skill/>
      <Contact/> 
    </>
  )
}
