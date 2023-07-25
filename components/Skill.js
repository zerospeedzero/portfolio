import React from 'react'
import Image from 'next/image'
import { motion, useScroll } from "framer-motion"
import {SiAnsible} from 'react-icons/si'

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
    {name: 'OpenShift', image: '/assets/skills/red-hat-openshift-seeklogo.com.svg', hints: 'OpenShift'},
    {name: 'Kubernetes', image: '/assets/skills/kubernetes.svg', hints: 'Kubernetes'},
    {name: 'AIOps', image: '/assets/skills/AIOps_Technical_Specialist_-_Foundational.png', hints: 'AIOps'},
    {name: 'Data Science', image: '/assets/skills/Applied_Data_Science_with_Python.png', hints: 'Python'},
    {name: 'Blockchain', image: '/assets/skills/IBM-Blockchain-Foundation-Developer-V2.png', hints: 'Blockchain'},
    {name: 'GitLab', image: '/assets/skills/gitlab-seeklogo.com.svg', hints: 'GitLab'},
    {name: 'Azure', image: '/assets/skills/microsoft-azure-seeklogo.com.svg', hints: 'Azure Cloud'},   
    {name: 'Next JS', image: '/assets/skills/next-js-seeklogo.com.svg', hints: 'Next JS'},
    {name: 'RHCE', image: '/assets/skills/ansible-seeklogo.com.svg', hints: 'RHCE'},
    {name: 'MCTS', image: '/assets/skills/badge-opencts-master.png', hints: 'Master CTS'},
    {name: 'ITIL v3 Expert', image: '/assets/skills/ITIL.svg', hints: 'ITIL'},
    {name: 'Instana', image: '/assets/skills/Instana_by_IBM_-_Technical_Sales_Intermediate.png', hints: 'Instana'},
  ]
  return (
    <div id='skill' name='skill' className='w-full min-h-screen pt-[100px]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div>
          <p className='text-4xl inline border-b-4 border-pink-400 '>Skills</p>
          <p className='py-8'>There are the technologies I have worked with recently</p>
        </div>
        <motion.div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-0'
          variants={container} initial="hidden" whileInView="visible"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white/80 text-p1 rounded-xl p-4'
              variants={item}
            >
              <Image width="100" height="100" className='w-40 h-40 mx-auto rounded-lg' alt={skill.name} src={skill.image}/>
              <p className='mt-2 text-xl font-bold'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skill