import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, easeInOut, motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import {FaWindowClose} from 'react-icons/fa' 
import VideoPlayer from '@/components/VideoPlayer'
import HtmlReader from '@/components/HtmlReader';
import ProjectItem from '@/components/ProjectItem';

function Box({project, setShow}) {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.()
      });
    }
  }, [isPresent, safeToRemove]);
  return (
    <div className="w-screen bg-gray-600/60 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-10" ref={ref}>
      <div className="max-w-[1180px] w-full h-full bg-p2 text-p1 min-h-[100px] mx-auto overflow-y-auto">
        <div className='bg-s1 flex justify-between items-center'>
          <h3 className="text-3xl p-4">{project.name}</h3>
          <button className="text-p1 px-10 py-4" onClick={()=>{setShow(false)}}><FaWindowClose className='w-6 h-6'/></button>
        </div>
        <div className='p-2  md:p-8 text-left'>
          {/* <HtmlReader filename={project.html}/> */}
          <ProjectItem item={project.html}/>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <button className="bg-a1 text-p1 px-8 py-2 mb-8 rounded-md" onClick={()=>{setShow(false)}}>Close</button>
        </div>
      </div>
    </div>
  )
}

function Video({videoUrl, setPlay}) {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.()
      });
    }
  }, [isPresent, safeToRemove]);
  return (
    <div className="w-screen h-screen bg-gray-900/90 flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-10" ref={ref}>
      <div className="max-w-[1180px] min-h-[100px]">
        <VideoPlayer videoUrl={videoUrl} setPlay={setPlay}/> 
      </div>
    </div>
  )
}


const Project = () => {
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
  }, []);  
  const [show, setShow] = useState(false);
  const [play, setPlay] = useState(false);
  const [current, setCurrent] = useState(null);
  const projects = [
    {name: 'Microservices', html:  'microservices', image: '/assets/projects/microservices.gif'},
    {name: 'NFT SAIT marketplace', html:  'nft', image: '/assets/projects/nft.gif', video: '/assets/projects/nft.mp4'},
    {name: 'Interactive Map', html:  'fishcreek', image: '/assets/projects/fishcreek.gif', video: '/assets/projects/fishcreek.mp4'},
    {name: 'Shangri-La Resort', html:  'shangri-la', image: '/assets/projects/shangri-la.gif', video: '/assets/projects/shangri-la.mp4'},
    {name: 'Animation by Vanilla JS', html:  'secret', image: '/assets/projects/secret.gif', video: '/assets/projects/secret.mp4'},
    {name: 'eCommerce', html:  'ec', image: '/assets/projects/ecommerce.gif', video: '/assets/projects/ecommerce.mp4'},
    {name: 'Visual effect and 3D', html:  '', image: '/assets/projects/dance.gif', video: '/assets/projects/dance.mp4'},
  ]
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: easeInOut,
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }
  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }  
  return (
    <div id="project" name="project" className='pt-[100px] min-h-screen'>
      <div className='max-w-[1180px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</h2>
          <p className='py-3'>Check out some of my recent work</p>
        </div>
        { isMobile != true ? (
          // Desktop code
          <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible"> 
          { projects.map((project, index) => (
            <motion.div className="mb-16 shadow-md shadow-gray-900 rounded-lg border-2 border-p2" key={index} variants={item}>
              <div className="relative  group container rounded-md flex justify-center items-center mx-auto content-div">
                <img className="absolute z-[-1]" src={project.image} width="auto" height="auto"/>
                {/* hover effect */}
                <div className="w-full aspect-video flex flex-col justify-center items-center rounded-md  bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 md:group-hover:opacity-100">
                  <span  className='text-2xl text-p2  font-bold tracking-wider'>
                    {project.name} 
                  </span>
                  <div className='pt-8 text-center md:opacity-100'>
                    { project.html && <button className='text-center min-w-[100px] rounded-lg px-2 py-2 m-2 bg-white text-p1 font-bold text-md'
                      onClick={() => {setCurrent(project);setShow(!show)}}
                    >
                      Detail
                    </button>}
                    {(show && current.name == project.name) ? <Box project={current} setShow={setShow}/> : null}
                    { project.video && <button className='invisible md:visible text-center min-w-[100px] rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-md'
                      onClick={()=>{setCurrent(project);setPlay(true)}}
                    >
                      Demo
                    </button>}
                    {(play && current.name == project.name)? <Video videoUrl={current.video} setPlay={setPlay}/> : null}
                  </div>                                  
                </div>
              </div>
              <div className='bg-p1 flex flex-col justify-center items-center py-2'>
                <h3 className=' text-s1 text-lg text-justify '>{project.name}</h3> 
              </div>
            </motion.div>
          ))}
          </motion.div>
        ) : (
          // Mobile code
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"> 
          { projects.map((project, index) => (
            <div className="mb-16 shadow-md shadow-gray-900 rounded-lg border-2 border-p2" key={index}>
              <div className="relative  container flex justify-center items-center mx-auto ">
                <img className="absolute  z-[-1]" src={project.image} width="auto" height="auto"/>
                {/* hover effect */}
                <div className="w-full aspect-video flex flex-col justify-center items-center rounded-md bg-transparent">
                  <button className="w-full h-full" onClick={() => {setCurrent(project); if (project.html == '') {setPlay(true)} else {setShow(!show)};}}></button>
                  {(show && current.name == project.name)? <Box project={current} setShow={setShow}/> : null}
                  {(play && current.name == project.name)? <Video videoUrl={current.video} setPlay={setPlay}/> : null}
                </div>
              </div>

              <div className='flex bg-p1 p-8 flex-col justify-center items-center py-2'>
                <h3 className=' text-p2 '>{project.name}</h3> 
              </div>

            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Project