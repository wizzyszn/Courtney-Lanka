import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
import {motion,AnimatePresence} from 'framer-motion'
export default function NavBarExtension() { 
  return (
    <AnimatePresence mode='wait'>
    <motion.div className=' h-[25rem] p-4 bg-white flex items-start min-[720px]:hidden'
    id="1"
    initial ={{opacity : 0, y : -10}}
    animate = {{opacity : 1, y : 0}}
    exit={{opacity : 0, y : -10}}
    transition={{duration: 0.2, ease : 'easeIn'}}
    
    >

      <div className=' flex flex-col gap-9 w-full' > 
            <NavLink className={({isActive}) => isActive ? 'text-[#FF9900] font-medium text-xl transition-all ease-in duration-75' : 'font-medium text-lg text-[#16205F] transition-all ease-in duration-75'} to='/get-started'> How to start</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-[#FF9900] font-medium text-xl transition-all ease-in duration-75' : 'font-medium text-lg text-[#16205F] transition-all ease-in duration-75'} to='/our-services'> Services</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-[#FF9900] font-medium text-xl transition-all ease-in duration-75' : 'font-medium text-lg text-[#16205F] transition-all ease-in duration-75'} to='/technologies'>Technologies</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-[#FF9900] font-medium text-xl transition-all ease-in duration-75' : 'font-medium text-lg text-[#16205F] transition-all ease-in duration-75'} to='/careers'>Careers</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-[#FF9900] font-medium text-xl transition-all ease-in duration-75' : 'font-medium text-lg text-[#16205F] transition-all ease-in duration-75'} to='/contact'>Contact us</NavLink>
            <div className=' w-[80%]  m-auto  text-white justify-center  p-2 bg-gradient-to-tr from-[#FF9900] to-[#F2CB00] rounded-lg flex items-center gap-1 cursor-pointer'><span>Build a team</span><GoArrowRight /></div>
        </div>       

    </motion.div>
    </AnimatePresence>
  )
}
