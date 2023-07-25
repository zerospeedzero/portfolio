import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaLinkedinIn, FaFacebook} from 'react-icons/fa'
import { HiOutlineChevronDoubleUp, HiOutlineMail } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import {motion, useScroll, useMotionValueEvent, useMotionValue} from 'framer-motion'

const Contact = () => {
  return (
    <div id='contact' name='contact' className='w-full min-h-screen'>
      <div className='max-w-[1000px] m-auto px-2 pt-[80px] w-full'>
        <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</h2>
        <div className='pt-8 grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <motion.div className='bg-p2/90 opacity-90 text-p1 col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-p2 rounded-xl p-4'
            initial={{scale:0.2}} whileInView={{scale:1}} transition={{type: 'spring', bounce: 0.5, duration: 1}}
          >
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h3 className='text-2xl py-2'>George Cheng</h3>
                <p>IT Specialist</p>
                <p className='py-2'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='pt-8'>Connect With Me</p>
                <div className='flex flex-row justify-center items-center'>
                    <li className='h-[60px] w-[60px] bg-blue-600 text-p2 flex flex-col justify-center items-center m-2 rounded-lg hover:scale-125 duration-500'>
                      <Link className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/george-cheng-1aa2ab134/" target="_blank">
                        <FaLinkedin className="text-white" size={30}/>
                      </Link>
                    </li>
                    <li className='h-[60px] w-[60px] bg-s2 flex flex-col justify-center items-center m-2 rounded-lg hover:scale-125 duration-500'>
                      <Link className='flex justify-between items-center w-full text-gray-300' href="https://github.com/zerospeedzero" target="_blank">
                        <FaGithub className="text-white" size={32}/>
                      </Link>
                    </li>
                    <li className='h-[60px] w-[60px] bg-a1 flex flex-col justify-center items-center m-2 rounded-lg hover:scale-125 duration-500'>
                      <Link className='flex justify-between items-center w-full text-gray-300' href="mailto: zerospeedzero@gmail.com">
                        <HiOutlineMail className="text-p1" size={32}/>
                      </Link>
                    </li>
                    <li className='h-[60px] w-[60px] bg-s1 flex flex-col justify-center items-center m-2 rounded-lg hover:scale-125 duration-500'>
                      <Link className='flex justify-between items-center w-full text-gray-300' href="/#contact">
                        <BsFillPersonLinesFill className="text-p1" size={32}/>
                      </Link>
                    </li>
                </div>
              </div>
            </div>
          </motion.div>

          {/* right */}
          <motion.div className='bg-gradient-to-b from-p2/90 to-p2/70 text-p1 col-span-3 w-full shadow-md shadow-gray-400 rounded-xl lg:p-4'
            initial={{scale:0.2}} whileInView={{scale:1}} transition={{type: 'spring', bounce: 0.5, duration: 1}}
          >
            <div className='p-4'>
              <form
                action='https://getform.io/f/0618bb9b-ddc7-415d-a1a2-87fc7c3f6eeb'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='text-sm py-1'>Name</label>
                    <input
                      className='border-2 rounded-lg p-1 flex border-gray-300'
                      type='text'
                      name='name'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm py-1'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-1 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-1'>
                  <label className='text-sm py-1'>Email</label>
                  <input
                    className='border-2 rounded-lg p-1 flex border-gray-300'
                    type='email'
                    name='email' 
                    required
                  />
                </div>
                <div className='flex flex-col py-1'>
                  <label className='text-sm py-1'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-1 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-1'>
                  <label className='text-sm py-1'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-1 border-gray-300'
                    rows='4'
                    name='message'
                    required
                  ></textarea>
                </div>
                <button className='bg-s2 text-bold text-lg text-p1 rounded-md w-full p-4 mt-4 hover:bg-s1'>
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
