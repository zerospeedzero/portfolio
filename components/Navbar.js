// import Link from 'react-scroll'
import Link from 'next/link'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaLinkedinIn, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { motion, useScroll } from "framer-motion"
import ChatBot from "@/components/ChatBot"
import {useRouter} from 'next/router'
import {FaRobot} from 'react-icons/fa'

import { RGB_PVRTC_2BPPV1_Format } from 'three';

const Navbar = () => {
  const router = useRouter()
  const navbar = useRef(null)
  const [chat, setChat] = useState(false)
  const [nav, setNav] = useState(false);
  const [activemenu, setActivemenu] = useState(1)
  const menu = [{name: 'Home', link: '#hero'}, 
                {name: 'About', link: '#about'},
                {name: 'Projects', link: '#project'}, 
                {name: 'Skills', link: '#skill'}, 
                {name: 'Contact', link: '#contact'}, 
              ]
  const { scrollYProgress } = useScroll();
  const handleClick = () => {setNav(!nav);}
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
  return (
    <div ref={navbar} className='fixed w-full h-[5rem] flex justify-between items-center px-4 bg-p1 z-10'>
      <button onClick={()=>{router.push('/#hero');}}>
        <motion.div initial={{opacity: 1, scale:1.5, transformX: "translateX(50px)", transformY: "translateY(50px)" }} animate={{opacity:1, scale: 1, transformX: "translateX(100px)", transformY: "translateY(100px)"}}  transition={{duration:1 , delay:0, type: 'spring'}} >
          <Image className='hidden md:block w-[5rem] mt-[2rem] border-4 border-s1 rounded-full' src='/logo3.jpg'  width="150" height="150" alt='logo'
          />
        </motion.div>
      </button>
      {/* menu */}
      <motion.div className='flex flex-col text-s1' initial={{scale: 1.3, transform: "translateY(-70px)" }} animate={{scale: 1, transform: "translateY(0px)"}} transition={{duration:1, delay:2.3}}>
        <ul className='hidden md:flex'>
          {menu.map((item, index) => 
            <motion.li key={index} initial={{scale: 1}} whileHover={{scale: 1.2}} transition={{duration: 0.5 , type: 'spring', ease: 'easeOut'}}
              className='text-lg hover:text-a1'
            >
              <Link href={item.link}>{item.name}</Link>
            </motion.li>
          )}
        </ul>
        <div className='pl-4 pr-4'>
          <motion.div className="bg-s1 h-[2px] opacity-80 origin-left  pl-[-4] mt-2" style={{ scaleX: scrollYProgress }} />
        </div>
      </motion.div>
      {/* Hamburger */}
      <div className='md:hidden z-10 text-s1'onClick={handleClick}>
        {!nav ? <FaBars size={32}/> : <></>}
      </div>
      {/* Mobile menu */}
      <div
        className={
          nav
            ? ' fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-screen bg-p2 text-p1 p-8 ease-in duration-500 z-20'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div className='h-[20%]'>
          <div className='flex w-full items-center justify-between'>
            <Link href='/'>
                <Image className="rounded-full border-4 border-s1" src='/logo3.jpg' width='80' height='80'alt='/'/>
            </Link>
            <div
              onClick={handleClick}
              className='rounded-full bg-p1/70 text-p2 shadow-lg shadow-gray-200 p-2 cursor-pointer absolute top-5 right-5'
            >
              <AiOutlineClose size={20}/>
            </div>
          </div>
          <div className='border-b border-p1/30 my-0'>
            <p className='w-[85%] md:w-[90%] py-4 text text-p1/80'>
              Let&#39;s build something legendary together
            </p>
          </div>
        </div>
        <div className='h-[60%] flex flex-col justify-center items-center'>
          <div className='py-4 flex flex-col justify-center'>
            <ul className='flex flex-col'>
              <Link href='/'>
                <li  onClick={() => setNav(false)} className='py-4 text-5xl font-bold'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-5xl font-bold'>
                  About
                </li>
              </Link>
              <Link href='/#project'>
                <li onClick={() => setNav(false)} className='py-4 text-5xl font-bold'>
                  Projects
                </li>
              </Link>
              <Link href='/#skill'>
                <li onClick={() => setNav(false)} className='py-4 text-5xl font-bold'>
                  Skills
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-5xl font-bold'>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='h-[20%]'>
          <div className=''>
            <p className=' text-p1/80 border-t border-p1/30 pt-4'>
              Let&#39;s Connect
            </p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <Link
                href='https://www.linkedin.com/in/george-cheng-1aa2ab134/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg bg-blue-600 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn className=" text-white" size={50}/>
                </div>
              </Link>
              <Link
                href='https://github.com/zerospeedzero'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg bg-s2 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub className=" text-white" size={50} />
                </div>
              </Link>
              <Link href='mailto: zerospeedzero@gmail.com'>
                <div
                  onClick={() => setNav(!nav)}
                  className='rounded-full bg-a1 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <AiOutlineMail className=" text-p1" size={50} />
                </div>
              </Link>
              <Link href='/#contact'>
                <div
                  onClick={() => setNav(!nav)}
                  className='rounded-full bg-s1 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <BsFillPersonLinesFill className=" text-p1" size={50}/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Social icons */}
      <motion.div className='flex fixed flex-col bottom-[10%] left-0'
        initial={{opacity: 0 }} animate={{opacity:1}} transition={{duration:1, delay:3.3, type: 'spring'}}
      >
        <ul>
          <li className='hidden xl:flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 opacity-40 hover:opacity-100 rounded-tr-lg hover:rounded-none'>
            <Link className='pl-2 font-bold flex justify-between items-center w-full text-p2' href="https://www.linkedin.com/in/george-cheng-1aa2ab134/" target="_blank">
              LinkedIn <FaLinkedin className="text-p2" size={32}/>
            </Link>
          </li>
          <li className='hidden xl:flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-s2 opacity-40 hover:opacity-100'>
            <Link className='pl-2 font-bold flex justify-between items-center w-full text-p2' href="https://github.com/zerospeedzero" target="_blank">
              GitHub <FaGithub size={32}/>
            </Link>
          </li>
          <li className='hidden xl:flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-a1 opacity-40 hover:opacity-100'>
            <Link className='pl-2 font-bold flex justify-between items-center w-full text-p1' href="mailto: zerospeedzero@gmail.com">
              Mail <HiOutlineMail size={32}/>
            </Link>
          </li>
          <li className='hidden xl:flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-s1 opacity-40 hover:opacity-100 rounded-br-lg hover:rounded-none'>
            <Link className='pl-2 font-bold flex justify-between items-center w-full text-p1' href="/#contact">
              Form <BsFillPersonLinesFill size={32}/>
            </Link>
          </li>
        </ul>
      </motion.div>
      {/* Chatbot*/}
        <motion.div className='flex fixed flex-col bottom-[10%] right-4'
          initial={{opacity: 0 }} animate={isMobile != true ?( {opacity:1}) :({opacity:0})}  transition={{duration:1, delay:3.5, type: 'spring'}}
        >
          <motion.div
            initial={{scale: 1, rotate: 0}} whileHover={{scale:1.2, rotate: 0}} 
            animate={ chat == false ? ({ scale: [1, 1.1, 1.2, 1], rotate: [0,20,-20,0]}):({ scale: [1, 1, 1, 1], rotate: [0,0,0,0]})} 
            transition={{repeat: Infinity, repeatDelay: 2}}
            onClick={()=>{setChat(!chat)}}
          >
            <FaRobot className='bg-s1 text-p1 w-12 h-12 rounded-full p-1'/>

          </motion.div>
        </motion.div>
        {/* <div className='fixed top-0 left-0 right-0 bottom-0'> */}
          <div className='fixed bottom-[10%] mb-20 right-4' onMouseLeave={()=>{setChat(false)}}>
            {chat && <ChatBot/>}
          </div>
        {/* </div> */}
    </div>
  )
}
export default Navbar