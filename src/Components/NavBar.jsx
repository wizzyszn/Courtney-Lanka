import React from 'react'
import logo from '../Assets/Logos/logo1.png'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";

export default function NavBar() {
  return (
    <div className=' pt-5 pb-5 border flex justify-around items-center shadow-sm'>
        <div><Link to='/'><img src={logo} alt="logo"   /></Link></div>
        <div className=' flex gap-7 items-center'>
        <Link to='/get-started'>How to start</Link>
        <Link to='/our-services'>Services</Link>
        <Link to='/technologies'>Technologies</Link>
        <Link to ='/careers'>Careers</Link>
        </div>
        <div className=' flex gap-4 items-center'>
        <Link className=' p-2 rounded-lg border-2 border-[#16205F] flex items-center gap-2'>Build A Team<GoArrowRight /></Link>
        <Link to='/contact'>Contact us</Link>
        </div>
    </div>
  )
}
