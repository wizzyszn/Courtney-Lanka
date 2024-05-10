import React, { useContext } from 'react'
import logo from '../Assets/Logos/logo1.png'
import { Link, NavLink } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import { Context } from '../contexts/AppContext';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import {motion} from "framer-motion"
export default function NavBar() {
  const {toggle,setToggle} = useContext(Context)
  return (
    <motion.div
      initial ={{ y : -10 , opacity : 0}}
      animate = {{y : 0, opacity : 1}}
      transition = {{duration : 0.3, ease : "easeIn", type : 'spring', damping : 10}}
      className=' pt-5 pb-5 border flex justify-around items-center bg-white` shadow-sm max-[720px]:sticky top-0 z-[1000] max-[720px]:justify-between max-[720px]:pl-4 max-[720px]:pr-4 max-[720px]:pb-0 max-[720px]:pt-0 sticky bg-white'>
        <div className=' size-32 flex items-center'>
        <Link to='/'><img src={logo} alt="logo"   /></Link></div>
        <div className=' flex gap-7 items-center max-[720px]:hidden'>
        <NavLink className={({isActive}) => isActive ? 'text-[#FF9900] font-medium transition-all ease-in duration-75' : 'font-medium  text-[#16205F] transition-all ease-in duration-75' }to='/get-started'>How to start</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-[#FF9900] font-medium transition-all ease-in duration-75' : 'font-medium  text-[#16205F] transition-all ease-in duration-75' }to='/our-services'>Services</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-[#FF9900] font-medium transition-all ease-in duration-75' : 'font-medium  text-[#16205F] transition-all ease-in duration-75' }to='/technologies'>Technologies</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-[#FF9900] font-medium transition-all ease-in duration-75' : 'font-medium  text-[#16205F] transition-all ease-in duration-75' }to ='/careers'>Careers</NavLink>
        </div>
        <div className=' flex gap-4 items-center max-[720px]:hidden'>
        <NavLink className=' p-2 rounded-lg border-2 border-[#16205F] flex items-center gap-2' >Build A Team<GoArrowRight /></NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? 'text-[#FF9900] font-medium transition-all ease-in duration-75' : 'font-medium  text-[#16205F] transition-all ease-in duration-75'}>Contact us</NavLink>
        </div>
        {
         toggle ? <RxCross2 className=' min-[720px]:hidden size-9' onClick={()=>{
          setToggle(false)
         }} /> : <RxHamburgerMenu className=' min-[720px]:hidden size-9' onClick={()=>{
          setToggle(true)
         }} />
        }
    </motion.div>
  )
}
