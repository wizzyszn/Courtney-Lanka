import React from 'react'
import header_img from '../Assets/images/Rectangle 26.png'

import { GoArrowRight } from "react-icons/go";
export default function Header() {
  return (
    <div className=' p-48 pt-6 h-svh mt-2 '>
        <div className=' relative h-[100%]' >   
        <div className=' flex flex-col gap-4 h-[35rem] w-[40%] z-20 justify-center rounded-tr-[5rem] absolute bg-white  top-20 '>
            <h1 className=' text-6xl'>Building dev team, Quickly and Affordably</h1>
            <p>We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.</p>
            <div className=' w-fit p-2 bg-gradient-to-tr from-[#FF9900] to-[#F2CB00] rounded-lg flex items-center gap-1 cursor-pointer'><span>Build a team</span><GoArrowRight /></div>
        </div>
        <div className=' z-0 absolute right-8'>
            <img src={header_img} alt="header" />
        </div>
        </div>
        

    </div>
  )
}
