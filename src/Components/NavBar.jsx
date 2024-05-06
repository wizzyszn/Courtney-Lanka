import React from 'react'
import logo from '../Assets/Logos/logo1.png'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
export default function NavBar() {
  return (
    <div className=' pt-5 pb-5 border flex justify-around items-center shadow-sm'>
        <div><img src={logo} alt="logo"   /></div>
        <div className=' flex gap-7 items-center'>
        <Link>How to start</Link>
        <Link>Services</Link>
        <Link>Technologies</Link>
        <Link>Careers</Link>
        </div>
        <div className=' flex gap-4 items-center'>
        <Link className=' p-2 rounded-lg border-2 border-[#16205F] flex items-center gap-2'>Build A Team<GoArrowRight /></Link>
        <Link>Contact us</Link>
        </div>
    </div>
  )
}
